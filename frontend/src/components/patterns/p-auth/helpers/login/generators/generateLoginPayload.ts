import { loginPayloadInterface } from "../../../interfaces";

export const generateLoginPayload = (userName: string, password: string) => {
  let payload: loginPayloadInterface = {
    userName: userName.trim().toLowerCase(),
    password: password.trim(),
  };

  return payload;
};
