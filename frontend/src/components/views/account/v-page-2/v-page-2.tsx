import { Component, Host, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-page-2',
  styleUrl: 'v-page-2.css',
  shadow: true,
})
export class VPage2 {
  componentWillLoad() {
    state.activeView = 'page2';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">Page 2</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
        </c-main>
      </Host>
    );
  }
}
