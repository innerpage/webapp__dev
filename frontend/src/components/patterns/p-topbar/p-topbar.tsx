import { Component, Host, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-topbar',
  styleUrl: 'p-topbar.css',
  shadow: true,
})
export class PTopbar {
  render() {
    return (
      <Host>
        <l-row justifyContent="space-between">
          <div class="logo"></div>
          {state.isSessionActive ? (
            <p-user-control></p-user-control>
          ) : (
            <l-row align="centre">
              <e-button variant="ghost">Log in</e-button>
              &nbsp;&nbsp;
              <e-button>Sign up</e-button>
            </l-row>
          )}
        </l-row>
      </Host>
    );
  }
}
