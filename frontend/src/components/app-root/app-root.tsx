import {
  Component,
  FunctionalComponent,
  Prop,
  Host,
  Listen,
  State,
  h,
} from "@stencil/core";
import { RouterHistory, injectHistory } from "@stencil/router";
import { Store, Io, InitSocket } from "../../global/script";
import { setStore } from "./helpers";
import { MailApi } from "../../global/script/helpers";
import { getSessionCookie } from "./helpers";
import { MailPayloadInterface } from "../../global/script/interfaces";
import {
  GenerateMailPayload,
  ValidateMailPayload,
} from "../../global/script/helpers";
import {
  AccountDetailsBySessionApi,
  AccountLogoutApi,
} from "../../global/script/helpers";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @State() isMailingEmailVerificationLink: boolean = false;
  @State() modal: string;

  @Listen("authSuccessful") authSuccessfulListener() {
    this.getCookies();
    this.initSession();
    if (Store.isModalVisible) {
      this.closeModal();
    }
  }

  @Listen("buttonClick") async handleButtonClick(e) {
    if (e.detail.action === "mailEmailVerificationLink") {
      let mailEmailVerificationLinkPayload: MailPayloadInterface =
        GenerateMailPayload(Store.accountEmail, "emailVerificationLink");
      let { isValid, validationMessage } = ValidateMailPayload(
        mailEmailVerificationLinkPayload
      );
      if (!isValid) {
        return alert(validationMessage);
      }

      this.isMailingEmailVerificationLink = true;
      let { success, message, payload } = await MailApi(
        mailEmailVerificationLinkPayload
      );
      this.isMailingEmailVerificationLink = false;

      if (!success) {
        return alert(message);
      }

      if (!payload.success) {
        return alert(payload.message);
      }

      alert(payload.message);
    } else if (
      e.detail.action === "openLoginModal" ||
      e.detail.action === "openSignupModal" ||
      e.detail.action === "openForgotPasswordModal" ||
      e.detail.action === "goBackToLogin"
    ) {
      if (
        e.detail.action === "openLoginModal" ||
        e.detail.action === "goBackToLogin"
      ) {
        this.openModal("login");
      } else if (e.detail.action === "openSignupModal") {
        this.openModal("signup");
      } else if (e.detail.action === "openForgotPasswordModal") {
        this.openModal("resetPassword");
      }
    } else if (e.detail.action === "closeModal") {
      this.closeModal();
    } else if (e.detail.action === "logout") {
      this.logoutUser();
    } else if (e.detail.action === "proceedToLogin") {
      this.history.push("/", {});
      this.openModal("login");
    }
  }

  @Listen("logoutUserEvent") handleUserLogout() {
    this.logoutUser();
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
    InitSocket();
  }

  async logoutUser() {
    let { success, message, payload } = await AccountLogoutApi();
    if (!success) {
      return alert(message);
    }
    if (!payload.success) {
      return alert(payload.message);
    }
    Store.isSessionActive = payload.isSessionActive;
    Store.accountName = "";
    Store.accountEmail = "";
    Store.isEmailVerified = true;
    this.history.push("/", {});
  }

  openModal(name: string) {
    this.modal = name;
    if (!Store.isModalVisible) {
      Store.isModalVisible = true;
    }
  }

  disconnectedCallback() {
    Io.disconnect();
  }

  EmailVerificationBanner: FunctionalComponent = () => (
    <c-banner position="bottom" theme="danger">
      <l-row justifyContent="space-around">
        <l-row>
          <e-text>
            <strong>{Store.accountEmail}</strong> is not yet verified
          </e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-button
            action="mailEmailVerificationLink"
            active={this.isMailingEmailVerificationLink}
          >
            Verify email
          </e-button>{" "}
        </l-row>
      </l-row>
    </c-banner>
  );

  render() {
    return (
      <Host>
        <p-modal isVisible={Store.isModalVisible} name={this.modal}></p-modal>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="v-home" exact={true} />

            <stencil-route url="/page-1" component="v-page-1" />

            <stencil-route url="/verify/:type/:code" component="v-verify" />

            <this.LoggedInRoute
              url="/billing"
              component="v-billing"
            ></this.LoggedInRoute>

            <this.LoggedInRoute
              url="/account"
              component="v-account"
            ></this.LoggedInRoute>

            <this.LoggedInRoute
              url="/delete-account"
              component="v-delete-account"
            ></this.LoggedInRoute>

            <this.LoggedInRoute
              url="/payment-cancel"
              component="v-payment-cancel"
            ></this.LoggedInRoute>

            <this.LoggedInRoute
              url="/payment-handle/:sessionId"
              component="v-payment-handle"
            ></this.LoggedInRoute>

            <this.LoggedInRoute
              url="/checkout/:orderId"
              component="v-checkout"
            ></this.LoggedInRoute>

            <this.LoggedInRoute
              url="/support"
              component="v-support"
            ></this.LoggedInRoute>

            <this.LoggedOutRoute
              url="/post-oauth"
              component="v-post-oauth"
            ></this.LoggedOutRoute>

            <stencil-route component="v-catch-all" />
          </stencil-route-switch>
        </stencil-router>
        {Store.isSessionActive && !Store.isEmailVerified && (
          <this.EmailVerificationBanner></this.EmailVerificationBanner>
        )}
      </Host>
    );
  }

  LoggedInRoute = ({ component, ...props }: { [key: string]: any }) => {
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

  LoggedOutRoute = ({ component, ...props }: { [key: string]: any }) => {
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
