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
        <p-topbar></p-topbar>
        <c-content-area>
          <p-sidebar></p-sidebar>
          <c-main>
            <e-text variant="heading">
              <l-row align="flex-end">
                <ph-credit-card color="var(--color__grey--light)"></ph-credit-card>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Billing</e-text>
              </l-row>
            </e-text>
            <l-spacer value={1}></l-spacer>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
