import Joi from 'joi';

const validateSendResetCodeInputsSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const validateSendResetCodeInputs = (sendResetCodeInputsPayload: object) => {
  let { error } = validateSendResetCodeInputsSchema.validate(sendResetCodeInputsPayload);

  if (error) {
    return { success: false, message: error.details[0].message };
  } else {
    return { success: true, message: '' };
  }
};
