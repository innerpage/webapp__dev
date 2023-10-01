import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-account',
  styleUrl: 'v-account.css',
  shadow: true,
})
export class VAccount {
  render() {
    return (
      <Host>
        <c-sidebar>
          <div class="logo"></div>
          <p-user-control></p-user-control>
        </c-sidebar>
        <c-main>
          <e-text variant="heading">Account</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
        </c-main>
      </Host>
    );
  }
}
