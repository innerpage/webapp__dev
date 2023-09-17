import Joi from 'joi';

const schema_Login_Inputs = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(128)
    .lowercase()
    .trim()
    .required(),
  password: Joi.string().min(8).max(1024).required(),
});

export const helper_Validate_LoginInputs = (payload_LoginInputs: object) => {
  let { error } = schema_Login_Inputs.validate(payload_LoginInputs);

  if (error) {
    return { isValid_LoginInputs: false, message_Validate_LoginInputs: `❌ ${error.details[0].message}` };
  } else {
    return { isValid_LoginInputs: true, message_Validate_LoginInputs: '' };
  }
};
