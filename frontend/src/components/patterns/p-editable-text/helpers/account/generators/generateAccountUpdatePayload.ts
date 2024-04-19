import { accountUpdatePayloadInterface } from '../../../interfaces';

export const generateAccountUpdatePayload = (type: string, value: string) => {
  let accountUpdatePayload: accountUpdatePayloadInterface = {
    type: type,
    value: value,
  };

  return accountUpdatePayload;
};
