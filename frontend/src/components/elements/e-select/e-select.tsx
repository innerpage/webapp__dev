import { Component, Prop, Event, State, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "e-select",
  styleUrl: "e-select.css",
  shadow: true,
})
export class ESelect {
  @Event({
    eventName: "selectChangeEvent",
    bubbles: true,
  })
  selectChangeEventEmitter: EventEmitter;

  @Prop() options: string;
  @Prop() name: string;
  @Prop() index: number = 0;

  @State() parsedOptions: any;

  componentWillLoad() {
    this.parsedOptions = JSON.parse(this.options);
  }

  componentDidLoad() {
    this.selectChangeEventEmitter.emit({
      name: this.name,
      value: this.parsedOptions[this.index].value.trim(),
    });
  }

  handleSelectChange(e) {
    this.selectChangeEventEmitter.emit({
      name: this.name,
      value: e.target.value.trim(),
    });
  }

  render() {
    return (
      <select onChange={(e) => this.handleSelectChange(e)}>
        {this.parsedOptions.map((option, index) => (
          <option
            value={option.value}
            selected={index === this.index ? true : false}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}
