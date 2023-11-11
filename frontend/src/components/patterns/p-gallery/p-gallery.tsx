import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p-gallery',
  styleUrl: 'p-gallery.css',
  shadow: true,
})
export class PGallery {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
