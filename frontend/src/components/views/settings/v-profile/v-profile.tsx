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
          <e-text variant="heading">
            <l-row>
              <ph-user color="var(--color__grey--light)" align="flex-end"></ph-user>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text>Profile</e-text>
            </l-row>
          </e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={2}></l-spacer>
          <c-card>
            <e-text variant="footnote">NAME</e-text>
            <p-editable-text type="text" label={`${state.account_FirstName} ${state.account_LastName}`}></p-editable-text>
            <l-spacer value={1}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={1}></l-spacer>
            <e-text variant="footnote">EMAIL</e-text>
            <p-editable-text type="link" label={`${state.account_Email}`}></p-editable-text>
            <l-spacer value={1}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={1}></l-spacer>
            <e-text variant="footnote">PASSWORD</e-text>
            <p-editable-text type="text" label="********"></p-editable-text>
          </c-card>
          <l-spacer value={2}></l-spacer>
          <e-button variant="ghost" action="logout">
            <l-row>
              <ph-sign-out color="var(--color__blue--regular)"></ph-sign-out>
              &nbsp;Logout
            </l-row>
          </e-button>
          <l-spacer value={2}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>
          <e-link url="/delete-account" theme="danger">
            <l-row>
              <ph-trash weight={state.activeView === 'page1' ? 'fill' : 'regular'}></ph-trash>
              <l-spacer value={0.25} variant="horizontal"></l-spacer>
              <e-text> Delete your account and data</e-text>
            </l-row>
          </e-link>
        </c-main>
      </Host>
    );
  }
}
