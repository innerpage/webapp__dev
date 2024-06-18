import Joi from "joi";
import { updatePayloadInterface } from "../../interfaces";

const updatePayloadSchema = Joi.object({
  filter: Joi.string().valid("username", "password").required(),
  value: Joi.when("filter", {
    switch: [
      { is: "username", then: Joi.string().required() },
      { is: "password", then: Joi.string().min(8).max(1024).required() },
    ],
  }),
});

export const validateUpdatePayload = (
  updatePayload: updatePayloadInterface
) => {
  let { error } = updatePayloadSchema.validate(updatePayload);
  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
