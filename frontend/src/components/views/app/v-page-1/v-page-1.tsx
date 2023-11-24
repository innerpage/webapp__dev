import { Component, Host, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-page-1',
  styleUrl: 'v-page-1.css',
  shadow: true,
})
export class VPage1 {
  componentWillLoad() {
    state.activeView = 'page1';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">
            <l-row align="flex-end">
              <ph-file color="var(--color__grey--light)"></ph-file>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Page 1</e-text>
            </l-row>
          </e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
        </c-main>
      </Host>
    );
  }
}
