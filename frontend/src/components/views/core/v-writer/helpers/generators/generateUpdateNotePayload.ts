import { updateNotePayloadInterface } from "../../interfaces";

export const generateUpdateNotePayload = (noteId: string, content: string) => {
  let payload: updateNotePayloadInterface = {
    noteId: noteId,
    content: content,
  };

  return payload;
};
