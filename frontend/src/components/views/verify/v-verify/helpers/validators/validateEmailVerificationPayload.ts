import Joi from 'joi';
import { emailVerificationPayloadInterface } from '../../interfaces';

const emailVerificationInputsSchema = Joi.object({
  type: Joi.string().trim().valid('email', 'password-reset').required(),
  code: Joi.string().trim().required(),
});

export const validateEmailVerificationPayload = (verifyEmailPayload: emailVerificationPayloadInterface) => {
  let { error } = emailVerificationInputsSchema.validate(verifyEmailPayload);
  if (error) {
    return { isValid: false, validationMessage: error.details[0].message };
  } else {
    return { isValid: true, validationMessage: '' };
  }
};
