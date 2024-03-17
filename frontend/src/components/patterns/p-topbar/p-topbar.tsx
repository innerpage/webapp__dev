import { Component, Host, h } from '@stencil/core';

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
          <l-row align="centre">
            <e-button>Log in</e-button>
            &nbsp;&nbsp;
            <e-button>Sign up</e-button>
          </l-row>
        </l-row>
      </Host>
    );
  }
}
