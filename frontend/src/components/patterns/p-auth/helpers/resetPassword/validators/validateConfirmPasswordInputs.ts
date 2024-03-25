import Joi from 'joi';

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

export const validateConfirmPasswordInputs = (confirmPasswordInputsPayload: object) => {
  let { error } = confirmPasswordInputsSchema.validate(confirmPasswordInputsPayload);
  if (error) {
    return { success: false, message: error.details[0].message };
  } else {
    return { success: true, message: '' };
  }
};
