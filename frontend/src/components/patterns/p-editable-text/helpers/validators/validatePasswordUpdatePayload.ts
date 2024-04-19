import Joi from 'joi';
import { passwordUpdatePayloadInterface } from '../../interfaces';

const passwordUpdatePayloadSchema = Joi.object({
  password: Joi.string().min(8).max(1024).required(),
});

export const validatePasswordUpdatePayload = (passwordUpdatePayload: passwordUpdatePayloadInterface) => {
  let { error } = passwordUpdatePayloadSchema.validate(passwordUpdatePayload);
  if (error) {
    return { isValid: false, validationMessage: `❌ ${error.details[0].message}` };
  } else {
    return { isValid: true, validationMessage: '' };
  }
};
