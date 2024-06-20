import Joi from "joi";
import { userNameAvailabilityPayloadInterface } from "../../../interfaces";

const userNameAvailabilityPayloadSchema = Joi.object({
  userName: Joi.string().max(1024).required(),
});

export const validateUserNameAvailabilityPayload = (
  payload: userNameAvailabilityPayloadInterface
) => {
  let { error } = userNameAvailabilityPayloadSchema.validate(payload);
  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
