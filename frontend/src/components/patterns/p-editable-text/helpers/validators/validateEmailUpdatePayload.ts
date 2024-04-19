import Joi from 'joi';
import { emailUpdatePayloadInterface } from '../../interfaces';

const emailUpdatePayloadSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const validateEmailUpdatePayload = (emailUpdatePayload: emailUpdatePayloadInterface) => {
  let { error } = emailUpdatePayloadSchema.validate(emailUpdatePayload);
  if (error) {
    return { isValid: false, validationMessage: `❌ ${error.details[0].message}` };
  } else {
    return { isValid: true, validationMessage: '' };
  }
};
