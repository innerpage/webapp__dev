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
    interface EImg {
        "src": string;
        "variant": string;
        "width": string;
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
        "active": boolean;
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
    interface ETextarea {
        "content": string;
        "placeholder": string;
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
    interface PEditableText {
        "name": string;
        "type": string;
        "value": string;
    }
    interface PGallery {
    }
    interface PNote {
        "history": RouterHistory;
        "noteId": string;
        "preview": string;
        "timestamp": string;
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
    interface VAccount {
    }
    interface VCatchAll {
        "history": RouterHistory;
    }
    interface VContact {
    }
    interface VDeleteAccount {
    }
    interface VHome {
        "history": RouterHistory;
    }
    interface VLogin {
    }
    interface VSignup {
    }
    interface VSupportUs {
    }
    interface VWriter {
        "match": MatchResults;
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
    interface HTMLEImgElement extends Components.EImg, HTMLStencilElement {
    }
    var HTMLEImgElement: {
        prototype: HTMLEImgElement;
        new (): HTMLEImgElement;
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
    interface HTMLETextareaElement extends Components.ETextarea, HTMLStencilElement {
    }
    var HTMLETextareaElement: {
        prototype: HTMLETextareaElement;
        new (): HTMLETextareaElement;
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
    interface HTMLPNoteElement extends Components.PNote, HTMLStencilElement {
    }
    var HTMLPNoteElement: {
        prototype: HTMLPNoteElement;
        new (): HTMLPNoteElement;
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
    interface HTMLVAccountElement extends Components.VAccount, HTMLStencilElement {
    }
    var HTMLVAccountElement: {
        prototype: HTMLVAccountElement;
        new (): HTMLVAccountElement;
    };
    interface HTMLVCatchAllElement extends Components.VCatchAll, HTMLStencilElement {
    }
    var HTMLVCatchAllElement: {
        prototype: HTMLVCatchAllElement;
        new (): HTMLVCatchAllElement;
    };
    interface HTMLVContactElement extends Components.VContact, HTMLStencilElement {
    }
    var HTMLVContactElement: {
        prototype: HTMLVContactElement;
        new (): HTMLVContactElement;
    };
    interface HTMLVDeleteAccountElement extends Components.VDeleteAccount, HTMLStencilElement {
    }
    var HTMLVDeleteAccountElement: {
        prototype: HTMLVDeleteAccountElement;
        new (): HTMLVDeleteAccountElement;
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
    interface HTMLVSignupElement extends Components.VSignup, HTMLStencilElement {
    }
    var HTMLVSignupElement: {
        prototype: HTMLVSignupElement;
        new (): HTMLVSignupElement;
    };
    interface HTMLVSupportUsElement extends Components.VSupportUs, HTMLStencilElement {
    }
    var HTMLVSupportUsElement: {
        prototype: HTMLVSupportUsElement;
        new (): HTMLVSupportUsElement;
    };
    interface HTMLVWriterElement extends Components.VWriter, HTMLStencilElement {
    }
    var HTMLVWriterElement: {
        prototype: HTMLVWriterElement;
        new (): HTMLVWriterElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "c-banner": HTMLCBannerElement;
        "c-card": HTMLCCardElement;
        "c-content-area": HTMLCContentAreaElement;
        "c-main": HTMLCMainElement;
        "e-button": HTMLEButtonElement;
        "e-img": HTMLEImgElement;
        "e-input": HTMLEInputElement;
        "e-link": HTMLELinkElement;
        "e-list": HTMLEListElement;
        "e-list-item": HTMLEListItemElement;
        "e-select": HTMLESelectElement;
        "e-text": HTMLETextElement;
        "e-textarea": HTMLETextareaElement;
        "l-row": HTMLLRowElement;
        "l-seperator": HTMLLSeperatorElement;
        "l-spacer": HTMLLSpacerElement;
        "p-editable-text": HTMLPEditableTextElement;
        "p-gallery": HTMLPGalleryElement;
        "p-note": HTMLPNoteElement;
        "p-sidebar": HTMLPSidebarElement;
        "p-spinner": HTMLPSpinnerElement;
        "p-topbar": HTMLPTopbarElement;
        "p-user-control": HTMLPUserControlElement;
        "v-account": HTMLVAccountElement;
        "v-catch-all": HTMLVCatchAllElement;
        "v-contact": HTMLVContactElement;
        "v-delete-account": HTMLVDeleteAccountElement;
        "v-home": HTMLVHomeElement;
        "v-login": HTMLVLoginElement;
        "v-signup": HTMLVSignupElement;
        "v-support-us": HTMLVSupportUsElement;
        "v-writer": HTMLVWriterElement;
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
    interface EImg {
        "src"?: string;
        "variant"?: string;
        "width"?: string;
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
        "active"?: boolean;
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
        "onSelectInputEvent"?: (event: CustomEvent<any>) => void;
        "options"?: any;
    }
    interface EText {
        "theme"?: string;
        "variant"?: string;
        "weight"?: string;
    }
    interface ETextarea {
        "content"?: string;
        "onTextAreaInput"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
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
    interface PEditableText {
        "name"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface PGallery {
    }
    interface PNote {
        "history"?: RouterHistory;
        "noteId"?: string;
        "preview"?: string;
        "timestamp"?: string;
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
    interface VAccount {
    }
    interface VCatchAll {
        "history"?: RouterHistory;
    }
    interface VContact {
    }
    interface VDeleteAccount {
        "onLogoutEvent"?: (event: CustomEvent<any>) => void;
    }
    interface VHome {
        "history"?: RouterHistory;
    }
    interface VLogin {
        "onAuthSuccessful"?: (event: CustomEvent<any>) => void;
    }
    interface VSignup {
        "onAuthSuccessful"?: (event: CustomEvent<any>) => void;
    }
    interface VSupportUs {
    }
    interface VWriter {
        "match"?: MatchResults;
        "onRouteToEvent"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "c-banner": CBanner;
        "c-card": CCard;
        "c-content-area": CContentArea;
        "c-main": CMain;
        "e-button": EButton;
        "e-img": EImg;
        "e-input": EInput;
        "e-link": ELink;
        "e-list": EList;
        "e-list-item": EListItem;
        "e-select": ESelect;
        "e-text": EText;
        "e-textarea": ETextarea;
        "l-row": LRow;
        "l-seperator": LSeperator;
        "l-spacer": LSpacer;
        "p-editable-text": PEditableText;
        "p-gallery": PGallery;
        "p-note": PNote;
        "p-sidebar": PSidebar;
        "p-spinner": PSpinner;
        "p-topbar": PTopbar;
        "p-user-control": PUserControl;
        "v-account": VAccount;
        "v-catch-all": VCatchAll;
        "v-contact": VContact;
        "v-delete-account": VDeleteAccount;
        "v-home": VHome;
        "v-login": VLogin;
        "v-signup": VSignup;
        "v-support-us": VSupportUs;
        "v-writer": VWriter;
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
            "e-img": LocalJSX.EImg & JSXBase.HTMLAttributes<HTMLEImgElement>;
            "e-input": LocalJSX.EInput & JSXBase.HTMLAttributes<HTMLEInputElement>;
            "e-link": LocalJSX.ELink & JSXBase.HTMLAttributes<HTMLELinkElement>;
            "e-list": LocalJSX.EList & JSXBase.HTMLAttributes<HTMLEListElement>;
            "e-list-item": LocalJSX.EListItem & JSXBase.HTMLAttributes<HTMLEListItemElement>;
            "e-select": LocalJSX.ESelect & JSXBase.HTMLAttributes<HTMLESelectElement>;
            "e-text": LocalJSX.EText & JSXBase.HTMLAttributes<HTMLETextElement>;
            "e-textarea": LocalJSX.ETextarea & JSXBase.HTMLAttributes<HTMLETextareaElement>;
            "l-row": LocalJSX.LRow & JSXBase.HTMLAttributes<HTMLLRowElement>;
            "l-seperator": LocalJSX.LSeperator & JSXBase.HTMLAttributes<HTMLLSeperatorElement>;
            "l-spacer": LocalJSX.LSpacer & JSXBase.HTMLAttributes<HTMLLSpacerElement>;
            "p-editable-text": LocalJSX.PEditableText & JSXBase.HTMLAttributes<HTMLPEditableTextElement>;
            "p-gallery": LocalJSX.PGallery & JSXBase.HTMLAttributes<HTMLPGalleryElement>;
            "p-note": LocalJSX.PNote & JSXBase.HTMLAttributes<HTMLPNoteElement>;
            "p-sidebar": LocalJSX.PSidebar & JSXBase.HTMLAttributes<HTMLPSidebarElement>;
            "p-spinner": LocalJSX.PSpinner & JSXBase.HTMLAttributes<HTMLPSpinnerElement>;
            "p-topbar": LocalJSX.PTopbar & JSXBase.HTMLAttributes<HTMLPTopbarElement>;
            "p-user-control": LocalJSX.PUserControl & JSXBase.HTMLAttributes<HTMLPUserControlElement>;
            "v-account": LocalJSX.VAccount & JSXBase.HTMLAttributes<HTMLVAccountElement>;
            "v-catch-all": LocalJSX.VCatchAll & JSXBase.HTMLAttributes<HTMLVCatchAllElement>;
            "v-contact": LocalJSX.VContact & JSXBase.HTMLAttributes<HTMLVContactElement>;
            "v-delete-account": LocalJSX.VDeleteAccount & JSXBase.HTMLAttributes<HTMLVDeleteAccountElement>;
            "v-home": LocalJSX.VHome & JSXBase.HTMLAttributes<HTMLVHomeElement>;
            "v-login": LocalJSX.VLogin & JSXBase.HTMLAttributes<HTMLVLoginElement>;
            "v-signup": LocalJSX.VSignup & JSXBase.HTMLAttributes<HTMLVSignupElement>;
            "v-support-us": LocalJSX.VSupportUs & JSXBase.HTMLAttributes<HTMLVSupportUsElement>;
            "v-writer": LocalJSX.VWriter & JSXBase.HTMLAttributes<HTMLVWriterElement>;
        }
    }
}
