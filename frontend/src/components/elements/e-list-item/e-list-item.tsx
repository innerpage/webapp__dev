import { Component, h } from '@stencil/core';

@Component({
  tag: 'e-list-item',
  styleUrl: 'e-list-item.css',
  shadow: true,
})
export class EListItem {
  render() {
    return (
      <li>
        <slot />
      </li>
    );
  }
}
