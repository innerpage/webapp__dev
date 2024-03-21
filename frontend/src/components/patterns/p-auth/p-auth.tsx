import { Component, Prop, State, FunctionalComponent, h } from '@stencil/core';
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
  @Prop() variant: string;

  @State() authView: string;
  @State() isLoginButtonActive: boolean = false;
  @State() isSignupButtonActive: boolean = false;

  componentWillLoad() {
    this.authView = this.variant;
  }

  ForgotPassword: FunctionalComponent = () => (
    <div>
      <l-row justifyContent="space-between">
        <e-text variant="display">Forgot Password</e-text>
        <e-button variant="light" theme="dark" action="closeModal">
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </div>
  );

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
      <e-text>
        {statement}{' '}
        <e-button variant="link" action={action}>
          {label}
        </e-button>
      </e-text>
    </header>
  );

  Login: FunctionalComponent = () => (
    <div>
      <this.Header title="Login" statement="Not registered yet?" action="goToSignupModal" label="Sign up"></this.Header>
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
        <e-button variant="link" action="goToForgotPassword">
          Forgot Password?
        </e-button>
        <e-button action="submit_LoginInputs" active={this.isLoginButtonActive}>
          Login
        </e-button>
      </l-row>
      <this.Footer statement="logging into your account"></this.Footer>
    </div>
  );

  SignUp: FunctionalComponent = () => (
    <div>
      <this.Header title="Sign up" statement="Already have an account?" action="goToLoginModal" label="Log in"></this.Header>
      <l-spacer value={1}></l-spacer>
      <p-oauth-button></p-oauth-button>
      <l-spacer value={1}></l-spacer>
      <l-seperator variant="oauth"></l-seperator>
      <l-spacer value={1}></l-spacer>
      <e-input type="text" name="name" placeholder="Name"></e-input>
      <br />
      <l-spacer value={1}></l-spacer>
      <e-input type="email" name="email" placeholder="Email"></e-input>
      <br />
      <l-spacer value={1}></l-spacer>
      <e-input type="password" name="password" placeholder="Password (Min. 8 letters)"></e-input>
      <l-spacer value={1}></l-spacer>
      <l-row justifyContent="space-between">
        <e-button variant="link" action="goToForgotPassword">
          Forgot Password?
        </e-button>
        <e-button action="submit_SignupInputs" active={this.isSignupButtonActive}>
          Sign up
        </e-button>
      </l-row>
      <this.Footer statement="signing up"></this.Footer>
    </div>
  );

  render() {
    return (
      <c-card>
        {this.authView === 'forgotPassword' && <this.ForgotPassword></this.ForgotPassword>}
        {this.authView === 'login' && <this.Login></this.Login>}
        {this.authView === 'signup' && <this.SignUp></this.SignUp>}
      </c-card>
    );
  }
}
