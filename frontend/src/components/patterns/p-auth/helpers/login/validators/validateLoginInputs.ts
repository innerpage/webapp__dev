import Joi from 'joi';
import { loginPayloadInterface } from '../../../interfaces';

const loginInputsSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const validateLoginInputs = (loginInputs: loginPayloadInterface) => {
  let { error } = loginInputsSchema.validate(loginInputs);
  if (error) {
    return { success: false, message: `❌ ${error.details[0].message}` };
  } else {
    return { success: true, message: '' };
  }
};
