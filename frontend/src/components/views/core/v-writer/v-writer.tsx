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
  generateUpdateNotePayload,
  validateUpdateNotePayload,
} from "./helpers/";
import { updateNotePayloadInterface } from "./interfaces";
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

  @Listen("textAreaInput") handleTextAreaInput(e) {
    this.noteContent = e.detail.value;
    if (this.noteContent.length > 0) {
      this.saveStatus = "";
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.saveNote();
    }, 2000);
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

    this.fetchedContent = payload.content;
  }

  async saveNote() {
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
          {this.saveStatus === "init" && <e-text>Autosave enabled</e-text>}
          {this.saveStatus === "saving" && (
            <e-text>
              <em>Saving..</em>
            </e-text>
          )}
          <e-button variant="light" action="deleteNote">
            <ph-trash
              color="var(--color__white--brighter)"
              size="1em"
            ></ph-trash>
          </e-button>
        </l-row>
        <e-textarea
          placeholder="Pour your thoughts.."
          content={this.fetchedContent}
        ></e-textarea>
      </Host>
    );
  }
}
