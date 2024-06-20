import { signupPayloadInterface } from "../../../interfaces";

export const generateSignupPayload = (userName: string, password: string) => {
  let payload: signupPayloadInterface = {
    userName: userName.trim().toLowerCase(),
    password: password.trim(),
  };
  return payload;
};
