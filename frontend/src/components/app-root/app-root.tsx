import { Component, FunctionalComponent, Prop, Host, Listen, State, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import { state, IO, init_Socket } from '../../global/script';
import { helper_Set_State } from './helpers';
import { Helper_ApiCall_GetAccountDetails_BySession, Helper_ApiCall_Account_Logout } from '../../global/script/helpers';
import { getLoggedInCookie } from './helpers';
import { mailPayloadInterface } from '../../global/script/interfaces';
import { generateMailPayload, validateMailPayload } from '../../global/script/helpers';
import { mailApi } from '../../global/script/helpers';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  @State() isMailEmailVerificationLinkButtonActive: boolean = false;
  @State() modal: string;

  @Listen('authSuccessful') authSuccessfulListener() {
    this.getCookies();
    this.initSession();
    this.closeModal();
  }

  @Listen('buttonClick') async handle_ButtonClick(e) {
    if (e.detail.action === 'mailEmailVerificationLink') {
      let mailEmailVerificationLinkPayload: mailPayloadInterface = generateMailPayload(state.accountEmail, 'emailVerificationLink');
      let { isValid, validationMessage } = validateMailPayload(mailEmailVerificationLinkPayload);
      if (!isValid) {
        return alert(validationMessage);
      }

      this.isMailEmailVerificationLinkButtonActive = true;
      let { success, message, payload } = await mailApi(mailEmailVerificationLinkPayload);
      this.isMailEmailVerificationLinkButtonActive = false;

      if (!success) {
        return alert(message);
      }

      if (!payload.success) {
        return alert(payload.message);
      }

      alert(payload.message);
    } else if (
      e.detail.action === 'openLoginModal' ||
      e.detail.action === 'openSignupModal' ||
      e.detail.action === 'openForgotPasswordModal' ||
      e.detail.action === 'goBackToLogin'
    ) {
      if (e.detail.action === 'openLoginModal' || e.detail.action === 'goBackToLogin') {
        this.openModal('login');
      } else if (e.detail.action === 'openSignupModal') {
        this.openModal('signup');
      } else if (e.detail.action === 'openForgotPasswordModal') {
        this.openModal('resetPassword');
      }
      if (!state.isModalVisible) {
        state.isModalVisible = true;
      }
    } else if (e.detail.action === 'closeModal') {
      this.closeModal();
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

  componentWillLoad() {
    this.getCookies();
  }

  componentDidLoad() {
    if (state.isSessionActive) {
      this.initSession();
    }
  }

  closeModal() {
    state.isModalVisible = false;
    setTimeout(() => {
      this.modal = '';
    }, 150);
  }

  getCookies() {
    state.isSessionActive = getLoggedInCookie();
  }

  async initSession() {
    let { success, message, payload } = await Helper_ApiCall_GetAccountDetails_BySession();
    if (!success) {
      return alert(message);
    }
    helper_Set_State(payload.accountDetails);
    init_Socket();
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
    this.history.push('/', {});
  }

  openModal(name: string) {
    this.modal = name;
  }

  disconnectedCallback() {
    IO.disconnect();
  }

  EmailVerificationBanner: FunctionalComponent = () => (
    <c-banner position="bottom" theme="danger">
      <l-row justifyContent="space-around">
        <l-row>
          <e-text>
            <strong>{state.accountEmail}</strong> is not yet verified
          </e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-button action="mailEmailVerificationLink" active={this.isMailEmailVerificationLinkButtonActive}>
            Verify email
          </e-button>{' '}
        </l-row>
      </l-row>
    </c-banner>
  );

  render() {
    return (
      <Host>
        <p-modal isVisible={state.isModalVisible} name={this.modal}></p-modal>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="v-home" exact={true} />
            <stencil-route url="/page-1" component="v-page-1" />
            <stencil-route url="/verify/:type/:email/:code" component="v-verification" />

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

            {/* Sample Routes
            <stencil-route url="/payment-handle/:id_Session" component="v-payment-handle" /> */}
          </stencil-route-switch>
        </stencil-router>
        {!state.isAccountEmailVerified && <this.EmailVerificationBanner></this.EmailVerificationBanner>}
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
