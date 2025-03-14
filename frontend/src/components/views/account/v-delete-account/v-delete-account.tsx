import {
  Component,
  Event,
  EventEmitter,
  State,
  Host,
  Listen,
  h,
} from "@stencil/core";
import { deleteAccountApi } from "./helpers";

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
    let { success, message } = await deleteAccountApi();
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
          <l-spacer value={1}></l-spacer>
          <e-text>
            Deleting your account is an irreversible step. Your account and data
            will be purged immediately. Do you still want to proceed?
          </e-text>
          <l-spacer value={2}></l-spacer>
          <l-row justifyContent="space-between" align="center">
            <e-link url="/account">Back</e-link>
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
