import Joi from "joi";
import { activityPayloadInterface } from "../../interfaces/";

const activityPayloadSchema = Joi.object({
  range: Joi.string().min(4).required(),
  startDate: Joi.string().required().allow(""),
  endDate: Joi.string().required().allow(""),
});

export const validateActivityPayload = (payload: activityPayloadInterface) => {
  let { error } = activityPayloadSchema.validate(payload);
  if (error) {
    return {
      isValid: false,
      validationMessage: `❌ ${error.details[0].message}`,
    };
  } else {
    return { isValid: true, validationMessage: "" };
  }
};
