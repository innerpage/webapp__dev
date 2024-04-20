import { Component, Event, EventEmitter, FunctionalComponent, Prop, State, Listen, Watch, h } from '@stencil/core';

@Component({
  tag: 'p-editable-text',
  styleUrl: 'p-editable-text.css',
  shadow: true,
})
export class PEditableText {
  @Event({
    eventName: 'saveEdit',
    bubbles: true,
  })
  saveEditEvent: EventEmitter;

  @Listen('buttonClick') async handle_ButtonClick(e) {
    if (e.detail.action === 'startEditMode') {
      this.isEditModeOn = true;
    } else if (e.detail.action === 'cancelEditMode') {
      this.isEditModeOn = false;
    } else if (e.detail.action === 'saveEdit') {
      this.saveEditEvent.emit({
        name: this.name,
        value: this.newValue,
      });
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
  @Prop() isEdited: boolean = false;

  @State() isEditModeOn: boolean = false;
  @State() isSaveButtonDisabled: boolean = true;
  @State() isSaveButtonActive: boolean = false;

  @Watch('isEdited') isEditedWatched(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      if (this.isSaveButtonActive) {
        this.isSaveButtonActive = false;
      }
    }
  }

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
        <e-button disabled={this.isSaveButtonDisabled} action="saveEdit" active={this.isSaveButtonActive}>
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
