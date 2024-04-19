import { emailUpdatePayloadInterface } from '../../interfaces';

export const generateEmailUpdatePayload = (newEmail: string) => {
  let emailUpdatePayload: emailUpdatePayloadInterface = {
    email: newEmail,
  };

  return emailUpdatePayload;
};
