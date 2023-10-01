import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-page-1',
  styleUrl: 'v-page-1.css',
  shadow: true,
})
export class VPage1 {
  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">Page 1</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
        </c-main>
      </Host>
    );
  }
}
