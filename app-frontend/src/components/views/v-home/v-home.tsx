import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  render() {
    return (
      <Host>
        <c-sidebar>
          <div class="logo"></div>
          <p-user-control></p-user-control>
        </c-sidebar>
        <c-main>
          <e-text variant="heading">Home</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
        </c-main>
      </Host>
    );
  }
}
