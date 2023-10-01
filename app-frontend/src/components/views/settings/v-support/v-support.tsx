import { Component, Host, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-support',
  styleUrl: 'v-support.css',
  shadow: true,
})
export class VSupport {
  componentWillLoad() {
    state.activeView = 'billing';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">Support</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <l-row>
            <e-link url="/profile">Profile</e-link>
            <l-spacer value={1} variant="horizontal"></l-spacer>
            <e-link url="/billing">Billing</e-link>
            <l-spacer value={1} variant="horizontal"></l-spacer>
            <e-link url="/upgrade">Upgrade</e-link>
            <l-spacer value={1} variant="horizontal"></l-spacer>
            <e-link url="/support" variant="tab">
              Support
            </e-link>
          </l-row>
        </c-main>
      </Host>
    );
  }
}
