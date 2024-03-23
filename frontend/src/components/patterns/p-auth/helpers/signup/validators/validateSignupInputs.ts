import Joi from 'joi';
import { signupInputsInterface } from '../../../interfaces';

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

export const validateSignupInputs = (signupInputsPayload: signupInputsInterface) => {
  let { error } = signupInputsSchema.validate(signupInputsPayload);

  if (error) {
    return { success: false, message: error.details[0].message };
  } else {
    return { success: true, message: '' };
  }
};
