import { Component, Prop, Host, Listen, State, h } from "@stencil/core";
import { RouterHistory, injectHistory } from "@stencil/router";
import { Store } from "../../global/script";
import { setStore } from "./helpers";
import { getSessionCookie } from "./helpers";
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

  @State() modal: string;

  @Listen("authSuccessful") authSuccessfulListener() {
    this.getCookies();
    this.initSession();
    if (Store.isModalVisible) {
      this.closeModal();
    }
  }

  @Listen("closeModal") closeModalListener() {
    this.closeModal();
  }

  @Listen("buttonClick") async handleButtonClick(e) {
    if (
      e.detail.action === "openLoginModal" ||
      e.detail.action === "goBackToLogin"
    ) {
      this.openModal("login");
    } else if (e.detail.action === "openSignupModal") {
      this.openModal("signup");
    } else if (e.detail.action === "closeModal") {
      this.closeModal();
    } else if (e.detail.action === "logout") {
      this.logout();
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

  @Listen("authSuccess") handleAuthSuccessEvent(e) {
    setStore(e.detail.payload);
  }

  componentWillLoad() {
    this.getCookies();
  }

  componentDidLoad() {
    if (Store.isSessionActive) {
      this.initSession();
    }
  }

  closeModal() {
    Store.isModalVisible = false;
    setTimeout(() => {
      this.modal = "";
    }, 150);
  }

  getCookies() {
    Store.isSessionActive = getSessionCookie();
  }

  async initSession() {
    let { success, message, payload } = await AccountDetailsBySessionApi();
    if (!success) {
      return alert(message);
    }
    setStore(payload);
  }

  async logout() {
    let { success, message, payload } = await LogoutApi();
    if (!success) {
      return alert(message);
    }
    Store.isSessionActive = payload.isSessionActive;
    this.history.push("/", {});
  }

  openModal(name: string) {
    this.modal = name;
    if (!Store.isModalVisible) {
      Store.isModalVisible = true;
    }
  }

  render() {
    return (
      <Host>
        <p-modal isVisible={Store.isModalVisible} name={this.modal}></p-modal>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="v-home" exact={true} />

            <stencil-route url="/page-1" component="v-page-1" />

            <stencil-route url="/verify/:type/:code" component="v-verify" />

            <this.SessionRoute
              url="/billing"
              component="v-billing"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/account"
              component="v-account"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/delete-account"
              component="v-delete-account"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/payment-cancel"
              component="v-payment-cancel"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/payment-handle/:sessionId"
              component="v-payment-handle"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/checkout/:orderId"
              component="v-checkout"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/support"
              component="v-support"
            ></this.SessionRoute>

            <this.SessionRoute
              url="/writer/:noteId"
              component="v-writer"
            ></this.SessionRoute>

            <stencil-route component="v-catch-all" />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }

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
