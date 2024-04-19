import Joi from 'joi';
import { accountUpdatePayloadInterface } from '../../interfaces';

const accountUpdatePayloadSchema = Joi.object({
  type: Joi.string().valid('name', 'email', 'password').required(),
  value: Joi.when('type', {
    switch: [
      { is: 'name', then: Joi.string().required() },
      {
        is: 'email',
        then: Joi.string()
          .email({ tlds: { allow: false } })
          .min(5)
          .max(128)
          .lowercase()
          .trim()
          .required(),
      },
      { is: 'password', then: Joi.string().min(8).max(1024).required() },
    ],
  }),
});

export const validateAccountUpdatePayload = (accountUpdatePayload: accountUpdatePayloadInterface) => {
  let { error } = accountUpdatePayloadSchema.validate(accountUpdatePayload);
  if (error) {
    return { isValid: false, validationMessage: `❌ ${error.details[0].message}` };
  } else {
    return { isValid: true, validationMessage: '' };
  }
};
