import { Component, FunctionalComponent, Prop, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'p-editable-text',
  styleUrl: 'p-editable-text.css',
  shadow: true,
})
export class PEditableText {
  @Prop() type: string;
  @Prop() value: string;
  @Prop() name: string;

  @State() isEditModeOn: boolean = false;
  @State() isSaveButtonDisabled: boolean = true;

  @Listen('buttonClick') async handle_ButtonClick(e) {
    if (e.detail.action === 'startEditing') {
      this.isEditModeOn = true;
    } else if (e.detail.action === 'cancelEditing') {
      this.isEditModeOn = false;
    }
  }

  @Listen('textInput') handleTextInput(e) {
    if (e.detail.name === 'newValue') {
      this.newValue = e.detail.value;
      if (this.newValue != this.value) {
      }
    }
  }

  private newValue: string;

  EditModeOn: FunctionalComponent = () => [
    <e-input type="text" name="newValue" value={this.value}></e-input>,
    <l-spacer value={1}></l-spacer>,
    <l-row>
      <div></div>
      <div>
        <e-button variant="light" action="cancelEditing">
          Cancel
        </e-button>
        &nbsp;&nbsp;
        <e-button disabled={this.isSaveButtonDisabled}>Save</e-button>
      </div>
    </l-row>,
  ];

  EditModeOff: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      {this.type === 'text' && <e-text>{this.value}</e-text>}
      {this.type === 'link' && (
        <e-link variant="email" url={`mailto:${this.value}`}>
          {this.value}
        </e-link>
      )}
      <e-button variant="light" action="startEditing">
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
