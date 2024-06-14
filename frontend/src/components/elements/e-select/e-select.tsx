import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "e-select",
  styleUrl: "e-select.css",
  shadow: true,
})
export class ESelect {
  @Event({
    eventName: "selectInputEvent",
    bubbles: true,
  })
  selectInputEventEmitter: EventEmitter;

  @Prop() options: any;
  @Prop() name: string;

  private parsedOptions: any;

  componentWillLoad() {
    this.parseOptionsString();
    this.init();
  }

  parseOptionsString() {
    this.parsedOptions = JSON.parse(this.options);
  }

  init() {
    this.selectInputEventEmitter.emit({
      name: this.name,
      value: this.parsedOptions[0].id.trim(),
    });
  }

  handleInputChange(e) {
    this.selectInputEventEmitter.emit({
      name: this.name,
      value: e.target.value.trim(),
    });
  }

  render() {
    return (
      <select onChange={(e) => this.handleInputChange(e)}>
        {this.parsedOptions.map((option) => (
          <option value={option.id}>{option.title}</option>
        ))}
      </select>
    );
  }
}
