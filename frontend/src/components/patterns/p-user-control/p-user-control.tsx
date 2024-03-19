import { Component, Host, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-user-control',
  styleUrl: 'p-user-control.css',
  shadow: true,
})
export class PUserControl {
  render() {
    return (
      <Host>
        <e-text>{state.accountName}</e-text>
      </Host>
    );
  }
}
