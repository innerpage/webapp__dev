import { mailPayloadInterface } from '../../interfaces';

export const generateMailPayload = (email: string, type: string) => {
  let emaiPayload: mailPayloadInterface = {
    email: email.trim().toLowerCase(),
    type: type,
  };

  return emaiPayload;
};
