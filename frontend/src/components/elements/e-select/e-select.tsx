import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'e-select',
  styleUrl: 'e-select.css',
  shadow: true,
})
export class ESelect {
  @Event({
    eventName: 'selectInputEvent',
    bubbles: true,
  })
  selectInputEvent: EventEmitter;

  @Prop() options: any;
  @Prop() name: string;

  private styleClasses: string = 'default';
  private parsedOptions: any;

  componentWillLoad() {
    this.generateStyles();
    this.parseOptionsString();
    this.init();
  }

  generateStyles() {}

  parseOptionsString() {
    this.parsedOptions = JSON.parse(this.options);
  }

  init() {
    this.selectInputEvent.emit({
      name: this.name,
      value: this.parsedOptions[0].id.trim(),
    });
  }

  handleSelectInput(e) {
    this.selectInputEvent.emit({
      name: this.name,
      value: e.target.value.trim(),
    });
  }

  render() {
    return (
      <select class={this.styleClasses} onChange={e => this.handleSelectInput(e)}>
        {this.parsedOptions.map(option => (
          <option value={option.id}>{option.title}</option>
        ))}
      </select>
    );
  }
}
