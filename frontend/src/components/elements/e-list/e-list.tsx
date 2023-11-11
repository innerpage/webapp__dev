import { Component, h } from '@stencil/core';

@Component({
  tag: 'e-list',
  styleUrl: 'e-list.css',
  shadow: true,
})
export class EList {
  render() {
    return (
      <ul>
        <slot />
      </ul>
    );
  }
}
