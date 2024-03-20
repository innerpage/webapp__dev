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
        <l-row justifyContent="space-between" align="top">
          <div class="logo"></div>
          {state.isSessionActive ? (
            <p-user-control></p-user-control>
          ) : (
            <l-row align="centre">
              <e-button variant="ghost" action="login">
                Log in
              </e-button>
              &nbsp;&nbsp;
              <e-button action="signup">Sign up</e-button>
            </l-row>
          )}
        </l-row>
      </Host>
    );
  }
}
