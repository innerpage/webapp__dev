import { Component, Prop, Listen, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state, IO, init_Socket } from '../../global/script';
import { helper_Set_State } from './helpers';
import { Helper_ApiCall_GetAccountDetails_BySession, Helper_ApiCall_Account_Logout } from '../../global/script/helpers';
import { checkLoggedInCookie } from './helpers';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @Listen('event_RouteTo') handle_RouteTo(e) {
    if (e.detail.type === 'push') {
      this.history.push(e.detail.route, e.detail.data);
    } else if (e.detail.type === 'goBack') {
      this.history.goBack();
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'home') {
      this.history.push('/home', {});
      state.activeView = 'home';
    } else if (e.detail.action === 'logout') {
      this.handle_Logout();
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

  componentWillLoad() {
    state.isActive_Session = checkLoggedInCookie();
  }

  componentDidLoad() {
    if (state.isActive_Session) {
      init_Socket();
      this.fetch_AccountData();
    }
  }

  disconnectedCallback() {
    IO.disconnect();
  }

  async fetch_AccountData() {
    let { success, message, payload } = await Helper_ApiCall_GetAccountDetails_BySession();
    if (!success) {
      this.history.push('/login', {});
      return console.log(message);
    }

    helper_Set_State(payload.accountDetails);
  }

  async handle_Logout() {
    let { success, message, payload } = await Helper_ApiCall_Account_Logout();
    if (!success) {
      return alert(message);
    }

    if (!payload.success) {
      return alert(payload.message);
    }

    state.isActive_Session = payload.isActive_Session;
    this.history.push('/login', {});
  }

  render() {
    return (
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
