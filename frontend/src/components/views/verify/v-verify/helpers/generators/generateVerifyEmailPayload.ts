import { verifyEmailPayloadInterface } from '../../interfaces';

export const generateVerifyEmailPayload = (email: string, type: string, code: string) => {
  let verifyEmailPayload: verifyEmailPayloadInterface = {
    email: email,
    type: type,
    code: code,
  };

  return verifyEmailPayload;
};
