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
    this.getAllNotes();
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

  BlankLibrary: FunctionalComponent = () => (
    <div class="blank-library__container">
      <div>
        <e-text variant="display">You have not journalled yet</e-text>
        <l-spacer value={2}></l-spacer>
        <e-button action="writeNote" active={this.isInitiatingWriting}>
          Start writing
        </e-button>
      </div>
    </div>
  );

  NoteLibrary: FunctionalComponent = () => (
    <div class="note-library__container">
      <l-spacer value={2}></l-spacer>
      {this.notes.map((note: any) => (
        <p-note
          noteId={note.id}
          preview={note.preview}
          timestamp={note.timestamp}
        ></p-note>
      ))}
      <div class="note-library__button">
        <e-button action="writeNote" active={this.isInitiatingWriting}>
          <l-row>
            <ph-pen-nib></ph-pen-nib>&nbsp;Write
          </l-row>
        </e-button>
      </div>
    </div>
  );

  SessionView: FunctionalComponent = () =>
    this.notes.length > 0 ? (
      <this.NoteLibrary></this.NoteLibrary>
    ) : (
      <this.BlankLibrary></this.BlankLibrary>
    );

  Loading: FunctionalComponent = () => (
    <div class="blank-library__container">
      <e-text variant="display">Loading notes..</e-text>
    </div>
  );

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        {this.isViewDataFetched ? (
          <this.SessionView></this.SessionView>
        ) : (
          <this.Loading></this.Loading>
        )}
      </Host>
    );
  }
}

injectHistory(VHome);
