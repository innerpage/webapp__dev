import Joi from 'joi';

const schema_ConfirmPassword_Inputs = Joi.object({
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

export const helper_Validate_ConfirmPassword_Inputs = (payload_ConfirmPassword_Inputs: object) => {
  let { error } = schema_ConfirmPassword_Inputs.validate(payload_ConfirmPassword_Inputs);

  if (error) {
    return { isValid_ConfirmPassword_Inputs: false, message_Validate_ConfirmPassword_Inputs: error.details[0].message };
  } else {
    return { isValid_ConfirmPassword_Inputs: true, message_Validate_ConfirmPassword_Inputs: '' };
  }
};
