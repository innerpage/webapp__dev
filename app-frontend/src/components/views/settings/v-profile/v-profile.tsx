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
          <l-spacer value={2}></l-spacer>
          <p-tab-nav location="settings"></p-tab-nav>
          <l-spacer value={2}></l-spacer>
          <c-card>
            <e-text variant="footnote">NAME</e-text>
            <l-row justifyContent="space-between">
              <e-text>
                {state.account_FirstName} {state.account_LastName}
              </e-text>
              <e-button variant="light">Edit</e-button>
            </l-row>
            <l-spacer value={1}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={1}></l-spacer>
            <e-text variant="footnote">EMAIL</e-text>
            <l-row justifyContent="space-between">
              <e-link variant="email" url={`mailto:${state.account_Email}`}>
                {state.account_Email}
              </e-link>
              <e-button variant="light">Edit</e-button>
            </l-row>
            <l-spacer value={1}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={1}></l-spacer>
            <e-text variant="footnote">PASSWORD</e-text>
            <l-row justifyContent="space-between">
              <e-text>********</e-text>
              <e-button variant="light">Edit</e-button>
            </l-row>
          </c-card>
          <l-spacer value={2}></l-spacer>
          <e-button variant="ghost" action="logout">
            <l-row>
              <ion-icon name="log-out-outline"></ion-icon>&nbsp;Logout
            </l-row>
          </e-button>
          <l-spacer value={2}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <e-text variant="footnote">
            <e-link url="/delete-account" theme="danger">
              Click here to permanent delete your account and data
            </e-link>
          </e-text>
        </c-main>
      </Host>
    );
  }
}
