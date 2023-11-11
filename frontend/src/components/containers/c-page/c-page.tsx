import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'c-page',
  styleUrl: 'c-page.css',
  shadow: true,
})
export class CPage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
