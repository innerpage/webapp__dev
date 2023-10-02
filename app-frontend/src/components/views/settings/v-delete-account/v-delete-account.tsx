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
        <e-text>You account and data will be lost forever. Deleting your account is an irreversible step.</e-text>
        <l-spacer value={0.5}></l-spacer>
        <e-button action="deleteAccount" theme="danger">
          Delete my account
        </e-button>
      </Host>
    );
  }
}
