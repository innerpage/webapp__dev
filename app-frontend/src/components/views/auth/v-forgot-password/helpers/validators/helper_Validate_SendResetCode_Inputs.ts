import Joi from 'joi';

const schema_SendResetCode_Inputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
});

export const helper_Validate_SendResetCode_Inputs = (payload_SendResetCode_Inputs: object) => {
  let { error } = schema_SendResetCode_Inputs.validate(payload_SendResetCode_Inputs);

  if (error) {
    return { isValid_SendResetCode_Inputs: false, message_Validate_SendResetCode_Inputs: error.details[0].message };
  } else {
    return { isValid_SendResetCode_Inputs: true, message_Validate_SendResetCode_Inputs: '' };
  }
};
