import Joi from 'joi';
import { interface_SignupInputs } from '../../interfaces';

const schema_Signup_Inputs = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const helper_Validate_SignupInputs = (payload_SignupInputs: interface_SignupInputs) => {
  let { error } = schema_Signup_Inputs.validate(payload_SignupInputs);

  if (error) {
    return { isValid_SignupInputs: false, message_Validation_SignupInputs: error.details[0].message };
  } else {
    return { isValid_SignupInputs: true, message_Validation_SignupInputs: '' };
  }
};
