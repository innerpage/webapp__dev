import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'e-select',
  styleUrl: 'e-select.css',
  shadow: true,
})
export class ESelect {
  @Event({
    eventName: 'event_selectInput',
    bubbles: true,
  })
  event_SelectInput: EventEmitter;

  @Prop() options: any;
  @Prop() name: string;

  private styleClasses: string = 'default';
  private parsed_Options: any;

  componentWillLoad() {
    this.generate_StyleClasses();
    this.parse_OptionsString();
    this.init();
  }

  generate_StyleClasses() {}

  parse_OptionsString() {
    this.parsed_Options = JSON.parse(this.options);
  }

  init() {
    this.event_SelectInput.emit({
      name: this.name,
      value: this.parsed_Options[0].id.trim(),
    });
  }

  handle_SelectInput(e) {
    this.event_SelectInput.emit({
      name: this.name,
      value: e.target.value.trim(),
    });
  }

  render() {
    return (
      <select class={this.styleClasses} onChange={e => this.handle_SelectInput(e)}>
        {this.parsed_Options.map(option => (
          <option value={option.id}>{option.title}</option>
        ))}
      </select>
    );
  }
}
