import {
  Component,
  Event,
  EventEmitter,
  State,
  Host,
  Listen,
  h,
} from "@stencil/core";
import {
  signupApi,
  generateSignupPayload,
  validateSignupPayload,
  generateUserNameAvailabilityPayload,
  validateUserNameAvailabilityPayload,
  userNameAvailabilityApi,
} from "./helpers";
import {
  signupPayloadInterface,
  userNameAvailabilityPayloadInterface,
} from "./interfaces";
import { Var } from "../../../../global/script";
import "@phosphor-icons/webcomponents";

@Component({
  tag: "v-signup",
  styleUrl: "v-signup.css",
  shadow: true,
})
export class VSignup {
  @Event({
    eventName: "authSuccessful",
    bubbles: true,
  })
  authSuccessfulEventEmitter: EventEmitter;

  @Listen("buttonClick") handleButtonClickEvent(e) {
    if (e.detail.action === "signupUser") {
      this.signupUser();
    }
  }

  @Listen("textInput") handleTextInput(e) {
    if (e.detail.name === "userName") {
      this.userName = e.detail.value;
      if (this.userName.length > 0) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.getUsernameAvailability();
        }, 500);
      } else {
        this.userNameAvailability = "";
      }
    } else if (e.detail.name === "password") {
      this.password = e.detail.value;
    }
  }

  SignUpUserNameInputEl: HTMLEInputElement;

  @State() isSigningUp: boolean = false;
  @State() isCheckingUserName: boolean = false;
  @State() userNameAvailability: string = "";

  private userName: string = "";
  private password: string = "";
  private timer: any;

  async signupUser() {
    let signupPayload: signupPayloadInterface = generateSignupPayload(
      this.userName,
      this.password
    );
    let { isValid, validationMessage } = validateSignupPayload(signupPayload);
    if (!isValid) {
      return alert(validationMessage);
    }
    this.isSigningUp = true;
    let { success, message } = await signupApi(signupPayload);
    this.isSigningUp = false;
    if (!success) {
      return alert(message);
    }
    this.authSuccessfulEventEmitter.emit();
  }

  async getUsernameAvailability() {
    this.userNameAvailability = "";
    this.SignUpUserNameInputEl.style.marginBottom = "1em";
    let userNameAvailabilityPayload: userNameAvailabilityPayloadInterface =
      generateUserNameAvailabilityPayload(this.userName);
    let { isValid, validationMessage } = validateUserNameAvailabilityPayload(
      userNameAvailabilityPayload
    );
    if (!isValid) {
      return alert(validationMessage);
    }
    let { success, message } = await userNameAvailabilityApi(
      userNameAvailabilityPayload
    );
    this.SignUpUserNameInputEl.style.marginBottom = "0em";
    if (!success) {
      this.userNameAvailability = "unavailable";
      return console.log(message);
    }
    this.userNameAvailability = "available";
  }

  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display">Sign up</e-text>
          <l-spacer value={1.5}></l-spacer>
          <e-input
            type="text"
            name="userName"
            placeholder="Username"
            ref={(el) => (this.SignUpUserNameInputEl = el as HTMLEInputElement)}
          ></e-input>
          {this.userNameAvailability.length > 0 && (
            <div class="username-availability-status-container">
              {this.userNameAvailability === "available" ? (
                <l-row justifyContent="start">
                  <ph-check
                    color="var(--color__green--200)"
                    size="1em"
                  ></ph-check>
                  <span class="success"> {this.userName} is available</span>
                </l-row>
              ) : (
                <l-row justifyContent="start">
                  <ph-x color="var(--color__red--200)" size="1em"></ph-x>
                  <span class="failed"> {this.userName} is taken</span>
                </l-row>
              )}
            </div>
          )}
          <l-spacer value={1.5}></l-spacer>
          <e-input
            type="password"
            name="password"
            placeholder="Password (Min. 8 letters)"
          ></e-input>
          <l-spacer value={1.5}></l-spacer>
          <e-button action="signupUser" active={this.isSigningUp} size="wide">
            Sign up
          </e-button>
          <l-spacer value={1}></l-spacer>
          <e-link url="/login">Log into existing account</e-link>
          <l-spacer value={1.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1.5}></l-spacer>
          <e-text variant="footnote">
            By signing up, you accept our{" "}
            <e-link variant="externalLink" url={Var.app.policy.tos.url}>
              terms of service
            </e-link>{" "}
            &{" "}
            <e-link variant="externalLink" url={Var.app.policy.privacy.url}>
              privacy policy
            </e-link>
          </e-text>
        </c-card>
      </Host>
    );
  }
}
