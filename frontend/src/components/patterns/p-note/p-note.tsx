import { Component, Prop, State, h } from "@stencil/core";
import "@phosphor-icons/webcomponents";

@Component({
  tag: "p-note",
  styleUrl: "p-note.css",
  shadow: true,
})
export class PNote {
  @State() isMenuOpen: boolean = false;

  @Prop() id: string;
  @Prop() preview: string;
  @Prop() timestamp: string;

  render() {
    return (
      <div class="note__container">
        <e-text variant="footnote">{this.timestamp}</e-text>
        <l-spacer value={1}></l-spacer>
        <e-text>{this.preview}</e-text>
      </div>
    );
  }
}
