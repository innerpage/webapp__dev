import Joi from "joi";
import { signupPayloadInterface } from "../../../interfaces";

const signupPayloadSchema = Joi.object({
  username: Joi.string().min(8).max(1024).required(),
  password: Joi.string().min(8).max(1024).required(),
  repeatPassword: Joi.string().min(8).max(1024).required(),
});

export const validateSignupPayload = (
  signupPayload: signupPayloadInterface
) => {
  let { error } = signupPayloadSchema.validate(signupPayload);

  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
