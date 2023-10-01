import { Component, FunctionalComponent, Prop, Host, h } from '@stencil/core';
import { state } from '../../../global/script';

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
        <l-spacer value={2}></l-spacer>
        <e-list>
          <e-list-item>
            <e-link url="/home" variant={state.activeView === 'home' ? 'navLinkActive' : 'navLink'}>
              <l-row>
                <ion-icon name="home-outline"></ion-icon>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Home</e-text>
              </l-row>
            </e-link>
          </e-list-item>
          <e-list-item>
            <e-link url="/page-1" variant={state.activeView === 'page1' ? 'navLinkActive' : 'navLink'}>
              <l-row>
                <ion-icon name="document-outline"></ion-icon>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Page 1</e-text>
              </l-row>
            </e-link>
          </e-list-item>
          <e-list-item>
            <e-link url="/page-2" variant={state.activeView === 'page2' ? 'navLinkActive' : 'navLink'}>
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
