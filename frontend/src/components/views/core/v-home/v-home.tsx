import { Component, Host, State, FunctionalComponent, h } from "@stencil/core";
import { Store } from "../../../../global/script";

interface Note {
  id: string;
  preview: string;
}

@Component({
  tag: "v-home",
  styleUrl: "v-home.css",
  shadow: true,
})
export class VHome {
  componentWillLoad() {
    Store.activeView = "home";
  }

  @State() notes: Note[] = [];

  componentDidLoad() {}

  BlankLibrary: FunctionalComponent = () => (
    <div class="blank-library__container">
      <div>
        <ph-island size="3em"></ph-island>
        <e-text variant="heading">
          <strong>You're yet to begin journalling</strong>
        </e-text>
        <l-spacer value={1}></l-spacer>
        <e-button action="goToWriter">Start writing</e-button>
      </div>
    </div>
  );

  NoteLibrary: FunctionalComponent = () => <div></div>;

  SessionView: FunctionalComponent = () =>
    this.notes.length > 0 ? (
      <div></div>
    ) : (
      <this.BlankLibrary></this.BlankLibrary>
    );

  NonSessionView: FunctionalComponent = () => (
    <e-textarea placeholder="Pour your thoughts.."></e-textarea>
  );

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <c-main>
            {Store.isSessionActive ? (
              <this.SessionView></this.SessionView>
            ) : (
              <this.NonSessionView></this.NonSessionView>
            )}
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
