import {
  Component,
  Event,
  EventEmitter,
  Listen,
  FunctionalComponent,
  State,
  Prop,
  Host,
  h,
} from "@stencil/core";
import { MatchResults, RouterHistory, injectHistory } from "@stencil/router";
import { Var, Store } from "../../../../global/script";
import { confirmPasswordPayloadInterface } from "../../../patterns/p-auth/interfaces";
import {
  generateConfirmPasswordPayload,
  validateConfirmPasswordPayload,
  confirmPasswordApi,
} from "../../../patterns/p-auth/helpers";
import { emailVerificationPayloadInterface } from "./interfaces";
import {
  generateEmailVerificationPayload,
  validateEmailVerificationPayload,
  verifyEmailApi,
} from "./helpers";

@Component({
  tag: "v-verify",
  styleUrl: "v-verify.css",
  shadow: true,
})
export class VVerify {
  @Event({
    eventName: "routeToEvent",
    bubbles: true,
  })
  routeToEvent: EventEmitter;

  @Listen("buttonClick") handleButtonClick(e) {
    if (e.detail.action === "confirmPassword") {
      this.confirmPassword();
    }
  }

  @Listen("textInput") handleTextInput(e) {
    if (e.detail.name === "newPassword") {
      this.newPassword = e.detail.value;
    } else if (e.detail.name === "newPasswordRepeat") {
      this.newPasswordRepeat = e.detail.value;
    }
  }

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() isViewDataFetched: boolean = false;
  @State() isPasswordResetButtonActive: boolean = false;
  @State() passwordResetStep: string = "submission";
  @State() isPasswordResetSuccessful: boolean = false;
  @State() failureMessage: string = "";

  private type: string;
  private code: string;
  private email: string;
  private newPassword: string = "";
  private newPasswordRepeat: string = "";

  componentWillLoad() {
    if (!this.match.params.type || !this.match.params.code) {
      return this.routeToEvent.emit({
        type: "push",
        route: "/",
        data: {},
      });
    }

    this.type = this.match.params.type.trim();
    this.code = this.match.params.code.trim();
  }

  componentDidLoad() {
    this.verifyEmail();
  }

  async confirmPassword() {
    let confirmPasswordPayload: confirmPasswordPayloadInterface =
      generateConfirmPasswordPayload(
        this.email,
        this.newPassword,
        this.newPasswordRepeat
      );

    let { isValid, validationMessage } = validateConfirmPasswordPayload(
      confirmPasswordPayload
    );
    if (!isValid) {
      return alert(validationMessage);
    }

    this.isPasswordResetButtonActive = true;
    let { success, message } = await confirmPasswordApi(confirmPasswordPayload);
    this.isPasswordResetButtonActive = false;

    if (!success) {
      this.failureMessage = message;
      return alert(message);
    }

    this.passwordResetStep = "confirmation";
    this.isPasswordResetSuccessful = true;
  }

  async verifyEmail() {
    let emailVerificationPayload: emailVerificationPayloadInterface =
      generateEmailVerificationPayload(this.type, this.code);
    let { isValid, validationMessage } = validateEmailVerificationPayload(
      emailVerificationPayload
    );
    if (!isValid) {
      this.isViewDataFetched = true;
      return alert(validationMessage);
    }

    let { success, message, payload } = await verifyEmailApi(
      emailVerificationPayload
    );

    this.isViewDataFetched = true;
    if (!success) {
      Store.isEmailVerified = false;
      this.failureMessage = message;
      return;
    }

    this.email = payload.email;
    Store.isEmailVerified = true;
  }

  DataFetchedView: FunctionalComponent = () => (
    <div>
      {Store.isEmailVerified ? (
        <this.SuccessView></this.SuccessView>
      ) : (
        <this.FailureView></this.FailureView>
      )}
    </div>
  );

  DataFetchingView: FunctionalComponent = () => (
    <l-row align="center">
      <p-spinner theme="dark"></p-spinner>
      <e-text>Verifying..</e-text>
    </l-row>
  );

