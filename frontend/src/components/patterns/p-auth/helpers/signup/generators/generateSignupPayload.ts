import { signupPayloadInterface } from "../../../interfaces";

export const generateSignupPayload = (username: string, password: string) => {
  let payload: signupPayloadInterface = {
    username: username.trim().toLowerCase(),
    password: password.trim(),
  };
  return payload;
};
