import { Component, Event, EventEmitter, Listen, FunctionalComponent, State, Prop, Host, h } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';
import { Vars } from '../../../global/script';
import { confirmPasswordPayloadInterface } from '../../patterns/p-auth/interfaces';
import { generateConfirmPasswordPayload, validateConfirmPasswordPayload, confirmPasswordApi } from '../../patterns/p-auth/helpers';

@Component({
  tag: 'v-verification',
  styleUrl: 'v-verification.css',
  shadow: true,
})
export class VVerification {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('buttonClick') handleButtonClick(e) {
    if (e.detail.action === 'confirmPassword') {
    }
  }

  @Listen('textInput') handleTextInput(e) {
    if (e.detail.name === 'newPassword') {
      this.newPassword = e.detail.value;
    } else if (e.detail.name === 'newPasswordRepeat') {
      this.newPasswordRepeat = e.detail.value;
    }
  }

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() isDataFetched: boolean = false;
  @State() isPasswordResetButtonActive: boolean = false;
  @State() passwordResetStep: string = 'submission';
  @State() isPasswordResetSuccessful: boolean = false;

  private type: string;
  private code: string;
  private isVerificationSuccessful: boolean = false;
  private newPassword: string = '';
  private newPasswordRepeat: string = '';

  componentWillLoad() {
    if (!this.match.params.type || !this.match.params.code) {
      return this.event_RouteTo.emit({
        type: 'push',
        route: '/',
        data: {},
      });
    }
    this.type = this.match.params.type.trim();
    this.code = this.match.params.code.trim();
  }

  componentDidLoad() {}

  async confirmPassword() {
    let confirmPasswordPayload: confirmPasswordPayloadInterface = generateConfirmPasswordPayload(this.newPassword, this.newPasswordRepeat);

    let { isValid, validationMessage } = validateConfirmPasswordPayload(confirmPasswordPayload);
    if (!isValid) {
      return alert(validationMessage);
    }

    this.isPasswordResetButtonActive = true;
    let { success, message, payload } = await confirmPasswordApi(confirmPasswordPayload);
    this.isPasswordResetButtonActive = false;

    if (!success) {
      return alert(message);
    }

    alert(`${payload.message}. Proceed to login`);
  }

  DataFetchedView: FunctionalComponent = () => (
    <div>
      {this.type === 'email' && <this.EmailVerificationView></this.EmailVerificationView>}
      {this.type === 'password-reset' && <this.PasswordResetView></this.PasswordResetView>}
    </div>
  );

  DataNotFetchedView: FunctionalComponent = () => (
    <l-row align="center">
      <p-spinner theme="dark"></p-spinner>
      <e-text>Verifying..</e-text>
    </l-row>
  );

  EmailVerificationView: FunctionalComponent = () => (
    <c-banner theme={!this.isVerificationSuccessful ? 'danger' : 'success'}>
      {!this.isVerificationSuccessful ? (
        <e-text>
          <strong>Email verification failed</strong>
          <l-row>
            Kindly try verifying again or contact&nbsp;
            <e-link variant="email" url={`mailto:${Vars.support.email}`}>
              {Vars.support.email}
            </e-link>{' '}
          </l-row>
        </e-text>
      ) : (
        <e-text>
          <strong>Email verification successful</strong>
          <e-link url="/">Continue to home</e-link>
        </e-text>
      )}
    </c-banner>
  );

  PasswordResetView: FunctionalComponent = () => (
    <div>
      {this.passwordResetStep === 'submission' && <this.PasswordResetSubmission></this.PasswordResetSubmission>}
      {this.passwordResetStep === 'confirmation' && <this.PasswordResetConfirmation></this.PasswordResetConfirmation>}
    </div>
  );

  PasswordResetConfirmation: FunctionalComponent = () => (
    <c-banner theme={!this.isPasswordResetSuccessful ? 'danger' : 'success'}>
      {!this.isPasswordResetSuccessful ? (
        <e-text>
          <strong>Password reset failed</strong>
          <l-row>
            Kindly try again or contact&nbsp;
            <e-link variant="email" url={`mailto:${Vars.support.email}`}>
              {Vars.support.email}
            </e-link>{' '}
          </l-row>
        </e-text>
      ) : (
        <e-text>
          <strong>Password reset successful</strong>
          <e-link url="/">Continue to login</e-link>
        </e-text>
      )}
    </c-banner>
  );

  PasswordResetSubmission: FunctionalComponent = () => [
    <e-text variant="display">Reset password</e-text>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="password" name="newPassword" placeholder="New password (min 8 chars)"></e-input>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="password" name="newPasswordRepeat" placeholder="Repeat new password"></e-input>,
    <l-spacer value={1}></l-spacer>,
    <l-row justifyContent="space-between">
      <div></div>
      <e-button action="confirmPassword" active={this.isPasswordResetButtonActive}>
        Confirm
      </e-button>
    </l-row>,
  ];

  render() {
    return <Host>{this.isDataFetched ? <this.DataFetchedView></this.DataFetchedView> : <this.DataNotFetchedView></this.DataNotFetchedView>}</Host>;
  }
}

injectHistory(VVerification);