  EmailVerificationView: FunctionalComponent = () => (
    <c-banner theme="success">
      <e-text>
        <strong>Email verified</strong>
      </e-text>
      <l-spacer value={0.5}></l-spacer>
      {!Store.isSessionActive ? (
        <e-button variant="link" action="proceedToLogin">
          Proceed to login
        </e-button>
      ) : (
        <e-link url="/">Go to dashboard</e-link>
      )}
    </c-banner>
  );

  FailureView: FunctionalComponent = () => (
    <c-banner theme="warning">
      <e-text>
        <strong>{this.failureMessage}</strong>
      </e-text>
      {/* <e-text>
        {this.failureMessage}. If this issue persists, kindly report to us at{" "}
        <e-link variant="email" url={`mailto:${Var.app.contact.email}`}>
          {Var.app.contact.email}
        </e-link>
      </e-text> */}
      <l-spacer value={1.5}></l-spacer>
      <l-row>
        {!Store.isSessionActive ? (
          <e-button variant="link" action="proceedToLogin">
            Go to login
          </e-button>
        ) : (
          <div>
            <e-button action="mailEmailVerificationLink" variant="link">
              Re-send verification link
            </e-button>
            <e-link variant="externalLink" url={Var.app.contact.url}>
              Contact Us
            </e-link>
            <br />
            <e-link url="/">Go to dashboard</e-link>
          </div>
        )}
      </l-row>
    </c-banner>
  );

  PasswordResetView: FunctionalComponent = () => (
    <div>
      {this.passwordResetStep === "submission" && (
        <div>
          <c-banner theme="success">
            <e-text>
              <strong>Email verified</strong>
            </e-text>
          </c-banner>
          <l-spacer value={1}></l-spacer>
          <this.SubmitNewPassword></this.SubmitNewPassword>
        </div>
      )}
      {this.passwordResetStep === "confirmation" && (
        <this.ConfirmNewPassword></this.ConfirmNewPassword>
      )}
    </div>
  );

  ConfirmNewPassword: FunctionalComponent = () => (
    <c-banner theme={!this.isPasswordResetSuccessful ? "danger" : "success"}>
      {!this.isPasswordResetSuccessful ? (
        <e-text>
          <strong>Password reset failed</strong>
          <l-row>
            Kindly try again or contact&nbsp;
            <e-link variant="email" url={`mailto:${Var.app.contact.email}`}>
              {Var.app.contact.email}
            </e-link>{" "}
          </l-row>
        </e-text>
      ) : (
        <e-text>
          <strong>Password reset successful</strong>
          <br />
          <e-button variant="link" action="proceedToLogin">
            Proceed to login
          </e-button>{" "}
        </e-text>
      )}
    </c-banner>
  );

  SubmitNewPassword: FunctionalComponent = () => [
    <e-text variant="display">Reset password</e-text>,
    <l-spacer value={1}></l-spacer>,
    <e-input
      type="password"
      name="newPassword"
      placeholder="New password (min 8 chars)"
    ></e-input>,
    <l-spacer value={1}></l-spacer>,
    <e-input
      type="password"
      name="newPasswordRepeat"
      placeholder="Repeat new password"
    ></e-input>,
    <l-spacer value={1}></l-spacer>,
    <l-row justifyContent="space-between">
      <div></div>
      <e-button
        action="confirmPassword"
        active={this.isPasswordResetButtonActive}
      >
        Confirm
      </e-button>
    </l-row>,
  ];

  SuccessView: FunctionalComponent = () => (
    <div>
      {this.type === "email" && (
        <this.EmailVerificationView></this.EmailVerificationView>
      )}
      {this.type === "password-reset" && (
        <this.PasswordResetView></this.PasswordResetView>
      )}
    </div>
  );

  render() {
    return (
      <Host>
        <div>
          <e-img src={Var.app.logo.rectangle.colour} width="10em"></e-img>
          <l-spacer value={1}></l-spacer>
          {this.isViewDataFetched ? (
            <this.DataFetchedView></this.DataFetchedView>
          ) : (
            <this.DataFetchingView></this.DataFetchingView>
          )}
        </div>
      </Host>
    );
  }
}

injectHistory(VVerify);
