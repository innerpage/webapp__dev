import { sendResetCodePayloadInterface } from '../../../interfaces';

export const generateSendResetCodePayload = (email: string) => {
  let sendResetCodePayload: sendResetCodePayloadInterface = {
    email: email.trim().toLowerCase(),
  };

  return sendResetCodePayload;
};
