import { Component, Event, EventEmitter, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "e-textarea",
  styleUrl: "e-textarea.css",
  shadow: true,
})
export class ETextarea {
  textAreaEl!: HTMLTextAreaElement;

  @Event({
    eventName: "textAreaInput",
    bubbles: true,
  })
  textAreaInputEvent: EventEmitter;

  @Prop() placeholder: string = "";
  @Prop() content: string = "";
  @Prop() stuff: string = "";

  componentDidLoad() {
    if (this.content.length > 0) {
      this.textAreaEl.value = this.content;
    } else {
      setTimeout(() => {
        this.textAreaEl.focus();
      }, 1000);
    }
  }

  handleTextAreaInput(e) {
    this.textAreaInputEvent.emit({
      value: e.target.value.trim(),
    });
  }

  render() {
    return (
      <Host>
        <textarea
          onInput={(e) => this.handleTextAreaInput(e)}
          placeholder={this.placeholder}
          ref={(el) => (this.textAreaEl = el as HTMLTextAreaElement)}
        ></textarea>
      </Host>
    );
  }
}
