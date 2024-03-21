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
  @State() modal: string;

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
    } else if (e.detail.action === 'login' || e.detail.action === 'signup') {
      state.modal = e.detail.action;
      state.isModalVisible = true;
    } else if (e.detail.action === 'closeModal') {
      state.isModalVisible = false;
      setTimeout(() => {
        state.modal = '';
      }, 150);
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
        <p-modal isVisible={state.isModalVisible} name={state.modal}>
          {state.modal === 'login' && <p-auth variant="login"></p-auth>}
          {state.modal === 'signup' && <p-auth variant="signup"></p-auth>}
        </p-modal>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="v-home" exact={true} />
            <stencil-route url="/page-1" component="v-page-1" />

            <stencil-route url="/login" component="v-login" />
            <stencil-route url="/signup" component="v-signup" />
            <stencil-route url="/forgot-password" component="v-forgot-password" />

            {/* LoggedIn Routes */}
            <this.LoggedInRoute url="/billing" component="v-billing"></this.LoggedInRoute>
            <this.LoggedInRoute url="/profile" component="v-profile"></this.LoggedInRoute>
            <this.LoggedInRoute url="/payment-cancel" component="v-payment-cancel"></this.LoggedInRoute>
            <this.LoggedInRoute url="/payment-handle/:id_Session" component="v-payment-handle"></this.LoggedInRoute>
            <this.LoggedInRoute url="/checkout/:id_Order" component="v-checkout"></this.LoggedInRoute>
            <this.LoggedInRoute url="/delete-account" component="v-delete-account"></this.LoggedInRoute>
            <this.LoggedInRoute url="/support" component="v-support"></this.LoggedInRoute>

            <this.LoggedOutRoute url="/post-oauth" component="v-post-oauth"></this.LoggedOutRoute>

            {/* Catch-all Route */}
            <stencil-route component="v-catch-all" />

            {/* LoggedOut Routes */}
            {/* <this.LoggedOutRoute url="/login" component="v-login"></this.LoggedOutRoute>
            <this.LoggedOutRoute url="/signup" component="v-signup"></this.LoggedOutRoute>
            <this.LoggedOutRoute url="/forgot-password" component="v-forgot-password"></this.LoggedOutRoute>
             */}

            {/* Sample Routes
            <stencil-route url="/payment-handle/:id_Session" component="v-payment-handle" /> */}
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }

  LoggedInRoute = ({ component, ...props }: { [key: string]: any }) => {
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

  LoggedOutRoute = ({ component, ...props }: { [key: string]: any }) => {
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
