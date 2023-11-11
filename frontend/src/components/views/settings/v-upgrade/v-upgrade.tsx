import { Component, Host, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-upgrade',
  styleUrl: 'v-upgrade.css',
  shadow: true,
})
export class VUpgrade {
  componentWillLoad() {
    state.activeView = 'upgrade';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">Upgrade</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={2}></l-spacer>
          <p-tab-nav location="settings"></p-tab-nav>
          <l-spacer value={2}></l-spacer>
        </c-main>
      </Host>
    );
  }
}
