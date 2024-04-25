import { updatePayloadInterface } from '../../interfaces';

export const generateUpdatePayload = (filter: string, value: string) => {
  let updatePayload: updatePayloadInterface = {
    filter: filter,
    value: value,
  };

  return updatePayload;
};
