import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "l-seperator",
  styleUrl: "l-seperator.css",
  shadow: true,
})
export class LSeperator {
  @Prop() variant: string = "default";

  render() {
    return <div class="seperator--default"></div>;
  }
}
