import Joi from 'joi';
import { confirmPasswordPayloadInterface } from '../../../interfaces';

const confirmPasswordInputsSchema = Joi.object({
  passwordResetCode: Joi.number().required().min(1000).max(9999),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  newPassword: Joi.string().trim().min(8).required(),
  newPasswordRepeat: Joi.string().equal(Joi.ref('newPassword')).trim().required(),
});

export const validateConfirmPasswordInputs = (confirmPasswordInputs: confirmPasswordPayloadInterface) => {
  let { error } = confirmPasswordInputsSchema.validate(confirmPasswordInputs);
  if (error) {
    return { success: false, message: error.details[0].message };
  } else {
    return { success: true, message: '' };
  }
};
