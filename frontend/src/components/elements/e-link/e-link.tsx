import { Component, Prop, State, Watch, h } from "@stencil/core";

@Component({
  tag: "e-link",
  styleUrl: "e-link.css",
  shadow: true,
})
export class ELink {
  @Prop() variant: string = "default";
  @Prop() theme: string = "default";
  @Prop() url: string = "";
  @Prop() active: boolean = false;

  @State() isActive: boolean = false;

  @Watch("active") activePropWatcher(newValue: string, oldValue: string) {
    if (newValue != oldValue) {
      this.generateClasses();
    }
  }

  @State() classes: string = "";

  componentWillLoad() {
    this.generateClasses();
  }

  generateClasses() {
    if (this.active) {
      this.classes = `link__${this.variant}--${this.theme}-active`;
    } else {
      this.classes = `link__${this.variant}--${this.theme}`;
    }
  }

  render() {
    if (this.variant === "email" || this.variant === "externalLink") {
      return (
        <div class={this.classes}>
          <a
            href={this.url}
            target={this.variant === "externalLink" ? "_blank" : "_self"}
          >
            <slot />
          </a>
        </div>
      );
    } else {
      return (
        <div class={this.classes}>
          <stencil-route-link url={this.url}>
            <slot />
          </stencil-route-link>
        </div>
      );
    }
  }
}
