import {
  Component,
  Event,
  EventEmitter,
  Listen,
  State,
  Prop,
  Host,
  h,
} from "@stencil/core";
import {
  getNoteApi,
  updateNoteApi,
  deleteNoteApi,
  generateUpdateNotePayload,
  generateDeleteNotePayload,
  validateUpdateNotePayload,
  validateDeleteNotePayload,
} from "./helpers/";
import {
  updateNotePayloadInterface,
  deleteNotePayloadInterface,
} from "./interfaces";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "v-writer",
  styleUrl: "v-writer.css",
  shadow: true,
})
export class VWriter {
  @Event({
    eventName: "routeToEvent",
    bubbles: true,
  })
  routeToEventEmitter: EventEmitter;

  @Prop() match: MatchResults;

  @State() saveStatus: string = "init";
  @State() fetchedContent: string = "";
  @State() timestamp: string = "";

  @Listen("textAreaInput") handleTextAreaInput(e) {
    this.noteContent = e.detail.value;
    if (this.noteContent.length > 0) {
      this.saveStatus = "";
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.updateNote();
    }, 1000);
  }

  @Listen("buttonClick") async handleButtonClick(e) {
    if (e.detail.action === "deleteNote") {
      this.deleteNote();
    }
  }

  private noteId: string;
  private noteContent: string;
  private timer: any;

  componentWillLoad() {
    if (!this.match.params.noteId) {
      return this.routeToEventEmitter.emit({
        type: "push",
        route: "/",
        data: {},
      });
    }
    this.noteId = this.match.params.noteId.trim();
  }

  componentDidLoad() {
    this.getNote();
  }

  async getNote() {
    let { success, message, payload } = await getNoteApi(this.noteId);
    if (!success) {
      return alert(message);
    }
    if (payload.content.length === 0) {
      return;
    }
    this.timestamp = payload.timestamp;
    this.fetchedContent = payload.content;
  }

  async updateNote() {
    this.saveStatus = "saving";
    let updateNotePayload: updateNotePayloadInterface =
      generateUpdateNotePayload(this.noteId, this.noteContent);
    let { isValid, validationMessage } =
      validateUpdateNotePayload(updateNotePayload);
    if (!isValid) {
      return alert(validationMessage);
    }
    let { success, message } = await updateNoteApi(updateNotePayload);
    this.saveStatus = "";
    if (!success) {
      return alert(message);
    }
  }

  async deleteNote() {
    const consent: any = confirm("⚠️ Do you really want to delete this note?");
    if (!consent) {
      return;
    }

    let deleteNotePayload: deleteNotePayloadInterface =
      generateDeleteNotePayload(this.noteId);

    let { isValid, validationMessage } =
      validateDeleteNotePayload(deleteNotePayload);

    if (!isValid) {
      return alert(validationMessage);
    }

    let { success, message } = await deleteNoteApi(deleteNotePayload);
    if (!success) {
      return alert(message);
    }

    this.routeToEventEmitter.emit({
      type: "push",
      route: "/",
      data: {},
    });
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
          <div class="status__bubble">
            {this.saveStatus === "init" && <e-text>Autosave enabled</e-text>}
            {this.saveStatus === "saving" && (
              <e-text>
                <em>Saving..</em>
              </e-text>
            )}
          </div>
          <e-button variant="light" action="deleteNote">
            <ph-trash
              color="var(--color__white--brighter)"
              size="1em"
            ></ph-trash>
          </e-button>
        </l-row>
        <l-spacer value={4}></l-spacer>
        <c-main>
          <e-textarea
            placeholder="Pour your thoughts.."
            content={this.fetchedContent}
          ></e-textarea>
        </c-main>
      </Host>
    );
  }
}
