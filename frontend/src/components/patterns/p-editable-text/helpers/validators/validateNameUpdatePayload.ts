import Joi from 'joi';
import { nameUpdatePayloadInterface } from '../../interfaces';

const nameUpdatePayloadSchema = Joi.object({
  name: Joi.string().required(),
});

export const validateNameUpdatePayload = (nameUpdatePayload: nameUpdatePayloadInterface) => {
  let { error } = nameUpdatePayloadSchema.validate(nameUpdatePayload);
  if (error) {
    return { isValid: false, validationMessage: `❌ ${error.details[0].message}` };
  } else {
    return { isValid: true, validationMessage: '' };
  }
};
