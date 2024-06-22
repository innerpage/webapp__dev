import { Component, State, Host, h } from "@stencil/core";

@Component({
  tag: "v-writer",
  styleUrl: "v-writer.css",
  shadow: true,
})
export class VWriter {
  @State() saveStatus: string = "init";

  renderSaveStatus() {
    switch (this.saveStatus) {
      case "init":
        return <e-text>Autosave enabled</e-text>;
      case "saving":
        return (
          <e-text>
            <em>Saving..</em>
          </e-text>
        );
      default:
        return "";
    }
  }

  render() {
    return (
      <Host>
        <header>
          <e-link url="/">
            <l-row>
              <ph-arrow-left></ph-arrow-left>
              &nbsp;&nbsp;
              <e-text>Back</e-text>
            </l-row>
          </e-link>
          {this.renderSaveStatus()}
        </header>
        <e-textarea placeholder="Pour your thoughts.."></e-textarea>
      </Host>
    );
  }
}
