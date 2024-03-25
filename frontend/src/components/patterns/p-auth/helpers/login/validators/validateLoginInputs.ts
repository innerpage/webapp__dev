import Joi from 'joi';

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

export const validateLoginInputs = (loginInputsPayload: object) => {
  let { error } = loginInputsSchema.validate(loginInputsPayload);
  if (error) {
    return { success: false, message: `❌ ${error.details[0].message}` };
  } else {
    return { success: true, message: '' };
  }
};
