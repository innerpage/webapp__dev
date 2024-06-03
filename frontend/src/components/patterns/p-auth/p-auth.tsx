import { Component, Event, EventEmitter, Prop, State, FunctionalComponent, Host, Listen, Watch, h } from '@stencil/core';
import { loginApi, generateLoginPayload, validateLoginPayload, signupApi, generateSignupPayload, validateSignupPayload } from './helpers';
import { mailPayloadInterface } from '../../../global/script/interfaces';
import { generateMailPayload } from '../../../global/script/helpers';
import { validateMailPayload } from '../../../global/script/helpers';
import { mailApi } from '../../../global/script/helpers';

import { loginPayloadInterface, signupPayloadInterface } from './interfaces';
import { Vars } from '../../../global/script';
import { gsap } from 'gsap';

interface HeaderProps {
  title: string;
  statement: string;
  action: string;
  label: string;
}

interface FooterProps {
  statement: string;
}

@Component({
  tag: 'p-auth',
  styleUrl: 'p-auth.css',
  shadow: true,
})
export class PAuth {
  @Event({
    eventName: 'authSuccessful',
    bubbles: true,
  })
  authSuccessfulEventEmitter: EventEmitter;

  @Listen('buttonClick') handleButtonClickEvent(e) {
    if (e.detail.action === 'loginUser') {
      this.loginUser();
    } else if (e.detail.action === 'signupUser') {
      this.signupUser();
    } else if (e.detail.action === 'mailPasswordResetLink') {
      this.mailPasswordResetLink();
    }
  }

