import { Component, Prop, Host, Listen, h } from "@stencil/core";
import { RouterHistory, injectHistory } from "@stencil/router";
import { Store, IO, initSocket } from "../../global/script";
import {
  setStore,
  setSessionInLS,
  checkSessionInLS,
  clearSessionInLS,
} from "./helpers";
import {
  AccountDetailsBySessionApi,
  LogoutApi,
} from "../../global/script/helpers";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @Listen("authSuccessful") authSuccessfulListener() {
    setSessionInLS();
    this.initSession();
  }

  @Listen("buttonClick") async handleButtonClick(e) {
    if (e.detail.action === "logout") {
      this.logout();
    } else if (e.detail.action === "goToLogin") {
      this.history.push("/login", {});
    } else if (e.detail.action === "goToSignup") {
      this.history.push("/signup", {});
    }
  }

  @Listen("logoutEvent") handleLogout() {
    this.logout();
  }

  @Listen("routeToEvent") handleRouteToEvent(e) {
    if (e.detail.type === "push") {
      this.history.push(e.detail.route, e.detail.data);
    } else if (e.detail.type === "goBack") {
      this.history.goBack();
    }
  }

  componentWillLoad() {
    let { success } = checkSessionInLS();
    if (success) {
      Store.isSessionActive = true;
    }
    initSocket();
  }

  componentDidLoad() {
    if (Store.isSessionActive) {
      this.initSession();
    }
  }

  disconnectedCallback() {
    IO.disconnect();
  }

  async initSession() {
    let { success, message, payload } = await AccountDetailsBySessionApi();
    if (!success) {
      return alert(message);
    }
    setStore(payload);
    this.history.push("/home", {});
  }

  async logout() {
    let { success, message, payload } = await LogoutApi();
    if (!success) {
      return alert(message);
    }
    Store.isSessionActive = payload.isSessionActive;
    clearSessionInLS();
    this.history.push("/", {});
  }

  render() {
    return (
      <Host>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <this.NonSessionRoute
              url="/login"
              component="v-login"
            ></this.NonSessionRoute>

            <this.NonSessionRoute
              url="/signup"
              component="v-signup"
            ></this.NonSessionRoute>

            <this.SessionRoute
              url="/home"
              component="v-home"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/account"
              component="v-account"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/contact"
              component="v-contact"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/delete-account"
              component="v-delete-account"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/writer/:noteId"
              component="v-writer"
            ></this.SessionRoute>

            <this.AdminSessionRoute
              url="/admin-overview"
              component="v-admin-overview"
            ></this.AdminSessionRoute>

            <stencil-route url="/support-us" component="v-support-us" />

            <stencil-route component="v-catch-all" />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }

  AdminSessionRoute = ({ component, ...props }: { [key: string]: any }) => {
    const Component = component;
    return (
      <stencil-route
        {...props}
        routeRender={(routeRenderProps) => {
          if (Store.isSessionActive && Store.isAdmin) {
            return (
              <Component
                {...props}
                {...props.componentProps}
                {...routeRenderProps}
              ></Component>
            );
          } else {
            return (
              <stencil-router-redirect url="/login"></stencil-router-redirect>
            );
          }
        }}
      />
    );
  };

  SessionRoute = ({ component, ...props }: { [key: string]: any }) => {
    const Component = component;
    return (
      <stencil-route
        {...props}
        routeRender={(routeRenderProps) => {
          if (Store.isSessionActive) {
            return (
              <Component
                {...props}
                {...props.componentProps}
                {...routeRenderProps}
              ></Component>
            );
          } else {
            return (
              <stencil-router-redirect url="/login"></stencil-router-redirect>
            );
          }
        }}
      />
    );
  };

  NonSessionRoute = ({ component, ...props }: { [key: string]: any }) => {
    const Component = component;
    return (
      <stencil-route
        {...props}
        routeRender={(routeRenderProps) => {
          if (!Store.isSessionActive) {
            return (
              <Component
                {...props}
                {...props.componentProps}
                {...routeRenderProps}
              ></Component>
            );
          } else {
            return (
              <stencil-router-redirect url="/home"></stencil-router-redirect>
            );
          }
        }}
      />
    );
  };
}

injectHistory(AppRoot);
