import { Component, FunctionalComponent, Prop, Host, Listen, State, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state, IO, init_Socket } from '../../global/script';
import { helper_Set_State, mailEmailVerificationCodeApi, submitEmailVerificationCodeApi } from './helpers';
import { Helper_ApiCall_GetAccountDetails_BySession, Helper_ApiCall_Account_Logout } from '../../global/script/helpers';
import { checkLoggedInCookie } from './helpers';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @State() isMailingEmailVerification: boolean = false;

  private emailVerificationCode: number = -1;

  @Listen('buttonClick') async handle_ButtonClick(e) {
    if (e.detail.action === 'mailEmailVerificationCode') {
      let data = {
        email: state.accountEmail,
      };
      this.isMailingEmailVerification = true;
      let { message } = await mailEmailVerificationCodeApi(data);
      this.isMailingEmailVerification = false;
      alert(message);
    } else if (e.detail.action === 'logout') {
      this.logoutUser();
    }
  }

  @Listen('logoutUserEvent') handleUserLogout() {
    this.logoutUser();
  }

  @Listen('event_RouteTo') handle_RouteTo(e) {
    if (e.detail.type === 'push') {
      this.history.push(e.detail.route, e.detail.data);
    } else if (e.detail.type === 'goBack') {
      this.history.goBack();
    }
  }

  @Listen('success_Auth') handle_success_Auth(e) {
    helper_Set_State(e.detail.payload);
  }

  @Listen('textInput') async handle_TextInput(e) {
    if (e.detail.name === 'emailVerificationCodeInput') {
      this.emailVerificationCode = e.detail.value;
      if (this.emailVerificationCode < 1000 || this.emailVerificationCode > 10000) {
        return;
      }
      let data = {
        email: state.accountEmail,
        emailVerificationCode: this.emailVerificationCode,
      };
      let { success, message } = await submitEmailVerificationCodeApi(data);
      if (!success) {
        return alert(message);
      }
      state.isAccountEmailVerified = true;
      alert(message);
    }
  }

  componentWillLoad() {
    state.isSessionActive = checkLoggedInCookie();
  }

  async componentDidLoad() {
    if (state.isSessionActive) {
      init_Socket();
      let { success, message, payload } = await Helper_ApiCall_GetAccountDetails_BySession();
      if (!success) {
        this.history.push('/login', {});
        return console.log(message);
      }
      helper_Set_State(payload.accountDetails);
    }
  }

  async logoutUser() {
    let { success, message, payload } = await Helper_ApiCall_Account_Logout();
    if (!success) {
      return alert(message);
    }
    if (!payload.success) {
      return alert(payload.message);
    }
    state.isSessionActive = payload.isSessionActive;
    state.accountName = '';
    state.accountEmail = '';
    state.isAccountEmailVerified = true;
    this.history.push('/login', {});
  }

  disconnectedCallback() {
    IO.disconnect();
  }

  EmailVerificationBanner: FunctionalComponent = () => (
    <c-banner theme="danger">
      <l-row justifyContent="space-between">
        <l-row>
          <e-text>Enter email verification code</e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-input type="number" name="emailVerificationCodeInput" placeholder="4-digit code"></e-input>
        </l-row>
        <e-button action="mailEmailVerificationCode" active={this.isMailingEmailVerification}>
          Send verification code
        </e-button>
      </l-row>
    </c-banner>
  );

  render() {
    return (
      <Host>
        {!state.isAccountEmailVerified && <this.EmailVerificationBanner></this.EmailVerificationBanner>}

        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="v-home" />

            {/* LoggedOut Routes */}
            {/* <this.Route_LoggedOut url="/login" component="v-login"></this.Route_LoggedOut>
            <this.Route_LoggedOut url="/signup" component="v-signup"></this.Route_LoggedOut>
            <this.Route_LoggedOut url="/forgot-password" component="v-forgot-password"></this.Route_LoggedOut>
            <this.Route_LoggedOut url="/post-oauth" component="v-post-oauth"></this.Route_LoggedOut> */}
            {/* LoggedIn Routes */}
            {/* <this.Route_LoggedIn url="/home" component="v-home"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/page-1" component="v-page-1"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/payment-cancel" component="v-payment-cancel"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/payment-handle/:id_Session" component="v-payment-handle"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/checkout/:id_Order" component="v-checkout"></this.Route_LoggedIn> */}
            {/* <this.Route_LoggedIn url="/billing" component="v-billing"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/delete-account" component="v-delete-account"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/profile" component="v-profile"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/support" component="v-support"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/upgrade" component="v-upgrade"></this.Route_LoggedIn> */}
            {/* Catch-all Route */}
            {/* <stencil-route component="v-catch-all" /> */}
            {/* Sample Routes
            <stencil-route url="/payment-handle/:id_Session" component="v-payment-handle" /> */}
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }

  Route_LoggedIn = ({ component, ...props }: { [key: string]: any }) => {
    const Component = component;
    return (
      <stencil-route
        {...props}
        routeRender={routeRenderProps => {
          if (state.isSessionActive) {
            return <Component {...props} {...props.componentProps} {...routeRenderProps}></Component>;
          } else {
            return <stencil-router-redirect url="/login"></stencil-router-redirect>;
          }
        }}
      />
    );
  };

  Route_LoggedOut = ({ component, ...props }: { [key: string]: any }) => {
    const Component = component;
    return (
      <stencil-route
        {...props}
        routeRender={routeRenderProps => {
          if (!state.isSessionActive) {
            return <Component {...props} {...props.componentProps} {...routeRenderProps}></Component>;
          } else {
            return <stencil-router-redirect url="/home"></stencil-router-redirect>;
          }
        }}
      />
    );
  };
}

injectHistory(AppRoot);