  @Listen('textInput') handleTextInput(e) {
    if (e.detail.name === 'name') {
      this.name = e.detail.value;
    } else if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'password') {
      this.password = e.detail.value;
    }
  }

  BannerEl: HTMLCBannerElement;

  @Prop() view: string;

  @State() authView: string;
  @State() isLoginButtonActive: boolean = false;
  @State() isSignupButtonActive: boolean = false;
  @State() isMailPasswordResetLinkButtonActive: boolean = false;

  @Watch('view') watchView(newVal: string, oldVal: string) {
    this.reset();
    if (newVal != oldVal) {
      this.authView = newVal;
    }
  }

  private name: string = '';
  private email: string = '';
  private password: string = '';
  private tl: any = gsap.timeline();

  reset() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.isLoginButtonActive = false;
    this.isSignupButtonActive = false;
    this.isMailPasswordResetLinkButtonActive = false;
  }

  componentWillLoad() {
    this.authView = this.view;
  }

  hideMailPasswordResetLinkSuccessBanner() {
    this.tl.to(this.BannerEl, { height: '0px', opacity: 0, duration: 0.15 });
  }

  async loginUser() {
    let loginPayload: loginPayloadInterface = generateLoginPayload(this.email, this.password);
    let { isValid, validationMessage } = validateLoginPayload(loginPayload);
    if (!isValid) {
      return alert(validationMessage);
    }
    this.isLoginButtonActive = true;

    let { success, message, payload } = await loginApi(loginPayload);
    this.isLoginButtonActive = false;

    if (!success) {
      return alert(message);
    }

    if (!payload.success) {
      return alert(payload.message);
    }
    this.authSuccessfulEventEmitter.emit();
  }

  async mailPasswordResetLink() {
    let mailEmailVerificationLinkPayload: mailPayloadInterface = generateMailPayload(this.email, 'passwordResetLink');
    let { isValid, validationMessage } = validateMailPayload(mailEmailVerificationLinkPayload);
    if (!isValid) {
      return alert(validationMessage);
    }

    this.isMailPasswordResetLinkButtonActive = true;
    this.hideMailPasswordResetLinkSuccessBanner();
    let { success, message, payload } = await mailApi(mailEmailVerificationLinkPayload);
    this.isMailPasswordResetLinkButtonActive = false;

    if (!success) {
      return alert(message);
    }

    this.showMailPasswordResetLinkSuccessBanner();
    alert(payload.message);
  }

  async signupUser() {
    let signupPayload: signupPayloadInterface = generateSignupPayload(this.name, this.email, this.password);
    let { isValid, validationMessage } = validateSignupPayload(signupPayload);
    if (!isValid) {
      return alert(validationMessage);
    }
    this.isSignupButtonActive = true;

    let { success, message, payload } = await signupApi(signupPayload);
    this.isSignupButtonActive = false;

    if (!success) {
      return alert(message);
    }

    if (!payload.success) {
      return alert(payload.message);
    }

    this.authSuccessfulEventEmitter.emit();
  }

  showMailPasswordResetLinkSuccessBanner() {
    this.tl.to(this.BannerEl, { height: 'auto', opacity: 1, duration: 0.15 });
  }

  Footer: FunctionalComponent<FooterProps> = ({ statement }) => (
    <footer>
      <l-spacer value={2}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={0.5}></l-spacer>
      <e-text variant="footnote">
        By {statement}, you accept our{' '}
        <e-link variant="externalLink" url={Vars.app.policy.tos.url}>
          terms of service
        </e-link>{' '}
        &{' '}
        <e-link variant="externalLink" url={Vars.app.policy.privacy.url}>
          privacy policy
        </e-link>
      </e-text>{' '}
    </footer>
  );

  Header: FunctionalComponent<HeaderProps> = ({ title, statement, action, label }) => (
    <header>
      <l-row justifyContent="space-between">
        <e-text variant="display">{title}</e-text>
        <e-button variant="light" action="closeModal">
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
      {statement.length > 0 && (
        <e-text>
          {statement}{' '}
          {action.length > 0 && label.length > 0 && (
            <e-button variant="link" action={action}>
              {label}
            </e-button>
          )}
        </e-text>
      )}
    </header>
  );

  Login: FunctionalComponent = () => [
    <this.Header title="Login" statement="Not registered yet?" action="openSignupModal" label="Sign up"></this.Header>,
    <l-spacer value={1}></l-spacer>,
    <p-oauth-button></p-oauth-button>,
    <l-spacer value={1}></l-spacer>,
    <l-seperator variant="oauth"></l-seperator>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="email" name="email" placeholder="Email"></e-input>,
    <br />,
    <l-spacer value={1}></l-spacer>,
    <e-input type="password" name="password" placeholder="Password"></e-input>,
    <br />,
    <l-spacer value={1}></l-spacer>,
    <l-row justifyContent="space-between">
      <e-button variant="link" action="openForgotPasswordModal">
        Forgot Password?
      </e-button>
      <e-button action="loginUser" active={this.isLoginButtonActive}>
        Login
      </e-button>
    </l-row>,
    <this.Footer statement="logging into your account"></this.Footer>,
  ];

  ResetPassword: FunctionalComponent = () => [
    <this.Header title="Reset Password" statement="" action="" label=""></this.Header>,
    <c-banner theme="success" ref={el => (this.BannerEl = el as HTMLCBannerElement)}>
      <e-text>Please check your inbox</e-text>
    </c-banner>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="email" name="email" placeholder="Email"></e-input>,
    <l-spacer value={1}></l-spacer>,
    <l-row justifyContent="space-between">
      <e-button action="goBackToLogin" variant="light">
        Back
      </e-button>
      <e-button action="mailPasswordResetLink" active={this.isMailPasswordResetLinkButtonActive}>
        Send reset link
      </e-button>
    </l-row>,
    <l-spacer value={2}></l-spacer>,
    <l-seperator></l-seperator>,
    <l-spacer value={0.5}></l-spacer>,
    <e-text variant="footnote">We will send a password reset link if your email is registered with us</e-text>,
  ];

  SignUp: FunctionalComponent = () => [
    <this.Header title="Sign up" statement="Already have an account?" action="openLoginModal" label="Log in"></this.Header>,
    <l-spacer value={1}></l-spacer>,
    <p-oauth-button></p-oauth-button>,
    <l-spacer value={1}></l-spacer>,
    <l-seperator variant="oauth"></l-seperator>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="text" name="name" placeholder="Name"></e-input>,
    <br />,
    <l-spacer value={1}></l-spacer>,
    <e-input type="email" name="email" placeholder="Email"></e-input>,
    <br />,
    <l-spacer value={1}></l-spacer>,
    <e-input type="password" name="password" placeholder="Password (Min. 8 letters)"></e-input>,
    <l-spacer value={1}></l-spacer>,
    <l-row justifyContent="space-between">
      <e-button variant="link" action="openForgotPasswordModal">
        Forgot Password?
      </e-button>
      <e-button action="signupUser" active={this.isSignupButtonActive}>
        Sign up
      </e-button>
    </l-row>,
    <this.Footer statement="signing up"></this.Footer>,
  ];

  render() {
    return (
      <Host>
        {this.authView === 'resetPassword' && <this.ResetPassword></this.ResetPassword>}
        {this.authView === 'login' && <this.Login></this.Login>}
        {this.authView === 'signup' && <this.SignUp></this.SignUp>}
      </Host>
    );
  }
}
