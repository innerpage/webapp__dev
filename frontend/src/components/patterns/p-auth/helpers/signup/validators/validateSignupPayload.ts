import Joi from 'joi';
import { signupPayloadInterface } from '../../../interfaces';

const signupInputsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const validateSignupPayload = (signupPayload: signupPayloadInterface) => {
  let { error } = signupInputsSchema.validate(signupPayload);

  if (error) {
    return { isValid: false, validationMessage: error.details[0].message };
  } else {
    return { isValid: true, validationMessage: '' };
  }
};
