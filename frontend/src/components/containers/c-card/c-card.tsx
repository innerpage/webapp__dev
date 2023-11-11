import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'c-card',
  styleUrl: 'c-card.css',
  shadow: true,
})
export class CCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
