import { Component, Prop, h } from "@stencil/core";

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: "e-img",
  styleUrl: "e-img.css",
  shadow: true,
})
export class EImg {
  @Prop() variant: string = "default";
  @Prop() src: string = "";
  @Prop() width: string = "100%";

  private styleObj: LooseObject = {};

  componentWillLoad() {
    this.generateStyleObject();
  }

  generateStyleObject() {
    this.styleObj.width = this.width;
  }

  render() {
    return <img style={this.styleObj} src={this.src} width={this.width}></img>;
  }
}
