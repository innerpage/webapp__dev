import Joi from "joi";
import { MailPayloadInterface } from "../../interfaces";

const ValidateMailPayloadSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  type: Joi.string().trim().required(),
});

export const ValidateMailPayload = (mailPayload: MailPayloadInterface) => {
  let { error } = ValidateMailPayloadSchema.validate(mailPayload);

  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
