import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "e-text",
  styleUrl: "e-text.css",
  shadow: true,
})
export class EText {
  @Prop() variant: string = "body";
  @Prop() theme: string = "default";
  @Prop() weight: string = "regular";

  private classes: string;

  componentWillLoad() {
    this.generateStyles();
  }

  generateStyles() {
    this.classes = `${this.variant} ${this.theme} ${this.weight}`;
  }

  render() {
    if (this.variant === "display") {
      return (
        <h1 class={this.classes}>
          <slot></slot>
        </h1>
      );
    } else if (this.variant === "heading") {
      return (
        <h2 class={this.classes}>
          <slot />
        </h2>
      );
    } else if (this.variant === "subHeading") {
      return (
        <h3 class={this.classes}>
          <slot />
        </h3>
      );
    } else {
      return (
        <p class={this.classes}>
          <slot />
        </p>
      );
    }
  }
}
