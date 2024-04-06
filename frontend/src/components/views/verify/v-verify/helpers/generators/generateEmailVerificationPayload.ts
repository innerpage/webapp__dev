import { emailVerificationPayloadInterface } from '../../interfaces';

export const generateEmailVerificationPayload = (type: string, code: string) => {
  let emailVerificationPayload: emailVerificationPayloadInterface = {
    type: type,
    code: code,
  };

  return emailVerificationPayload;
};
