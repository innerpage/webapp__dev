import {
  Component,
  Host,
  State,
  Listen,
  FunctionalComponent,
  Prop,
  h,
} from "@stencil/core";
import { getAllNotesApi, createNoteApi } from "./helpers";
import { Store } from "../../../../global/script";
import { RouterHistory, injectHistory } from "@stencil/router";

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
  @Listen("buttonClick") async handleButtonClick(e) {
    if (e.detail.action === "writeNote") {
      this.writeNote();
    }
  }

  @Prop() history: RouterHistory;
  @State() notes: Note[] = [];
  @State() isInitiatingWriting: boolean = false;
  @State() isViewDataFetched: boolean = false;

  componentWillLoad() {
    Store.activeView = "home";
  }

  componentDidLoad() {
    if (Store.isSessionActive) {
      this.getAllNotes();
    }
    this.renderKoFiButton();
  }

  async writeNote() {
    let { success, message, payload } = await createNoteApi();
    if (!success) {
      return alert(message);
    }
    this.history.push(`/writer/${payload.id}`, {});
  }

  async getAllNotes() {
    let { success, message, payload } = await getAllNotesApi();
    if (!success) {
      return alert(message);
    }
    this.notes = payload;
    this.notes = [...this.notes];
    this.isViewDataFetched = true;
  }

  loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async renderKoFiButton() {
    const isKoFiScriptLoaded = await this.loadScript(
      "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
    );
    if (!isKoFiScriptLoaded) {
      return;
    }
    const _window = window as any;
    new _window.kofiWidgetOverlay.draw("innerpage", {
      type: "floating-chat",
      "floating-chat.donateButton.text": "Support Us",
      "floating-chat.donateButton.background-color": "#323842",
      "floating-chat.donateButton.text-color": "#fff",
    });
  }

  BlankLibrary: FunctionalComponent = () => (
    <div class="blank-library__container">
      <div>
        <ph-book size="3em"></ph-book>
        <e-text variant="heading">
          <strong>You have not journalled yet</strong>
        </e-text>
        <l-spacer value={1}></l-spacer>
        <e-button action="writeNote" active={this.isInitiatingWriting}>
          Start writing
        </e-button>
      </div>
    </div>
  );

  NoteLibrary: FunctionalComponent = () => [
    <l-row direction="row-reverse">
      <e-button action="writeNote" active={this.isInitiatingWriting}>
        Write
      </e-button>
    </l-row>,
    <l-spacer value={2}></l-spacer>,
    <p-gallery>
      {this.notes.map((note: any) => (
        <p-note
          noteId={note.id}
          preview={note.preview}
          timestamp={note.timestamp}
        ></p-note>
      ))}
    </p-gallery>,
  ];

  SessionView: FunctionalComponent = () =>
    this.notes.length > 0 ? (
      <this.NoteLibrary></this.NoteLibrary>
    ) : (
      <this.BlankLibrary></this.BlankLibrary>
    );

  NonSessionView: FunctionalComponent = () => (
    <e-textarea placeholder="Pour your thoughts.."></e-textarea>
  );

  Loading: FunctionalComponent = () => (
    <div class="blank-library__container">
      <div>
        <ph-book size="3em"></ph-book>
        <e-text variant="heading">
          <strong>Loading notes..</strong>
        </e-text>
      </div>
    </div>
  );

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <l-spacer value={1}></l-spacer>
          <c-main>
            <div class="wrapper">
              {Store.isSessionActive ? (
                this.isViewDataFetched ? (
                  <this.SessionView></this.SessionView>
                ) : (
                  <this.Loading></this.Loading>
                )
              ) : (
                <this.NonSessionView></this.NonSessionView>
              )}
            </div>
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}

injectHistory(VHome);
