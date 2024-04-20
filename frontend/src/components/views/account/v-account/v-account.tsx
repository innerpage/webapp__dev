import { Component, Host, State, Listen, h } from '@stencil/core';
import { accountUpdatePayloadInterface } from './interfaces';
import { generateAccountUpdatePayload, validateAccountUpdatePayload, accountUpdateApiCall } from './helpers';
import { state } from '../../../../global/script';

@Component({
  tag: 'v-account',
  styleUrl: 'v-account.css',
  shadow: true,
})
export class VAccount {
  @Listen('saveEdit') saveEditListener(e) {
    this.saveEdit(e.detail.name, e.detail.value);
  }

  @State() isEditSaved: boolean = false;

  componentWillLoad() {
    state.activeView = 'account';
  }

  async saveEdit(name: string, value: string) {
    let accountUpdatePayload: accountUpdatePayloadInterface = generateAccountUpdatePayload(name, value);
    let { isValid, validationMessage } = validateAccountUpdatePayload(accountUpdatePayload);

    if (!isValid) {
      return alert(validationMessage);
    }

    this.isEditSaved = false;

    let { success, message, payload } = await accountUpdateApiCall(accountUpdatePayload);

    this.isEditSaved = true;

    if (!success) {
      return alert(message);
    }

    return alert(payload.message);
  }

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <p-sidebar></p-sidebar>
          <c-main>
            <e-text variant="heading">Account</e-text>
            <l-spacer value={1}></l-spacer>
            <c-card>
              <e-text variant="footnote">NAME</e-text>
              <l-spacer value={0.5}></l-spacer>
              <p-editable-text type="text" value={state.accountName} name="name" isEdited={this.isEditSaved}></p-editable-text>
              <l-spacer value={1}></l-spacer>
              <l-seperator></l-seperator>
              <l-spacer value={1}></l-spacer>
              <e-text variant="footnote">EMAIL</e-text>
              <l-spacer value={0.5}></l-spacer>
              <p-editable-text type="link" value={`${state.accountEmail}`} name="email" isEdited={this.isEditSaved}></p-editable-text>
              <l-spacer value={1}></l-spacer>
              <l-seperator></l-seperator>
              <l-spacer value={1}></l-spacer>
              <e-text variant="footnote">PASSWORD</e-text>
              <l-spacer value={0.5}></l-spacer>
              <p-editable-text type="password" value="********" name="password" isEdited={this.isEditSaved}></p-editable-text>
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
