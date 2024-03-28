import { emailPayloadInterface } from '../../interfaces';

export const generateEmailPayload = (email: string) => {
  let emaiPayload: emailPayloadInterface = {
    email: email.trim().toLowerCase(),
  };

  return emaiPayload;
};
