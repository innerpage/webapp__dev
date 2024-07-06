import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";

@Component({
  tag: "e-input",
  styleUrl: "e-input.css",
  shadow: true,
})
export class EInput {
  @Event({
    eventName: "textInput",
    bubbles: true,
  })
  textInputEvent: EventEmitter;

  @Prop() label: string;
  @Prop() type: string;
  @Prop() name: string;
  @Prop() placeholder: string = "Your text";
  @Prop() value: string;
  @Prop() checked: boolean = false;

  handleInput(e) {
    this.textInputEvent.emit({
      name: this.name,
      value: e.target.value.trim(),
    });
  }

  render() {
    if (
      this.type === "number" ||
      this.type === "password" ||
      this.type === "text" ||
      this.type === "date"
    ) {
      return (
        <input
          type={this.type}
          name={this.name}
          placeholder={this.placeholder}
          onInput={(e) => this.handleInput(e)}
          value={this.value}
        />
      );
    } else if (this.type === "radio") {
      return (
        <l-row>
          <input
            id={this.name}
            type={this.type}
            name={this.name}
            value={this.value}
            checked={this.checked}
          />
          <l-spacer variant="horizontal" value={0.15}></l-spacer>
          <label htmlFor={this.name}>{this.label}</label>
        </l-row>
      );
    }
  }
}
