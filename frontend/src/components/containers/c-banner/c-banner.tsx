import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "c-banner",
  styleUrl: "c-banner.css",
  shadow: true,
})
export class CBanner {
  @Prop() theme: string = "default";
  @Prop() position: string = "inline";

  private classes: string = "banner";

  componentWillLoad() {
    this.generateClasses();
  }

  generateClasses() {
    this.classes = this.classes + ` banner__theme--${this.theme}`;
    this.classes = this.classes + ` banner__position--${this.position}`;
  }

  render() {
    return (
      <div class={this.classes}>
        <slot></slot>
      </div>
    );
  }
}
