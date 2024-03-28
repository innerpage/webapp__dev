import Joi from 'joi';
import { emailPayloadInterface } from '../../../../../../global/script/interfaces';

const validateSendResetCodeInputsSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const validateSendResetCodePayload = (sendResetCodePayload: emailPayloadInterface) => {
  let { error } = validateSendResetCodeInputsSchema.validate(sendResetCodePayload);

  if (error) {
    return { isValid: false, validationMessage: error.details[0].message };
  } else {
    return { isValid: true, validationMessage: '' };
  }
};
