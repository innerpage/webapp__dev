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
        <p>Home</p>
        <p-user-control></p-user-control>
      </Host>
    );
  }
}
