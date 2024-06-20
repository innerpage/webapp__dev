import {
  Component,
  Event,
  EventEmitter,
  Prop,
  State,
  FunctionalComponent,
  Host,
  Listen,
  Watch,
  h,
} from "@stencil/core";
import {
  loginApi,
  generateLoginPayload,
  validateLoginPayload,
  signupApi,
  generateSignupPayload,
  validateSignupPayload,
  generateUserNameAvailabilityPayload,
  validateUserNameAvailabilityPayload,
} from "./helpers";
import {
  loginPayloadInterface,
  signupPayloadInterface,
  userNameAvailabilityPayloadInterface,
} from "./interfaces";
import { gsap } from "gsap";
import { Var } from "../../../global/script";
import "@phosphor-icons/webcomponents";
import { userNameAvailabilityApi } from "./helpers/availability/apis/userNameAvailabilityApi";

@Component({
  tag: "p-auth",
  styleUrl: "p-auth.css",
  shadow: true,
})
export class PAuth {
  @Event({
    eventName: "authSuccessful",
    bubbles: true,
  })
  authSuccessfulEventEmitter: EventEmitter;

  @Listen("buttonClick") handleButtonClickEvent(e) {
    if (e.detail.action === "loginUser") {
      this.loginUser();
    } else if (e.detail.action === "signupUser") {
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

  @Prop() view: string;

  @State() activeView: string;
  @State() isLoggingIn: boolean = false;
  @State() isSigningUp: boolean = false;
  @State() isCheckingUserName: boolean = false;
  @State() userNameAvailability: string = "";

  @Watch("view") watchView(newVal: string, oldVal: string) {
    this.reset();
    if (newVal != oldVal) {
      this.activeView = newVal;
    }
  }

  BannerEl: HTMLCBannerElement;
  SignUpUserNameInputEl: HTMLEInputElement;

  private userName: string = "";
  private password: string = "";
  private tl: any = gsap.timeline();
  private timer: any;

  reset() {
    this.userName = "";
    this.password = "";
    this.isLoggingIn = false;
    this.isSigningUp = false;
  }

  componentWillLoad() {
    this.reset();
    this.activeView = this.view;
  }

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
    if (!success) {
      this.userNameAvailability = "unavailable";
      return alert(message);
    }

    this.SignUpUserNameInputEl.style.marginBottom = "0em";

    this.userNameAvailability = "available";
  }

  hideBanner() {
    this.tl.to(this.BannerEl, {
      height: "0px",
      opacity: 0,
      duration: 0.15,
      marginTop: "0em",
    });
  }

  showBanner() {
    this.tl.to(this.BannerEl, {
      height: "auto",
      opacity: 1,
      marginTop: "1em",
      duration: 0.15,
    });
  }

  LogIn: FunctionalComponent = () => [
    <header>
      <l-row justifyContent="space-between">
        <e-text variant="display">Log in</e-text>
        <e-button variant="light" action="closeModal">
          <ph-x color="var(--color__white--brighter)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </header>,
    <l-spacer value={1.5}></l-spacer>,
    <e-input type="text" name="userName" placeholder="Username"></e-input>,
    <l-spacer value={1.5}></l-spacer>,
    <e-input type="password" name="password" placeholder="Password"></e-input>,
    <l-spacer value={1.5}></l-spacer>,
    <e-button action="loginUser" active={this.isLoggingIn} size="wide">
      Log in
    </e-button>,
    <l-spacer value={1}></l-spacer>,
    <e-button variant="link" action="openSignupModal">
      Create an account
    </e-button>,
    <l-spacer value={1.5}></l-spacer>,
    <l-seperator></l-seperator>,
    <l-spacer value={1.5}></l-spacer>,
    <e-text variant="footnote">
      By logging in, you accept our{" "}
      <e-link variant="externalLink" url={Var.app.policy.tos.url}>
        terms of service
      </e-link>{" "}
      &{" "}
      <e-link variant="externalLink" url={Var.app.policy.privacy.url}>
        privacy policy
      </e-link>
    </e-text>,
  ];

  SignUp: FunctionalComponent = () => [
    <header>
      <l-row justifyContent="space-between">
        <e-text variant="display">Sign up</e-text>
        <e-button variant="light" action="closeModal">
          <ph-x color="var(--color__white--brighter)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </header>,
    <l-spacer value={1.5}></l-spacer>,
    <e-input
      type="text"
      name="userName"
      placeholder="Username"
      ref={(el) => (this.SignUpUserNameInputEl = el as HTMLEInputElement)}
    ></e-input>,
    this.userNameAvailability.length > 0 && (
      <div class="username-availability-status-container">
        {this.userNameAvailability === "available" ? (
          <l-row justifyContent="start">
            <ph-check color="var(--color__green--200)" size="1em"></ph-check>
            <span class="success"> {this.userName} is available</span>
          </l-row>
        ) : (
          <l-row justifyContent="start">
            <ph-x color="var(--color__red--200)" size="1em"></ph-x>
            <span class="failed"> {this.userName} is taken</span>
          </l-row>
        )}
      </div>
    ),
    <l-spacer value={1.5}></l-spacer>,
    <e-input
      type="password"
      name="password"
      placeholder="Password (Min. 8 letters)"
    ></e-input>,
    <l-spacer value={1.5}></l-spacer>,
    <e-button action="signupUser" active={this.isSigningUp} size="wide">
      Sign up
    </e-button>,
    <l-spacer value={1}></l-spacer>,
    <e-button variant="link" action="openLoginModal">
      Log into existing account
    </e-button>,
    <l-spacer value={1.5}></l-spacer>,
    <l-seperator></l-seperator>,
    <l-spacer value={1.5}></l-spacer>,
    <e-text variant="footnote">
      By signing up, you accept our{" "}
      <e-link variant="externalLink" url={Var.app.policy.tos.url}>
        terms of service
      </e-link>{" "}
      &{" "}
      <e-link variant="externalLink" url={Var.app.policy.privacy.url}>
        privacy policy
      </e-link>
    </e-text>,
  ];

  render() {
    return (
      <Host>
        {this.activeView === "login" && <this.LogIn></this.LogIn>}
        {this.activeView === "signup" && <this.SignUp></this.SignUp>}
      </Host>
    );
  }
}
