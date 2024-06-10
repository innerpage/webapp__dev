import { Component, Host, Prop, h } from "@stencil/core";

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: "l-row",
  styleUrl: "l-row.css",
  shadow: true,
})
export class LRow {
  @Prop() variant: string = "";
  @Prop() justifyContent: string = "space-between";
  @Prop() align: string = "center";
  @Prop() direction: string = "row";

  private styleObj: LooseObject = {};

  componentWillLoad() {
    this.generateStyleObject();
  }

  generateStyleObject() {
    this.styleObj.display = "flex";
    this.styleObj.alignItems = this.align;
    this.styleObj.justifyContent = this.justifyContent;
    this.styleObj.flexDirection = this.direction;
  }

  render() {
    return (
      <Host style={this.styleObj}>
        <slot></slot>
      </Host>
    );
  }
}
