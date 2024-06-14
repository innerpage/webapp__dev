import { signupPayloadInterface } from "../../../interfaces";

export const generateSignupPayload = (
  name: string,
  email: string,
  password: string
) => {
  let payload: signupPayloadInterface = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password.trim(),
  };
  return payload;
};
