import { Component, Host, Listen, h } from '@stencil/core';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-profile',
  styleUrl: 'v-profile.css',
  shadow: true,
})
export class VProfile {
  @Listen('saveEdit') updateTextListener(e) {
    console.log(`${e.detail.name}: ${e.detail.value}`);
  }

  componentWillLoad() {
    state.activeView = 'profile';
  }

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <p-sidebar></p-sidebar>
          <c-main>
            <e-text variant="heading">Profile</e-text>
            <l-spacer value={1}></l-spacer>
            <c-card>
              <e-text variant="footnote">NAME</e-text>
              <l-spacer value={0.5}></l-spacer>
              <p-editable-text type="text" value={state.accountName} name="name"></p-editable-text>
              <l-spacer value={1}></l-spacer>
              <l-seperator></l-seperator>
              <l-spacer value={1}></l-spacer>
              <e-text variant="footnote">EMAIL</e-text>
              <l-spacer value={0.5}></l-spacer>
              <p-editable-text type="link" value={`${state.accountEmail}`} name="email"></p-editable-text>
              <l-spacer value={1}></l-spacer>
              <l-seperator></l-seperator>
              <l-spacer value={1}></l-spacer>
              <e-text variant="footnote">PASSWORD</e-text>
              <l-spacer value={0.5}></l-spacer>
              <p-editable-text type="password" value="********" name="password"></p-editable-text>
            </c-card>
            <l-spacer value={1}></l-spacer>
            <e-link url="/delete-account" theme="danger">
              <l-row>
                <ph-trash color="var(--color__red--regular)" weight={state.activeView === 'page1' ? 'fill' : 'regular'}></ph-trash>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text> Delete account and data</e-text>
              </l-row>
            </e-link>
          </c-main>{' '}
        </c-content-area>
      </Host>
    );
  }
}
