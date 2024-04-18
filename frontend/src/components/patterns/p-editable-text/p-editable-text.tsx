import { Component, FunctionalComponent, Prop, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'p-editable-text',
  styleUrl: 'p-editable-text.css',
  shadow: true,
})
export class PEditableText {
  @Prop() type: string;
  @Prop() label: string;

  @State() isEditModeOn: boolean = false;
  @State() isSaveButtonDisabled: boolean = true;

  @Listen('buttonClick') async handle_ButtonClick(e) {
    if (e.detail.action === 'startEditing') {
      this.isEditModeOn = true;
    } else if (e.detail.action === 'cancelEditing') {
      this.isEditModeOn = false;
    }
  }

  EditModeOn: FunctionalComponent = () => [
    <e-input type="text" value={this.label}></e-input>,
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
      {this.type === 'text' && <e-text>{this.label}</e-text>}
      {this.type === 'link' && (
        <e-link variant="email" url={`mailto:${this.label}`}>
          {this.label}
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
