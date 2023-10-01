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
      <div>
        <div class="logo"></div>
        <l-spacer value={4}></l-spacer>
        <e-list>
          <e-list-item>
            <e-link url="/home">
              <l-row>
                <ion-icon name="home-outline"></ion-icon>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Home</e-text>
              </l-row>
            </e-link>
          </e-list-item>
          <l-spacer value={1}></l-spacer>
          <e-list-item>
            <e-link url="/page-1">
              <l-row>
                <ion-icon name="document-outline"></ion-icon>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Page 1</e-text>
              </l-row>
            </e-link>
          </e-list-item>
          <l-spacer value={1}></l-spacer>
          <e-list-item>
            <e-link url="/page-2">
              <l-row>
                <ion-icon name="document-text-outline"></ion-icon>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Page 2</e-text>
              </l-row>
            </e-link>
          </e-list-item>
        </e-list>
      </div>
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
