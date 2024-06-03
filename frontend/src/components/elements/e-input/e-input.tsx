import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'e-input',
  styleUrl: 'e-input.css',
  shadow: true,
})
export class EInput {
  @Event({
    eventName: 'textInput',
    bubbles: true,
  })
  textInputEvent: EventEmitter;

  @Prop() label: string;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() placeholder: string = 'Your text';
  @Prop() value: string;
  @Prop() checked: boolean = false;

  private textboxStyleObject: LooseObject = {};

  componentWillLoad() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      this.generateTextboxStyleObject();
    }
  }

  generateTextboxStyleObject() {
    this.textboxStyleObject.padding = '0.75em';
    this.textboxStyleObject.border = '1px solid rgba(0, 0, 0, 0.1)';
    this.textboxStyleObject.borderRadius = '0.25em';
    this.textboxStyleObject.fontSize = '0.9em';
    this.textboxStyleObject.width = '100%';
    this.textboxStyleObject.boxSizing = 'border-box';
  }

  handleAlphaNumericInput(e) {
    this.textInputEvent.emit({
      name: this.name,
      value: e.target.value.trim(),
    });
  }

  render() {
    if (this.type === 'email' || this.type === 'number' || this.type === 'password' || this.type === 'text') {
      return <input style={this.textboxStyleObject} type={this.type} placeholder={this.placeholder} onInput={e => this.handleAlphaNumericInput(e)} value={this.value} />;
    } else if (this.type === 'radio') {
      return (
        <l-row>
          <input id={this.name} type={this.type} name={this.name} value={this.value} checked={this.checked} />
          <l-spacer variant="horizontal" value={0.15}></l-spacer>
          <label htmlFor={this.name}>{this.label}</label>
        </l-row>
      );
    }
  }
}
