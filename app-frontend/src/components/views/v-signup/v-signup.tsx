import { Component, Event, EventEmitter, Host, Listen, State, h } from '@stencil/core';
import { generate_Signup_Payload, helper_Validate_SignupInputs, helper_Signup_Api_Signup } from './helpers';
import { interface_SignupInputs } from './interfaces';
import { Vars } from '../../../global/script';

@Component({
  tag: 'v-signup',
  styleUrl: 'v-signup.css',
  shadow: true,
})
export class VSignup {
  private name_First: string = '';
  private name_Last: string = '';
  private email: string = '';
  private password: string = '';

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Event({
    eventName: 'success_Auth',
    bubbles: true,
  })
  success_Auth: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'login') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/login',
        data: {},
      });
    } else if (e.detail.action === 'forgotPassword') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/forgot-password',
        data: {},
      });
    }
  }

  @Listen('textInput') handle_TextInput(e) {
    if (e.detail.name === 'name_First') {
      this.name_First = e.detail.value;
    } else if (e.detail.name === 'name_Last') {
      this.name_Last = e.detail.value;
    } else if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'password') {
      this.password = e.detail.value;
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'submit_SignupInputs') {
      this.handle_Submit_SignupInputs();
    }
  }

  @State() isActive_Signup_Button: boolean = false;

  async handle_Submit_SignupInputs() {
    let payload_SignupInputs: interface_SignupInputs = generate_Signup_Payload(this.name_First, this.name_Last, this.email, this.password);

    let { isValid_SignupInputs, message_Validation_SignupInputs } = helper_Validate_SignupInputs(payload_SignupInputs);
    if (!isValid_SignupInputs) {
      return alert(message_Validation_SignupInputs);
    }

    this.isActive_Signup_Button = true;
    let { isSuccess_SignupInputs_Submission, message_SignupInputs_Submission, payload_SignupInputs_Submission } = await helper_Signup_Api_Signup(payload_SignupInputs);
    this.isActive_Signup_Button = false;
    if (!isSuccess_SignupInputs_Submission) {
      return alert(message_SignupInputs_Submission);
    }

    if (!payload_SignupInputs_Submission.success) {
      return alert(payload_SignupInputs_Submission.message);
    }

    this.success_Auth.emit({
      payload: payload_SignupInputs_Submission.payload,
    });
  }

  render() {
    return (
      <Host>
        <e-text variant="display">Sign up</e-text>
        <e-text>
          Have an account? <e-link url="/login">Login</e-link>
        </e-text>
        <l-spacer value={1}></l-spacer>
        <p-oauth-button></p-oauth-button>
        <l-spacer value={1}></l-spacer>
        <l-seperator variant="oauth"></l-seperator>
        <l-spacer value={1}></l-spacer>
        <e-input type="text" name="name_First" placeholder="First name"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-input type="text" name="name_Last" placeholder="Last name"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-input type="email" name="email" placeholder="Email"></e-input>
        <br />
        <l-spacer value={1}></l-spacer>
        <e-input type="password" name="password" placeholder="Password (Min. 8 letters)"></e-input>
        <l-spacer value={1}></l-spacer>
        <l-row justifyContent="space-between">
          <e-text variant="footnote">
            <e-link url="/forgot-password">Forgot Password?</e-link>
          </e-text>
          <e-button action="submit_SignupInputs" active={this.isActive_Signup_Button}>
            Sign up
          </e-button>
        </l-row>
        <l-spacer value={2}></l-spacer>
        <l-seperator></l-seperator>
        <l-spacer value={0.5}></l-spacer>
        <e-text variant="footnote">
          By creating your account, you accept our <e-link url={Vars.legal.url.termsAndConditions}>terms</e-link> &{' '}
          <e-link url={Vars.legal.url.privacyPolicy}>privacy policy</e-link>
        </e-text>
      </Host>
    );
  }
}
