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
  loginApi,
  generateLoginPayload,
  validateLoginPayload,
} from "./helpers";
import { loginPayloadInterface } from "./interfaces";
import { Var } from "../../../../global/script";
import "@phosphor-icons/webcomponents";

@Component({
  tag: "v-login",
  styleUrl: "v-login.css",
  shadow: true,
})
export class VLogin {
  @Event({
    eventName: "authSuccessful",
    bubbles: true,
  })
  authSuccessfulEventEmitter: EventEmitter;

  @Listen("buttonClick") handleButtonClickEvent(e) {
    if (e.detail.action === "loginUser") {
      this.loginUser();
    }
  }

  @Listen("textInput") handleTextInput(e) {
    if (e.detail.name === "userName") {
      this.userName = e.detail.value;
    } else if (e.detail.name === "password") {
      this.password = e.detail.value;
    }
  }

  @State() isLoggingIn: boolean = false;
  private userName: string = "";
  private password: string = "";

  async loginUser() {
    let loginPayload: loginPayloadInterface = generateLoginPayload(
      this.userName,
      this.password
    );
    let { isValid, validationMessage } = validateLoginPayload(loginPayload);
    if (!isValid) {
      return alert(validationMessage);
    }
    this.isLoggingIn = true;
    let { success, message } = await loginApi(loginPayload);
    this.isLoggingIn = false;
    if (!success) {
      return alert(message);
    }
    this.authSuccessfulEventEmitter.emit();
  }

  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display">Log in</e-text>
          <l-spacer value={1.5}></l-spacer>
          <e-input type="text" name="userName" placeholder="Username"></e-input>
          <l-spacer value={1.5}></l-spacer>
          <e-input
            type="password"
            name="password"
            placeholder="Password"
          ></e-input>
          <l-spacer value={1.5}></l-spacer>
          <e-button action="loginUser" active={this.isLoggingIn} size="wide">
            Log in
          </e-button>
          <l-spacer value={1}></l-spacer>
          <e-link url="/signup">Create an account</e-link>
          <l-spacer value={1.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1.5}></l-spacer>
          <e-text variant="footnote">
            By logging in, you accept our{" "}
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
