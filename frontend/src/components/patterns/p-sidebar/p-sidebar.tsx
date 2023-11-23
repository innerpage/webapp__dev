import { Component, FunctionalComponent, Prop, Host, h } from '@stencil/core';
import '@phosphor-icons/webcomponents';
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
      <div class="logo"></div>
      <l-spacer value={2}></l-spacer>
      <e-list>
        <e-list-item>
          <e-link url="/home" variant={state.activeView === 'home' ? 'navLinkActive' : 'navLink'}>
            <l-row>
              <ph-house></ph-house>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Home</e-text>
            </l-row>
          </e-link>
        </e-list-item>
        <e-list-item>
          <e-link url="/page-1" variant={state.activeView === 'page1' ? 'navLinkActive' : 'navLink'}>
            <l-row>
              <ph-file></ph-file>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Page 1</e-text>
            </l-row>
          </e-link>
        </e-list-item>
        <e-list-item>
          <e-link url="/page-2" variant={state.activeView === 'page2' ? 'navLinkActive' : 'navLink'}>
            <l-row>
              <ph-file></ph-file>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Page 2</e-text>
            </l-row>
          </e-link>
        </e-list-item>
      </e-list>
      <l-spacer value={1}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1}></l-spacer>
      <e-list>
        <e-list-item>
          <e-link url="/profile" variant={state.activeView === 'profile' ? 'navLinkActive' : 'navLink'}>
            <l-row>
              <ph-user></ph-user>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Profile</e-text>
            </l-row>
          </e-link>
        </e-list-item>
        <e-list-item>
          <e-link url="/billing" variant={state.activeView === 'billing' ? 'navLinkActive' : 'navLink'}>
            <l-row>
              <ph-credit-card></ph-credit-card>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Billing</e-text>
            </l-row>
          </e-link>
        </e-list-item>
        <e-list-item>
          <e-link url="/support" variant={state.activeView === 'support' ? 'navLinkActive' : 'navLink'}>
            <l-row>
              <ph-phone></ph-phone>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Support</e-text>
            </l-row>
          </e-link>
        </e-list-item>
      </e-list>
      {/* <p-user-control></p-user-control> */}
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
