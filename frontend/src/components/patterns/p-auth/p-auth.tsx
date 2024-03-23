import { Component, Prop, State, FunctionalComponent, Host, Listen, Watch, h } from '@stencil/core';
import { Vars } from '../../../global/script';

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
  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'loginUser') {
      this.loginUser();
    } else if (e.detail.action === 'signupUser') {
      this.signupUser();
    }
  }

  @Listen('textInput') handleTextInput(e) {
    if (e.detail.name === 'email') {
      this.email = e.detail.value;
    } else if (e.detail.name === 'password') {
      this.password = e.detail.value;
    }
  }

  @Prop() view: string;

  @State() authView: string;
  @State() isLoginButtonActive: boolean = false;
  @State() isSignupButtonActive: boolean = false;
  @State() resetPasswordWizardStep: string = 'init';
  @State() isSendResetCodeButtonActive: boolean = false;
  @State() isConfirmPasswordButtonActive: boolean = false;

  @Watch('view') watchView(newVal: string, oldVal: string) {
    this.reset();
    if (newVal != oldVal) {
      this.authView = newVal;
    }
  }

  private name: string = '';
  private email: string = '';
  private password: string = '';
  private passwordResetCode: number = 0;
  private newPassword: string = '';
  private newPasswordRepeat: string = '';

  componentWillLoad() {
    this.authView = this.view;
  }

  loginUser() {}

  signupUser() {}

  reset() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.passwordResetCode = 0;
    this.newPassword = '';
    this.newPasswordRepeat = '';
    this.isLoginButtonActive = false;
    this.isSignupButtonActive = false;
    this.resetPasswordWizardStep = 'init';
    this.isSendResetCodeButtonActive = false;
    this.isConfirmPasswordButtonActive = false;
  }

  ResetPassword: FunctionalComponent = () => [
    <this.Header title="Reset Password" statement="" action="" label=""></this.Header>,
    <div>
      {this.resetPasswordWizardStep === 'init' && <this.ResetPasswordInit></this.ResetPasswordInit>}
      {this.resetPasswordWizardStep === 'confirm' && <this.ResetPasswordConfirm></this.ResetPasswordConfirm>}
    </div>,
  ];

  ResetPasswordInit: FunctionalComponent = () => [
    <e-text>Step 1 of 2: Verify your email</e-text>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="email" name="email" placeholder="Email"></e-input>,
    <l-spacer value={1}></l-spacer>,
    <l-row justifyContent="space-between">
      <e-button action="goBackToLogin" variant="light">
        Back
      </e-button>
      <e-button action="send_ResetCode" active={this.isSendResetCodeButtonActive}>
        Send reset code
      </e-button>
    </l-row>,
    <l-spacer value={2}></l-spacer>,
    <l-seperator></l-seperator>,
    <l-spacer value={0.5}></l-spacer>,
    <e-text variant="footnote">We will send a reset code if your email is registered with us</e-text>,
  ];

  ResetPasswordConfirm: FunctionalComponent = () => [
    <e-text>Step 2 of 2: Provide new password</e-text>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="number" name="passwordResetCode" placeholder="Password reset code (check your mail)"></e-input>,
    <l-spacer value={2}></l-spacer>,
    <e-input type="password" name="newPassword" placeholder="New password (min 8 chars)"></e-input>,
    <l-spacer value={1}></l-spacer>,
    <e-input type="password" name="newPasswordRepeat" placeholder="Repeat new password"></e-input>,
    <l-spacer value={1}></l-spacer>,
    <l-row justifyContent="space-between">
      <e-button action="goBackToResetPasswordInit" variant="light">
        Back
      </e-button>
      <e-button action="confirm_Password" active={this.isConfirmPasswordButtonActive}>
        Reset password
      </e-button>
    </l-row>,
  ];

  Footer: FunctionalComponent<FooterProps> = ({ statement }) => (
    <footer>
      <l-spacer value={2}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={0.5}></l-spacer>
      <e-text variant="footnote">
        By {statement}, you accept our{' '}
        <e-link variant="externalLink" url={Vars.legal.url.termsAndConditions}>
          terms of service
        </e-link>{' '}
        &{' '}
        <e-link variant="externalLink" url={Vars.legal.url.privacyPolicy}>
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
