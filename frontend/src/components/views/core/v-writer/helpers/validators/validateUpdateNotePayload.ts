import Joi from "joi";
import { updateNotePayloadInterface } from "../../interfaces";

const updateNotePayloadSchema = Joi.object({
  noteId: Joi.string().required(),
  content: Joi.string().required(),
});

export const validateUpdateNotePayload = (
  payload: updateNotePayloadInterface
) => {
  let { error } = updateNotePayloadSchema.validate(payload);
  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
