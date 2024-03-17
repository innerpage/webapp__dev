import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'c-content-area',
  styleUrl: 'c-content-area.css',
  shadow: true,
})
export class CContentArea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
