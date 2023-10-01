import { Component, Host, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-billing',
  styleUrl: 'v-billing.css',
  shadow: true,
})
export class VBilling {
  componentWillLoad() {
    state.activeView = 'billing';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">Billing</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <l-row>
            <e-link url="/profile">Profile</e-link>
            <l-spacer value={1} variant="horizontal"></l-spacer>
            <e-link url="/billing" variant="tab">
              Billing
            </e-link>
            <l-spacer value={1} variant="horizontal"></l-spacer>
            <e-link url="/upgrade">Upgrade</e-link>
            <l-spacer value={1} variant="horizontal"></l-spacer>
            <e-link url="/support">Support</e-link>
          </l-row>
        </c-main>
      </Host>
    );
  }
}
