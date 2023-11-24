import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-delete-account',
  styleUrl: 'v-delete-account.css',
  shadow: true,
})
export class VDeleteAccount {
  render() {
    return (
      <Host>
        <e-text variant="display">Are you sure?</e-text>
        <e-text>Deleting your account is an irreversible step. Your account and data will be lost forever. Do you still want to delete your account?</e-text>
        <l-spacer value={0.5}></l-spacer>
        <e-button action="deleteAccount" theme="danger">
          Yes, delete my account
        </e-button>
      </Host>
    );
  }
}
