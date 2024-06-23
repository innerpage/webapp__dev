import {
  Component,
  Event,
  EventEmitter,
  Prop,
  Host,
  h,
  Watch,
} from "@stencil/core";

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

  @Watch("content") watchName(newVal: string, oldVal: string) {
    if (newVal != oldVal) {
      this.setTextAreaValue();
    }
  }

  componentDidLoad() {
    if (this.content.length > 0) {
      this.setTextAreaValue();
    } else {
      setTimeout(() => {
        this.textAreaEl.focus();
      }, 1000);
    }
  }

  setTextAreaValue() {
    this.textAreaEl.value = this.content;
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
