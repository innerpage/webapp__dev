import { Component, Event, EventEmitter, Host, State, Listen, h } from '@stencil/core';
import { generate_Login_Payload, helper_Validate_LoginInputs, helper_Login_Api } from './helpers';
import { interface_LoginInputs } from './interfaces';
import { Vars } from '../../../../global/script';

@Component({
  tag: 'v-login',
  styleUrl: 'v-login.css',
  shadow: true,
})
export class VLogin {
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
    if (e.detail.action === 'signup') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/signup',
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
    if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'password') {
      this.password = e.detail.value;
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'submit_LoginInputs') {
      this.handle_Submit_LoginInputs();
    }
  }

  @State() isActive_Login_Button: boolean = false;

  async handle_Submit_LoginInputs() {
    let payload_LoginInputs: interface_LoginInputs = generate_Login_Payload(this.email, this.password);

    let { isValid_LoginInputs, message_Validate_LoginInputs } = helper_Validate_LoginInputs(payload_LoginInputs);
    if (!isValid_LoginInputs) {
      return alert(message_Validate_LoginInputs);
    }

    this.isActive_Login_Button = true;
    let { isSuccess_LoginInputs_Submission, message_LoginInputs_Submission, payload_LoginInputs_Submission } = await helper_Login_Api(payload_LoginInputs);
    this.isActive_Login_Button = false;
    if (!isSuccess_LoginInputs_Submission) {
      return alert(message_LoginInputs_Submission);
    }

    if (!payload_LoginInputs_Submission.success) {
      return alert(payload_LoginInputs_Submission.message);
    }

    this.success_Auth.emit({
      payload: payload_LoginInputs_Submission.payload,
    });
  }

  render() {
    return (
      <Host>
        <div id="login-container">
          <e-text variant="display">Login</e-text>
          <e-text>
            Not registered? <e-link url="/signup">Sign up</e-link>
          </e-text>
          <l-spacer value={1}></l-spacer>
          <p-oauth-button></p-oauth-button>
          <l-spacer value={1}></l-spacer>
          <l-seperator variant="oauth"></l-seperator>
          <l-spacer value={1}></l-spacer>
          <e-input type="email" name="email" placeholder="Email"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <e-input type="password" name="password" placeholder="Password"></e-input>
          <br />
          <l-spacer value={1}></l-spacer>
          <l-row justifyContent="space-between">
            <e-text variant="footnote">
              <e-link url="/forgot-password">Forgot Password?</e-link>
            </e-text>
            <e-button action="submit_LoginInputs" active={this.isActive_Login_Button}>
              Login
            </e-button>
          </l-row>
          <l-spacer value={2}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={0.5}></l-spacer>
          <e-text variant="footnote">
            By logging into your account, you accept our{' '}
            <e-link variant="externalLink" url={Vars.legal.url.termsAndConditions}>
              terms
            </e-link>{' '}
            &{' '}
            <e-link variant="externalLink" url={Vars.legal.url.privacyPolicy}>
              privacy policy
            </e-link>
          </e-text>{' '}
        </div>
      </Host>
    );
  }
}
