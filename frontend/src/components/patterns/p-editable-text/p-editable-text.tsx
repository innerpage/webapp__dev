import { Component, FunctionalComponent, Prop, State, Listen, h } from '@stencil/core';
import { updatePayloadInterface } from './interfaces';
import { generateUpdatePayload, validateUpdatePayload, updateApiCall } from './helpers';
import { state } from '../../../global/script';

@Component({
  tag: 'p-editable-text',
  styleUrl: 'p-editable-text.css',
  shadow: true,
})
export class PEditableText {
  @Listen('buttonClick') async handle_ButtonClick(e) {
    if (e.detail.action === 'startEditMode') {
      this.isEditModeOn = true;
    } else if (e.detail.action === 'cancelEditMode') {
      this.isEditModeOn = false;
    } else if (e.detail.action === 'saveUpdate') {
      this.saveUpdate();
    }
  }

  @Listen('textInput') handleTextInput(e) {
    if (e.detail.name === 'newValue') {
      this.newValue = e.detail.value;
    } else if (e.detail.name === 'newValueRepeat') {
      this.newValueRepeat = e.detail.value;
    }
    this.setSaveButtonState();
  }

  @Prop() type: string;
  @Prop() name: string;
  @Prop() value: string;

  @State() isEditModeOn: boolean = false;
  @State() isSaveButtonDisabled: boolean = true;
  @State() isSaveButtonActive: boolean = false;

  setSaveButtonState() {
    if (!this.newValue) {
      this.isSaveButtonDisabled = true;
      return;
    }

    if (this.name === 'password') {
      if (this.newValue != this.newValueRepeat) {
        this.isSaveButtonDisabled = true;
      } else {
        this.isSaveButtonDisabled = false;
      }
    } else {
      if (this.newValue != this.value) {
        this.isSaveButtonDisabled = false;
      } else {
        this.isSaveButtonDisabled = true;
      }
    }
  }

  async saveUpdate() {
    let updatePayload: updatePayloadInterface = generateUpdatePayload(this.name, this.newValue);
    let { isValid, validationMessage } = validateUpdatePayload(updatePayload);
    if (!isValid) {
      return alert(validationMessage);
    }
    this.isSaveButtonActive = true;
    let { success, message, payload } = await updateApiCall(updatePayload);
    this.isSaveButtonActive = false;
    this.isEditModeOn = false;
    if (!success) {
      return alert(message);
    }

    if (this.name === 'name') {
      state.accountName = this.newValue;
    } else if (this.name === 'email') {
      state.accountEmail = this.newValue;
      state.isEmailVerified = false;
    }

    return alert(payload.message);
  }

  private newValue: string;
  private newValueRepeat: string;

  EditModeOn: FunctionalComponent = () => [
    this.name === 'password' ? (
      <div>
        <e-input type="password" name="newValue" placeholder="New password"></e-input>
        <l-spacer value={0.5}></l-spacer>
        <e-input type="password" name="newValueRepeat" placeholder="Re-type new password"></e-input>
      </div>
    ) : (
      <e-input type="text" name="newValue" value={this.value}></e-input>
    ),
    <l-spacer value={1}></l-spacer>,
    <l-row>
      <div></div>
      <div>
        <e-button variant="light" action="cancelEditMode">
          Cancel
        </e-button>
        &nbsp;&nbsp;
        <e-button disabled={this.isSaveButtonDisabled} action="saveUpdate" active={this.isSaveButtonActive}>
          Save
        </e-button>
      </div>
    </l-row>,
  ];

  EditModeOff: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      {this.type === 'text' && <e-text>{this.value}</e-text>}
      {this.type === 'password' && <e-text>{this.value}</e-text>}
      {this.type === 'link' && (
        <e-link variant="email" url={`mailto:${this.value}`}>
          {this.value}
        </e-link>
      )}
      <e-button variant="light" action="startEditMode">
        Edit
      </e-button>
    </l-row>
  );

  render() {
    if (this.isEditModeOn) {
      return <this.EditModeOn></this.EditModeOn>;
    } else {
      return <this.EditModeOff></this.EditModeOff>;
    }
  }
}
