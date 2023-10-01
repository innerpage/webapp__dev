import { Component, FunctionalComponent, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'p-sidebar',
  styleUrl: 'p-sidebar.css',
  shadow: true,
})
export class PSidebar {
  @Prop() variant: string = 'default';

  Default: FunctionalComponent = () => (
    <div class="sidebar__default">
      <div class="logo"></div>
      <p-user-control></p-user-control>
    </div>
  );

  render() {
    if (this.variant === 'default') {
      return (
        <Host>
          <this.Default></this.Default>
        </Host>
      );
    }
  }
}
