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
            <div class="box-full"></div>
            {/* TEMPLATE CODE Ends */}
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
