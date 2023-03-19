import { Component, Prop, Listen, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { vars } from '../../global/script';
import { Helper_Check_isCookieSet } from '../../global/script/helpers';

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

  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          {/* Root Route */}
          <stencil-route url="/" component={Helper_Check_isCookieSet(vars.cookie.session.isLogged) ? 'v-my-library' : 'v-login'} exact={true} />

          {/* LoggedOut Routes */}
          <this.Route_LoggedOut url="/login" component="v-login"></this.Route_LoggedOut>
          <this.Route_LoggedOut url="/signup" component="v-signup"></this.Route_LoggedOut>
          <this.Route_LoggedOut url="/forgot-password" component="v-forgot-password"></this.Route_LoggedOut>

          {/* LoggedIn Routes */}
          <this.Route_LoggedIn url="/my-library" component="v-my-library"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/store" component="v-store"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/checkout" component="v-checkout"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/reader" component="v-reader"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/payment-success" component="v-payment-success"></this.Route_LoggedIn>
          <this.Route_LoggedIn url="/payment-failed" component="v-payment-failed"></this.Route_LoggedIn>
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
          if (Helper_Check_isCookieSet(vars.cookie.session.isLogged)) {
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
          if (!Helper_Check_isCookieSet(vars.cookie.session.isLogged)) {
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
