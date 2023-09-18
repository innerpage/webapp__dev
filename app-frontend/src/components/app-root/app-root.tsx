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
        email: state.account_Email,
      };
      this.isMailingEmailVerification = true;
      let { message } = await mailEmailVerificationCodeApi(data);
      this.isMailingEmailVerification = false;
      alert(message);
    }
  }

  @Listen('event_RouteTo') handle_RouteTo(e) {
    if (e.detail.type === 'push') {
      this.history.push(e.detail.route, e.detail.data);
    } else if (e.detail.type === 'goBack') {
      this.history.goBack();
    }
  }

  @Listen('event_LinkClick') async handle_LinkClick(e) {
    if (e.detail.action === 'home') {
      this.history.push('/home', {});
    } else if (e.detail.action === 'logout') {
      let { success, message, payload } = await Helper_ApiCall_Account_Logout();
      if (!success) {
        return alert(message);
      }
      if (!payload.success) {
        return alert(payload.message);
      }
      state.isActive_Session = payload.isActive_Session;
      state.account_FirstName = '';
      state.account_LastName = '';
      state.account_Email = '';
      state.isVerified_AccountEmail = true;
      this.history.push('/login', {});
    } else if (e.detail.action === 'goBack') {
      this.history.goBack();
    } else if (e.detail.action === 'signup') {
      this.history.push('/signup', {});
    } else if (e.detail.action === 'forgotPassword') {
      this.history.push('/forgot-password', {});
    } else if (e.detail.action === 'login') {
      this.history.push('/login', {});
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
        email: state.account_Email,
        emailVerificationCode: this.emailVerificationCode,
      };
      let { success, message } = await submitEmailVerificationCodeApi(data);
      if (!success) {
        return alert(message);
      }
      state.isVerified_AccountEmail = true;
      alert(message);
    }
  }

  componentWillLoad() {
    state.isActive_Session = checkLoggedInCookie();
  }

  async componentDidLoad() {
    if (state.isActive_Session) {
      init_Socket();
      let { success, message, payload } = await Helper_ApiCall_GetAccountDetails_BySession();
      if (!success) {
        this.history.push('/login', {});
        return console.log(message);
      }
      helper_Set_State(payload.accountDetails);
    }
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
        {!state.isVerified_AccountEmail && <this.EmailVerificationBanner></this.EmailVerificationBanner>}

        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            {/* LoggedOut Routes */}
            <this.Route_LoggedOut url="/login" component="v-login"></this.Route_LoggedOut>
            <this.Route_LoggedOut url="/signup" component="v-signup"></this.Route_LoggedOut>
            <this.Route_LoggedOut url="/forgot-password" component="v-forgot-password"></this.Route_LoggedOut>
            <this.Route_LoggedOut url="/post-oauth" component="v-post-oauth"></this.Route_LoggedOut>

            {/* LoggedIn Routes */}
            <this.Route_LoggedIn url="/home" component="v-home"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/payment-cancel" component="v-payment-cancel"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/payment-handle/:id_Session" component="v-payment-handle"></this.Route_LoggedIn>
            <this.Route_LoggedIn url="/checkout/:id_Order" component="v-checkout"></this.Route_LoggedIn>

            {/* Catch-all Route */}
            <stencil-route component="v-catch-all" />

            {/* Sample Routes
            <stencil-route url="/payment-cancel" component="v-payment-cancel" />
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
          if (state.isActive_Session) {
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
          if (!state.isActive_Session) {
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
