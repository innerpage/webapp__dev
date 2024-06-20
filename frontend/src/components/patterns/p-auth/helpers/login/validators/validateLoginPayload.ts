import Joi from "joi";
import { loginPayloadInterface } from "../../../interfaces";

const loginPayloadSchema = Joi.object({
  userName: Joi.string().max(1024).required(),
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
