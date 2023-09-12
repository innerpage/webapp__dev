import { Component, Prop, Listen, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state, IO, init_Socket } from '../../global/script';
import { helper_Set_State, helper_Set_Session_In_LocalStorage, helper_Check_Session_In_LocalStorage } from './helpers';
import { Helper_ApiCall_GetAccountDetails_BySession } from '../../global/script/helpers';

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

  @Listen('success_Auth') handle_success_Auth(e) {
    helper_Set_State(e.detail.payload);
    helper_Set_Session_In_LocalStorage();
  }

  componentWillLoad() {
    let { payload } = helper_Check_Session_In_LocalStorage();
    if (payload.isLogged) {
      state.isActive_Session = payload.isLogged;
    }
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
    helper_Set_State(payload);
    helper_Set_Session_In_LocalStorage();
  }

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component={state.isActive_Session ? 'v-my-library' : 'v-login'} exact={true} />
          <this.Route_LoggedOut url="/login" component="v-login"></this.Route_LoggedOut>
          <this.Route_LoggedOut url="/signup" component="v-signup"></this.Route_LoggedOut>
          <this.Route_LoggedOut url="/forgot-password" component="v-forgot-password"></this.Route_LoggedOut>
          <this.Route_LoggedIn url="/home" component="v-home"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/payment-cancel" component="v-payment-cancel"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/payment-handle/:id_Session" component="v-payment-handle"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/checkout/:id_Order" component="v-checkout"></this.Route_LoggedIn>
          <stencil-route component="v-catch-all" />
          {/* <stencil-route url="/payment-cancel" component="v-payment-cancel" />
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
            return <stencil-router-redirect url="/my-library"></stencil-router-redirect>;
          }
        }}
      />
    );
  };
}

injectHistory(AppRoot);
