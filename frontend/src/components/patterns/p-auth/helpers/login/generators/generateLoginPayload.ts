import { loginPayloadInterface } from "../../../interfaces";

export const generateLoginPayload = (username: string, password: string) => {
  let payload: loginPayloadInterface = {
    username: username.trim().toLowerCase(),
    password: password.trim(),
  };

  return payload;
};
