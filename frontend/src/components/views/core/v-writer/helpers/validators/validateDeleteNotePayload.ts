import Joi from "joi";
import { deleteNotePayloadInterface } from "../../interfaces";

const deleteNotePayloadSchema = Joi.object({
  noteId: Joi.string().required(),
});

export const validateDeleteNotePayload = (
  payload: deleteNotePayloadInterface
) => {
  let { error } = deleteNotePayloadSchema.validate(payload);
  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
