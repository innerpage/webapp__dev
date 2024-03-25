import Joi from 'joi';
import { sendResetCodePayloadInterface } from '../../../interfaces';

const validateSendResetCodeInputsSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const validateSendResetCodeInputs = (sendResetCodeInputs: sendResetCodePayloadInterface) => {
  let { error } = validateSendResetCodeInputsSchema.validate(sendResetCodeInputs);

  if (error) {
    return { success: false, message: error.details[0].message };
  } else {
    return { success: true, message: '' };
  }
};
