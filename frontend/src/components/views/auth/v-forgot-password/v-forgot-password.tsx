import { Component, Event, EventEmitter, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import {
  helper_Validate_SendResetCode_Inputs,
  helper_Validate_ConfirmPassword_Inputs,
  generate_SendResetCode_Payload,
  generate_ConfirmPassword_Payload,
  helper_SendResetCode_Api,
  helper_ConfirmPassword_Api,
} from './helpers';
import { interface_SendResetCode_Inputs, interface_ConfirmPassword_Inputs } from './interfaces';

@Component({
  tag: 'v-forgot-password',
  styleUrl: 'v-forgot-password.css',
  shadow: true,
})
export class VForgotPassword {
  private email: string = '';
  private passwordResetCode: number = -1;
  private newPassword: string = '';
  private newPasswordRepeat: string = '';
  private wizard_Steps = ['init', 'confirm'];

  @State() wizard_CurrentStep: number = 0;
  @State() state: string = this.wizard_Steps[this.wizard_CurrentStep];
  @State() isActive_SendResetCode_Button: boolean = false;
  @State() isActive_ConfirmPassword_Button: boolean = false;

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'passwordResetCode') {
      this.passwordResetCode = e.detail.value;
    } else if (e.detail.name === 'newPassword') {
      this.newPassword = e.detail.value;
    } else if (e.detail.name === 'newPasswordRepeat') {
      this.newPasswordRepeat = e.detail.value;
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'send_ResetCode') {
      this.handle_Submit_SendResetCode();
    } else if (e.detail.action === 'confirm_Password') {
      this.handle_Confirm_Password();
    } else if (e.detail.action === 'goBack') {
      this.event_RouteTo.emit({
        type: 'goBack',
        data: {},
      });
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'goBack') {
      if (this.state === this.wizard_Steps[this.wizard_Steps.length - 1]) {
        this.wizard_CurrentStep = this.wizard_CurrentStep - 1;
        this.state = this.wizard_Steps[this.wizard_CurrentStep];
        return;
      }
      this.event_RouteTo.emit({
        type: 'goBack',
      });
    }
  }

  handle_Submit_SendResetCode = async () => {
    let payload_SendResetCode_Inputs: interface_SendResetCode_Inputs = generate_SendResetCode_Payload(this.email);

    let { isValid_SendResetCode_Inputs, message_Validate_SendResetCode_Inputs } = helper_Validate_SendResetCode_Inputs(payload_SendResetCode_Inputs);
    if (!isValid_SendResetCode_Inputs) {
      return alert(message_Validate_SendResetCode_Inputs);
    }

    this.isActive_SendResetCode_Button = true;
    let { isSuccess_SendResetCode_Inputs_Submission, message_SendResetCode_Inputs_Submission, payload_SendResetCode_Inputs_Submission } = await helper_SendResetCode_Api(
      payload_SendResetCode_Inputs,
    );
    this.isActive_SendResetCode_Button = false;

    if (!isSuccess_SendResetCode_Inputs_Submission) {
      return alert(message_SendResetCode_Inputs_Submission);
    }
    if (!payload_SendResetCode_Inputs_Submission.success) {
      return alert(payload_SendResetCode_Inputs_Submission);
    }

    alert(payload_SendResetCode_Inputs_Submission.message);

    this.wizard_CurrentStep = this.wizard_CurrentStep + 1;
    this.state = this.wizard_Steps[this.wizard_CurrentStep];
  };

  handle_Confirm_Password = async () => {
    let payload_ConfirmPassword_Inputs: interface_ConfirmPassword_Inputs = generate_ConfirmPassword_Payload(
      this.email,
      this.newPassword,
      this.newPasswordRepeat,
      this.passwordResetCode,
    );

    let { isValid_ConfirmPassword_Inputs, message_Validate_ConfirmPassword_Inputs } = helper_Validate_ConfirmPassword_Inputs(payload_ConfirmPassword_Inputs);
    if (!isValid_ConfirmPassword_Inputs) {
      return alert(message_Validate_ConfirmPassword_Inputs);
    }

    this.isActive_ConfirmPassword_Button = true;
    let { isSuccess_ConfirmPassword_Inputs_Submission, message_ConfirmPassword_Inputs_Submission, payload_ConfirmPassword_Inputs_Submission } = await helper_ConfirmPassword_Api(
      payload_ConfirmPassword_Inputs,
    );
    this.isActive_ConfirmPassword_Button = false;

    if (!isSuccess_ConfirmPassword_Inputs_Submission) {
      return alert(message_ConfirmPassword_Inputs_Submission);
    }

    alert(`${payload_ConfirmPassword_Inputs_Submission.message}. Proceed to login`);
    this.event_RouteTo.emit({
      type: 'push',
      route: '/login',
      data: {},
    });
  };

  Init: FunctionalComponent = () => (
    <div>
      <e-text variant="display">Reset Password</e-text>
      <e-text>Step 1 of 2: Verify your email</e-text>
      <l-spacer value={1}></l-spacer>
      <e-input type="email" name="email" placeholder="Email"></e-input>
      <l-spacer value={1}></l-spacer>
      <l-row justifyContent="space-between">
        <e-button action="goBack" variant="light">
          Back
        </e-button>
        <e-button action="send_ResetCode" active={this.isActive_SendResetCode_Button}>
          Send reset code
        </e-button>
      </l-row>
      <l-spacer value={2}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={0.5}></l-spacer>
      <e-text variant="footnote">We will send a reset code if your email is registered with us</e-text>{' '}
    </div>
  );

  Confirm: FunctionalComponent = () => (
    <div>
      <e-text variant="display">Reset Password</e-text>
      <e-text>Step 2 of 2: Provide new password</e-text>
      <l-spacer value={1}></l-spacer>
      <e-input type="number" name="passwordResetCode" placeholder="Password reset code (check your mail)"></e-input>
      <l-spacer value={2}></l-spacer>
      <e-input type="password" name="newPassword" placeholder="New password (min 8 chars)"></e-input>
      <l-spacer value={1}></l-spacer>
      <e-input type="password" name="newPasswordRepeat" placeholder="Repeat new password"></e-input>
      <l-spacer value={1}></l-spacer>
      <l-row justifyContent="space-between">
        <e-button action="goBack" variant="light">
          Back
        </e-button>
        <e-button action="confirm_Password" active={this.isActive_ConfirmPassword_Button}>
          Reset password
        </e-button>
      </l-row>
    </div>
  );

  render() {
    return (
      <Host>
        {this.state === this.wizard_Steps[0] && <this.Init></this.Init>}
        {this.state === this.wizard_Steps[1] && <this.Confirm></this.Confirm>}
      </Host>
    );
  }
}
