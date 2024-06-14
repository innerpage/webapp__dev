import Joi from "joi";
import { loginPayloadInterface } from "../../../interfaces";

const loginPayloadSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const validateLoginPayload = (payload: loginPayloadInterface) => {
  let { error } = loginPayloadSchema.validate(payload);
  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
