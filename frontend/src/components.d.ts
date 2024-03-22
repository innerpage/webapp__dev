/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppRoot {
        "history": RouterHistory;
    }
    interface CBanner {
        "position": string;
        "theme": string;
    }
    interface CCard {
    }
    interface CContentArea {
    }
    interface CMain {
    }
    interface EButton {
        "action": string;
        "active": boolean;
        "disabled": boolean;
        "size": string;
        "theme": string;
        "value": any;
        "variant": string;
    }
    interface EInput {
        "checked": boolean;
        "label": string;
        "name": string;
        "placeholder": string;
        "type": string;
        "value": string;
    }
    interface ELink {
        "theme": string;
        "url": string;
        "variant": string;
    }
    interface EList {
    }
    interface EListItem {
    }
    interface ESelect {
        "name": string;
        "options": any;
    }
    interface EText {
        "theme": string;
        "variant": string;
        "weight": string;
    }
    interface LRow {
        "align": string;
        "direction": string;
        "justifyContent": string;
        "variant": string;
    }
    interface LSeperator {
        "variant": string;
    }
    interface LSpacer {
        "value": number;
        "variant": string;
    }
    interface PAuth {
        "view": string;
    }
    interface PEditableText {
        "label": string;
        "type": string;
    }
    interface PGallery {
    }
    interface PModal {
        "isVisible": boolean;
        "name": string;
    }
    interface POauthButton {
        "variant": string;
    }
    interface PSidebar {
    }
    interface PSpinner {
        "theme": string;
    }
    interface PTopbar {
    }
    interface PUserControl {
    }
    interface VBilling {
    }
    interface VCatchAll {
        "history": RouterHistory;
    }
    interface VCheckout {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface VDeleteAccount {
    }
    interface VForgotPassword {
    }
    interface VHome {
    }
    interface VLogin {
    }
    interface VPage1 {
    }
    interface VPaymentCancel {
    }
    interface VPaymentHandle {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface VPostOauth {
        "history": RouterHistory;
    }
    interface VProfile {
    }
    interface VSignup {
    }
    interface VSupport {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCBannerElement extends Components.CBanner, HTMLStencilElement {
    }
    var HTMLCBannerElement: {
        prototype: HTMLCBannerElement;
        new (): HTMLCBannerElement;
    };
    interface HTMLCCardElement extends Components.CCard, HTMLStencilElement {
    }
    var HTMLCCardElement: {
        prototype: HTMLCCardElement;
        new (): HTMLCCardElement;
    };
    interface HTMLCContentAreaElement extends Components.CContentArea, HTMLStencilElement {
    }
    var HTMLCContentAreaElement: {
        prototype: HTMLCContentAreaElement;
        new (): HTMLCContentAreaElement;
    };
    interface HTMLCMainElement extends Components.CMain, HTMLStencilElement {
    }
    var HTMLCMainElement: {
        prototype: HTMLCMainElement;
        new (): HTMLCMainElement;
    };
    interface HTMLEButtonElement extends Components.EButton, HTMLStencilElement {
    }
    var HTMLEButtonElement: {
        prototype: HTMLEButtonElement;
        new (): HTMLEButtonElement;
    };
    interface HTMLEInputElement extends Components.EInput, HTMLStencilElement {
    }
    var HTMLEInputElement: {
        prototype: HTMLEInputElement;
        new (): HTMLEInputElement;
    };
    interface HTMLELinkElement extends Components.ELink, HTMLStencilElement {
    }
    var HTMLELinkElement: {
        prototype: HTMLELinkElement;
        new (): HTMLELinkElement;
    };
    interface HTMLEListElement extends Components.EList, HTMLStencilElement {
    }
    var HTMLEListElement: {
        prototype: HTMLEListElement;
        new (): HTMLEListElement;
    };
    interface HTMLEListItemElement extends Components.EListItem, HTMLStencilElement {
    }
    var HTMLEListItemElement: {
        prototype: HTMLEListItemElement;
        new (): HTMLEListItemElement;
    };
    interface HTMLESelectElement extends Components.ESelect, HTMLStencilElement {
    }
    var HTMLESelectElement: {
        prototype: HTMLESelectElement;
        new (): HTMLESelectElement;
    };
    interface HTMLETextElement extends Components.EText, HTMLStencilElement {
    }
    var HTMLETextElement: {
        prototype: HTMLETextElement;
        new (): HTMLETextElement;
    };
    interface HTMLLRowElement extends Components.LRow, HTMLStencilElement {
    }
    var HTMLLRowElement: {
        prototype: HTMLLRowElement;
        new (): HTMLLRowElement;
    };
    interface HTMLLSeperatorElement extends Components.LSeperator, HTMLStencilElement {
    }
    var HTMLLSeperatorElement: {
        prototype: HTMLLSeperatorElement;
        new (): HTMLLSeperatorElement;
    };
    interface HTMLLSpacerElement extends Components.LSpacer, HTMLStencilElement {
    }
    var HTMLLSpacerElement: {
        prototype: HTMLLSpacerElement;
        new (): HTMLLSpacerElement;
    };
    interface HTMLPAuthElement extends Components.PAuth, HTMLStencilElement {
    }
    var HTMLPAuthElement: {
        prototype: HTMLPAuthElement;
        new (): HTMLPAuthElement;
    };
    interface HTMLPEditableTextElement extends Components.PEditableText, HTMLStencilElement {
    }
    var HTMLPEditableTextElement: {
        prototype: HTMLPEditableTextElement;
        new (): HTMLPEditableTextElement;
    };
    interface HTMLPGalleryElement extends Components.PGallery, HTMLStencilElement {
    }
    var HTMLPGalleryElement: {
        prototype: HTMLPGalleryElement;
        new (): HTMLPGalleryElement;
    };
    interface HTMLPModalElement extends Components.PModal, HTMLStencilElement {
    }
    var HTMLPModalElement: {
        prototype: HTMLPModalElement;
        new (): HTMLPModalElement;
    };
    interface HTMLPOauthButtonElement extends Components.POauthButton, HTMLStencilElement {
    }
    var HTMLPOauthButtonElement: {
        prototype: HTMLPOauthButtonElement;
        new (): HTMLPOauthButtonElement;
    };
    interface HTMLPSidebarElement extends Components.PSidebar, HTMLStencilElement {
    }
    var HTMLPSidebarElement: {
        prototype: HTMLPSidebarElement;
        new (): HTMLPSidebarElement;
    };
    interface HTMLPSpinnerElement extends Components.PSpinner, HTMLStencilElement {
    }
    var HTMLPSpinnerElement: {
        prototype: HTMLPSpinnerElement;
        new (): HTMLPSpinnerElement;
    };
    interface HTMLPTopbarElement extends Components.PTopbar, HTMLStencilElement {
    }
    var HTMLPTopbarElement: {
        prototype: HTMLPTopbarElement;
        new (): HTMLPTopbarElement;
    };
    interface HTMLPUserControlElement extends Components.PUserControl, HTMLStencilElement {
    }
    var HTMLPUserControlElement: {
        prototype: HTMLPUserControlElement;
        new (): HTMLPUserControlElement;
    };
    interface HTMLVBillingElement extends Components.VBilling, HTMLStencilElement {
    }
    var HTMLVBillingElement: {
        prototype: HTMLVBillingElement;
        new (): HTMLVBillingElement;
    };
    interface HTMLVCatchAllElement extends Components.VCatchAll, HTMLStencilElement {
    }
    var HTMLVCatchAllElement: {
        prototype: HTMLVCatchAllElement;
        new (): HTMLVCatchAllElement;
    };
    interface HTMLVCheckoutElement extends Components.VCheckout, HTMLStencilElement {
    }
    var HTMLVCheckoutElement: {
        prototype: HTMLVCheckoutElement;
        new (): HTMLVCheckoutElement;
    };
    interface HTMLVDeleteAccountElement extends Components.VDeleteAccount, HTMLStencilElement {
    }
    var HTMLVDeleteAccountElement: {
        prototype: HTMLVDeleteAccountElement;
        new (): HTMLVDeleteAccountElement;
    };
    interface HTMLVForgotPasswordElement extends Components.VForgotPassword, HTMLStencilElement {
    }
    var HTMLVForgotPasswordElement: {
        prototype: HTMLVForgotPasswordElement;
        new (): HTMLVForgotPasswordElement;
    };
    interface HTMLVHomeElement extends Components.VHome, HTMLStencilElement {
    }
    var HTMLVHomeElement: {
        prototype: HTMLVHomeElement;
        new (): HTMLVHomeElement;
    };
    interface HTMLVLoginElement extends Components.VLogin, HTMLStencilElement {
    }
    var HTMLVLoginElement: {
        prototype: HTMLVLoginElement;
        new (): HTMLVLoginElement;
    };
    interface HTMLVPage1Element extends Components.VPage1, HTMLStencilElement {
    }
    var HTMLVPage1Element: {
        prototype: HTMLVPage1Element;
        new (): HTMLVPage1Element;
    };
    interface HTMLVPaymentCancelElement extends Components.VPaymentCancel, HTMLStencilElement {
    }
    var HTMLVPaymentCancelElement: {
        prototype: HTMLVPaymentCancelElement;
        new (): HTMLVPaymentCancelElement;
    };
    interface HTMLVPaymentHandleElement extends Components.VPaymentHandle, HTMLStencilElement {
    }
    var HTMLVPaymentHandleElement: {
        prototype: HTMLVPaymentHandleElement;
        new (): HTMLVPaymentHandleElement;
    };
    interface HTMLVPostOauthElement extends Components.VPostOauth, HTMLStencilElement {
    }
    var HTMLVPostOauthElement: {
        prototype: HTMLVPostOauthElement;
        new (): HTMLVPostOauthElement;
    };
    interface HTMLVProfileElement extends Components.VProfile, HTMLStencilElement {
    }
    var HTMLVProfileElement: {
        prototype: HTMLVProfileElement;
        new (): HTMLVProfileElement;
    };
    interface HTMLVSignupElement extends Components.VSignup, HTMLStencilElement {
    }
    var HTMLVSignupElement: {
        prototype: HTMLVSignupElement;
        new (): HTMLVSignupElement;
    };
    interface HTMLVSupportElement extends Components.VSupport, HTMLStencilElement {
    }
    var HTMLVSupportElement: {
        prototype: HTMLVSupportElement;
        new (): HTMLVSupportElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "c-banner": HTMLCBannerElement;
        "c-card": HTMLCCardElement;
        "c-content-area": HTMLCContentAreaElement;
        "c-main": HTMLCMainElement;
        "e-button": HTMLEButtonElement;
        "e-input": HTMLEInputElement;
        "e-link": HTMLELinkElement;
        "e-list": HTMLEListElement;
        "e-list-item": HTMLEListItemElement;
        "e-select": HTMLESelectElement;
        "e-text": HTMLETextElement;
        "l-row": HTMLLRowElement;
        "l-seperator": HTMLLSeperatorElement;
        "l-spacer": HTMLLSpacerElement;
        "p-auth": HTMLPAuthElement;
        "p-editable-text": HTMLPEditableTextElement;
        "p-gallery": HTMLPGalleryElement;
        "p-modal": HTMLPModalElement;
        "p-oauth-button": HTMLPOauthButtonElement;
        "p-sidebar": HTMLPSidebarElement;
        "p-spinner": HTMLPSpinnerElement;
        "p-topbar": HTMLPTopbarElement;
        "p-user-control": HTMLPUserControlElement;
        "v-billing": HTMLVBillingElement;
        "v-catch-all": HTMLVCatchAllElement;
        "v-checkout": HTMLVCheckoutElement;
        "v-delete-account": HTMLVDeleteAccountElement;
        "v-forgot-password": HTMLVForgotPasswordElement;
        "v-home": HTMLVHomeElement;
        "v-login": HTMLVLoginElement;
        "v-page-1": HTMLVPage1Element;
        "v-payment-cancel": HTMLVPaymentCancelElement;
        "v-payment-handle": HTMLVPaymentHandleElement;
        "v-post-oauth": HTMLVPostOauthElement;
        "v-profile": HTMLVProfileElement;
        "v-signup": HTMLVSignupElement;
        "v-support": HTMLVSupportElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
        "history"?: RouterHistory;
    }
    interface CBanner {
        "position"?: string;
        "theme"?: string;
    }
    interface CCard {
    }
    interface CContentArea {
    }
    interface CMain {
    }
    interface EButton {
        "action"?: string;
        "active"?: boolean;
        "disabled"?: boolean;
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        "size"?: string;
        "theme"?: string;
        "value"?: any;
        "variant"?: string;
    }
    interface EInput {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onTextInput"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface ELink {
        "theme"?: string;
        "url"?: string;
        "variant"?: string;
    }
    interface EList {
    }
    interface EListItem {
    }
    interface ESelect {
        "name"?: string;
        "onEvent_selectInput"?: (event: CustomEvent<any>) => void;
        "options"?: any;
    }
    interface EText {
        "theme"?: string;
        "variant"?: string;
        "weight"?: string;
    }
    interface LRow {
        "align"?: string;
        "direction"?: string;
        "justifyContent"?: string;
        "variant"?: string;
    }
    interface LSeperator {
        "variant"?: string;
    }
    interface LSpacer {
        "value"?: number;
        "variant"?: string;
    }
    interface PAuth {
        "view"?: string;
    }
    interface PEditableText {
        "label"?: string;
        "type"?: string;
    }
    interface PGallery {
    }
    interface PModal {
        "isVisible"?: boolean;
        "name"?: string;
    }
    interface POauthButton {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
        "variant"?: string;
    }
    interface PSidebar {
    }
    interface PSpinner {
        "theme"?: string;
    }
    interface PTopbar {
    }
    interface PUserControl {
    }
    interface VBilling {
    }
    interface VCatchAll {
        "history"?: RouterHistory;
    }
    interface VCheckout {
        "history"?: RouterHistory;
        "match"?: MatchResults;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VDeleteAccount {
        "onLogoutUserEvent"?: (event: CustomEvent<any>) => void;
    }
    interface VForgotPassword {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VHome {
    }
    interface VLogin {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
        "onSuccess_Auth"?: (event: CustomEvent<any>) => void;
    }
    interface VPage1 {
    }
    interface VPaymentCancel {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VPaymentHandle {
        "history"?: RouterHistory;
        "match"?: MatchResults;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VPostOauth {
        "history"?: RouterHistory;
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
    }
    interface VProfile {
    }
    interface VSignup {
        "onEvent_RouteTo"?: (event: CustomEvent<any>) => void;
        "onSuccess_Auth"?: (event: CustomEvent<any>) => void;
    }
    interface VSupport {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "c-banner": CBanner;
        "c-card": CCard;
        "c-content-area": CContentArea;
        "c-main": CMain;
        "e-button": EButton;
        "e-input": EInput;
        "e-link": ELink;
        "e-list": EList;
        "e-list-item": EListItem;
        "e-select": ESelect;
        "e-text": EText;
        "l-row": LRow;
        "l-seperator": LSeperator;
        "l-spacer": LSpacer;
        "p-auth": PAuth;
        "p-editable-text": PEditableText;
        "p-gallery": PGallery;
        "p-modal": PModal;
        "p-oauth-button": POauthButton;
        "p-sidebar": PSidebar;
        "p-spinner": PSpinner;
        "p-topbar": PTopbar;
        "p-user-control": PUserControl;
        "v-billing": VBilling;
        "v-catch-all": VCatchAll;
        "v-checkout": VCheckout;
        "v-delete-account": VDeleteAccount;
        "v-forgot-password": VForgotPassword;
        "v-home": VHome;
        "v-login": VLogin;
        "v-page-1": VPage1;
        "v-payment-cancel": VPaymentCancel;
        "v-payment-handle": VPaymentHandle;
        "v-post-oauth": VPostOauth;
        "v-profile": VProfile;
        "v-signup": VSignup;
        "v-support": VSupport;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "c-banner": LocalJSX.CBanner & JSXBase.HTMLAttributes<HTMLCBannerElement>;
            "c-card": LocalJSX.CCard & JSXBase.HTMLAttributes<HTMLCCardElement>;
            "c-content-area": LocalJSX.CContentArea & JSXBase.HTMLAttributes<HTMLCContentAreaElement>;
            "c-main": LocalJSX.CMain & JSXBase.HTMLAttributes<HTMLCMainElement>;
            "e-button": LocalJSX.EButton & JSXBase.HTMLAttributes<HTMLEButtonElement>;
            "e-input": LocalJSX.EInput & JSXBase.HTMLAttributes<HTMLEInputElement>;
            "e-link": LocalJSX.ELink & JSXBase.HTMLAttributes<HTMLELinkElement>;
            "e-list": LocalJSX.EList & JSXBase.HTMLAttributes<HTMLEListElement>;
            "e-list-item": LocalJSX.EListItem & JSXBase.HTMLAttributes<HTMLEListItemElement>;
            "e-select": LocalJSX.ESelect & JSXBase.HTMLAttributes<HTMLESelectElement>;
            "e-text": LocalJSX.EText & JSXBase.HTMLAttributes<HTMLETextElement>;
            "l-row": LocalJSX.LRow & JSXBase.HTMLAttributes<HTMLLRowElement>;
            "l-seperator": LocalJSX.LSeperator & JSXBase.HTMLAttributes<HTMLLSeperatorElement>;
            "l-spacer": LocalJSX.LSpacer & JSXBase.HTMLAttributes<HTMLLSpacerElement>;
            "p-auth": LocalJSX.PAuth & JSXBase.HTMLAttributes<HTMLPAuthElement>;
            "p-editable-text": LocalJSX.PEditableText & JSXBase.HTMLAttributes<HTMLPEditableTextElement>;
            "p-gallery": LocalJSX.PGallery & JSXBase.HTMLAttributes<HTMLPGalleryElement>;
            "p-modal": LocalJSX.PModal & JSXBase.HTMLAttributes<HTMLPModalElement>;
            "p-oauth-button": LocalJSX.POauthButton & JSXBase.HTMLAttributes<HTMLPOauthButtonElement>;
            "p-sidebar": LocalJSX.PSidebar & JSXBase.HTMLAttributes<HTMLPSidebarElement>;
            "p-spinner": LocalJSX.PSpinner & JSXBase.HTMLAttributes<HTMLPSpinnerElement>;
            "p-topbar": LocalJSX.PTopbar & JSXBase.HTMLAttributes<HTMLPTopbarElement>;
            "p-user-control": LocalJSX.PUserControl & JSXBase.HTMLAttributes<HTMLPUserControlElement>;
            "v-billing": LocalJSX.VBilling & JSXBase.HTMLAttributes<HTMLVBillingElement>;
            "v-catch-all": LocalJSX.VCatchAll & JSXBase.HTMLAttributes<HTMLVCatchAllElement>;
            "v-checkout": LocalJSX.VCheckout & JSXBase.HTMLAttributes<HTMLVCheckoutElement>;
            "v-delete-account": LocalJSX.VDeleteAccount & JSXBase.HTMLAttributes<HTMLVDeleteAccountElement>;
            "v-forgot-password": LocalJSX.VForgotPassword & JSXBase.HTMLAttributes<HTMLVForgotPasswordElement>;
            "v-home": LocalJSX.VHome & JSXBase.HTMLAttributes<HTMLVHomeElement>;
            "v-login": LocalJSX.VLogin & JSXBase.HTMLAttributes<HTMLVLoginElement>;
            "v-page-1": LocalJSX.VPage1 & JSXBase.HTMLAttributes<HTMLVPage1Element>;
            "v-payment-cancel": LocalJSX.VPaymentCancel & JSXBase.HTMLAttributes<HTMLVPaymentCancelElement>;
            "v-payment-handle": LocalJSX.VPaymentHandle & JSXBase.HTMLAttributes<HTMLVPaymentHandleElement>;
            "v-post-oauth": LocalJSX.VPostOauth & JSXBase.HTMLAttributes<HTMLVPostOauthElement>;
            "v-profile": LocalJSX.VProfile & JSXBase.HTMLAttributes<HTMLVProfileElement>;
            "v-signup": LocalJSX.VSignup & JSXBase.HTMLAttributes<HTMLVSignupElement>;
            "v-support": LocalJSX.VSupport & JSXBase.HTMLAttributes<HTMLVSupportElement>;
        }
    }
}
