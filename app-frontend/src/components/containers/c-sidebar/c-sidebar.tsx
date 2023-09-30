import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'c-sidebar',
  styleUrl: 'c-sidebar.css',
  shadow: true,
})
export class CSidebar {
  @Prop() variant: string = 'default';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
