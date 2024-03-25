import { loginPayloadInterface } from '../../../interfaces';

export const generateLoginPayload = (email: string, password: string) => {
  let loginPayload: loginPayloadInterface = {
    email: email.trim().toLowerCase(),
    password: password.trim(),
  };

  return loginPayload;
};
