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
        <p-topbar></p-topbar>
        <c-content-area>
          <p-sidebar></p-sidebar>
          <c-main>
            {/* TEMPLATE CODE Starts */}
            <e-text variant="display">Overview</e-text>
            <div class="card card-full"></div>
            <l-spacer value={2}></l-spacer>
            <l-row justifyContent="space-between">
              <div class="card card-quarter"></div>
              <div class="card card-quarter"></div>
              <div class="card card-quarter"></div>
              <div class="card card-quarter"></div>
            </l-row>
            {/* TEMPLATE CODE Ends */}
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
