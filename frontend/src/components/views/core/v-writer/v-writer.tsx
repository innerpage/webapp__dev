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
        <l-row>
          <e-link url="/">
            <l-row>
              <ph-arrow-left></ph-arrow-left>
              &nbsp;&nbsp;
              <e-text>Back</e-text>
            </l-row>
          </e-link>
          {this.renderSaveStatus()}
          <e-button variant="light" action="deleteNote">
            <ph-trash
              color="var(--color__white--brighter)"
              size="1em"
            ></ph-trash>
          </e-button>
        </l-row>
        <e-textarea placeholder="Pour your thoughts.."></e-textarea>
      </Host>
    );
  }
}
