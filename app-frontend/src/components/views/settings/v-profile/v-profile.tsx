import { Component, Host, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-profile',
  styleUrl: 'v-profile.css',
  shadow: true,
})
export class VProfile {
  componentWillLoad() {
    state.activeView = 'profile';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">Profile</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <l-row>
            <e-link url="/profile" variant="tab">
              Profile
            </e-link>
            <l-spacer value={1} variant="horizontal"></l-spacer>
            <e-link url="/billing">Billing</e-link>
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
