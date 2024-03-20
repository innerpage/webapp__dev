import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-modal',
  styleUrl: 'p-modal.css',
  shadow: true,
})
export class PModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
