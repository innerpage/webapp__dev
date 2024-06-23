import { Component, Prop, State, h } from "@stencil/core";
import { RouterHistory, injectHistory } from "@stencil/router";
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
  @Prop() history: RouterHistory;

  handleNoteClick() {
    this.history.push(`/writer/${this.id}`, {});
  }

  render() {
    return (
      <div class="note__container" onClick={() => this.handleNoteClick()}>
        <e-text variant="footnote">{this.timestamp}</e-text>
        <l-spacer value={0.5}></l-spacer>
        <e-text>{this.preview}</e-text>
      </div>
    );
  }
}

injectHistory(PNote);
