import { Component, Host, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-home',
  styleUrl: 'v-home.css',
  shadow: true,
})
export class VHome {
  componentWillLoad() {
    state.activeView = 'home';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">
            <l-row align="flex-end">
              <ph-house color="var(--color__grey--light)"></ph-house>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Home</e-text>
            </l-row>
          </e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
        </c-main>
      </Host>
    );
  }
}
