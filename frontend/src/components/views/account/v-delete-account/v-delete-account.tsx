import {
  Component,
  Event,
  EventEmitter,
  State,
  Host,
  Listen,
  h,
} from "@stencil/core";
import { deleteAccountApiCall } from "./helpers";

@Component({
  tag: "v-delete-account",
  styleUrl: "v-delete-account.css",
  shadow: true,
})
export class VDeleteAccount {
  @Event({
    eventName: "logoutEvent",
    bubbles: true,
  })
  logoutUserEventEmitter: EventEmitter;

  @Listen("buttonClick") async handleButtonClickEvent(e) {
    if (e.detail.action === "deleteAccount") {
      this.deleteAccount();
    }
  }

  @State() isDeletingAccount: boolean = false;

  async deleteAccount() {
    this.isDeletingAccount = true;
    let { success, message } = await deleteAccountApiCall();
    this.isDeletingAccount = false;
    alert(message);
    if (!success) {
      return;
    }
    this.logoutUserEventEmitter.emit();
  }

  render() {
    return (
      <Host>
        <main>
          <e-text variant="display">Are you sure?</e-text>
          <e-text>
            <u>Deleting your account is an irreversible step</u>. Your account
            and data will be <u>lost forever</u>. Do you still want to proceed?
          </e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-row justifyContent="space-between" align="center">
            <e-link url="/profile">Back</e-link>
            <e-button
              action="deleteAccount"
              theme="danger"
              active={this.isDeletingAccount}
            >
              Yes, delete my account
            </e-button>
          </l-row>
        </main>
      </Host>
    );
  }
}
