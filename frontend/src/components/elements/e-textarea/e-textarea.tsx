import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "e-textarea",
  styleUrl: "e-textarea.css",
  shadow: true,
})
export class ETextarea {
  textAreaEl!: HTMLTextAreaElement;

  @Prop() placeholder: string = "";

  componentDidLoad() {
    setTimeout(() => {
      this.textAreaEl.focus();
    }, 1000);
  }

  render() {
    return (
      <Host>
        <textarea
          placeholder={this.placeholder}
          ref={(el) => (this.textAreaEl = el as HTMLTextAreaElement)}
        ></textarea>
      </Host>
    );
  }
}
