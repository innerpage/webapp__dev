import { deleteNotePayloadInterface } from "../../interfaces";

export const generateDeleteNotePayload = (noteId: string) => {
  let payload: deleteNotePayloadInterface = {
    noteId: noteId,
  };

  return payload;
};
