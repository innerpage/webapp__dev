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
} from "./helpers";
import { MailPayloadInterface } from "../../../global/script/interfaces";
import { GenerateMailPayload } from "../../../global/script/helpers";
import { ValidateMailPayload } from "../../../global/script/helpers";
import { MailApi } from "../../../global/script/helpers";
import { loginPayloadInterface, signupPayloadInterface } from "./interfaces";
import { gsap } from "gsap";
import { Var } from "../../../global/script";

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
    } else if (e.detail.action === "mailPasswordResetLink") {
      this.mailPasswordResetLink();
    }
  }

  @Listen("textInput") handleTextInput(e) {
    if (e.detail.name === "name") {
      this.name = e.detail.value;
    } else if (e.detail.name === "email") {
      this.email = e.detail.value;
    } else if (e.detail.name === "password") {
      this.password = e.detail.value;
    }
  }

  @Prop() view: string;

  @State() activeView: string;
  @State() isLoggingIn: boolean = false;
  @State() isSigningUp: boolean = false;
  @State() isMailingPasswordResetLink: boolean = false;

  @Watch("view") watchView(newVal: string, oldVal: string) {
    this.reset();
    if (newVal != oldVal) {
      this.activeView = newVal;
    }
  }

  BannerEl: HTMLCBannerElement;

  private name: string = "";
  private email: string = "";
  private password: string = "";
  private tl: any = gsap.timeline();

  reset() {
    this.name = "";
    this.email = "";
    this.password = "";
    this.isLoggingIn = false;
    this.isSigningUp = false;
    this.isMailingPasswordResetLink = false;
  }

  componentWillLoad() {
    this.reset();
    this.activeView = this.view;
  }

  async loginUser() {
    let loginPayload: loginPayloadInterface = generateLoginPayload(
      this.email,
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

  async mailPasswordResetLink() {
    let mailPasswordResetLinkLinkPayload: MailPayloadInterface =
      GenerateMailPayload(this.email, "passwordResetLink");
    let { isValid, validationMessage } = ValidateMailPayload(
      mailPasswordResetLinkLinkPayload
    );
    if (!isValid) {
      return alert(validationMessage);
    }

    this.hideBanner();
    this.isMailingPasswordResetLink = true;
    let { success, message } = await MailApi(mailPasswordResetLinkLinkPayload);
    this.isMailingPasswordResetLink = false;

    if (!success) {
      return alert(message);
    }

    this.showBanner();
    alert(message);
  }

  async signupUser() {
    let signupPayload: signupPayloadInterface = generateSignupPayload(
      this.name,
      this.email,
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

  ResetPassword: FunctionalComponent = () => [
    <header>
      <l-row justifyContent="space-between">
        <e-text variant="display">Reset Password</e-text>
        <e-button variant="light" action="closeModal">
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </header>,
    <c-banner
      theme="success"
      ref={(el) => (this.BannerEl = el as HTMLCBannerElement)}
    >
      <e-text>Please check your inbox</e-text>
    </c-banner>,
    <e-input type="email" name="email" placeholder="Email"></e-input>,
    <l-row justifyContent="space-between">
      <e-button action="goBackToLogin" variant="light">
        Back
      </e-button>
      <e-button
        action="mailPasswordResetLink"
        active={this.isMailingPasswordResetLink}
      >
        Send reset link
      </e-button>
    </l-row>,
  ];

  LogIn: FunctionalComponent = () => [
    <header>
      <l-row justifyContent="space-between">
        <e-text variant="display">Log in</e-text>
        <e-button variant="light" action="closeModal">
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </header>,
    <l-spacer value={2}></l-spacer>,
    <e-input type="email" name="email" placeholder="Email"></e-input>,
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
    <br />,
    <e-button variant="link" action="openForgotPasswordModal">
      Reset password
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
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </header>,
    <l-spacer value={2}></l-spacer>,
    <e-input type="text" name="name" placeholder="Name"></e-input>,
    <l-spacer value={1.5}></l-spacer>,
    <e-input type="email" name="email" placeholder="Email"></e-input>,
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
    <br />,
    <e-button variant="link" action="openForgotPasswordModal">
      Reset password
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
        {this.activeView === "resetPassword" && (
          <this.ResetPassword></this.ResetPassword>
        )}
        {this.activeView === "login" && <this.LogIn></this.LogIn>}
        {this.activeView === "signup" && <this.SignUp></this.SignUp>}
      </Host>
    );
  }
}
