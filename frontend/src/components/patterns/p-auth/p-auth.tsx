import { Component, Prop, State, FunctionalComponent, Host, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-auth',
  styleUrl: 'p-auth.css',
  shadow: true,
})
export class PAuth {
  @Prop() variant: string;
  @State() authView: string;

  componentWillLoad() {
    this.authView = this.variant;
  }

  ForgotPassword: FunctionalComponent = () => (
    <div>
      <l-row justifyContent="space-between">
        <e-text variant="display">Login</e-text>
        <e-button variant="light" theme="dark" action="closeModal">
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </div>
  );

  Login: FunctionalComponent = () => (
    <div>
      <l-row justifyContent="space-between">
        <e-text variant="display">Login</e-text>
        <e-button variant="light" theme="dark" action="closeModal">
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </div>
  );

  SignUp: FunctionalComponent = () => (
    <div>
      <l-row justifyContent="space-between">
        <e-text variant="display">Sign up</e-text>
        <e-button variant="light" theme="dark" action="closeModal">
          <ph-x color="var(--color__grey--normal)" size="1em"></ph-x>
        </e-button>
      </l-row>
    </div>
  );

  render() {
    return (
      <Host>
        {this.authView === 'forgotPassword' && <this.ForgotPassword></this.ForgotPassword>}
        {this.authView === 'login' && <this.Login></this.Login>}
        {this.authView === 'signup' && <this.SignUp></this.SignUp>}
      </Host>
    );
  }
}
