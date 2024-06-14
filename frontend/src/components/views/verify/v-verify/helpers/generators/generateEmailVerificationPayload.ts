import { emailVerificationPayloadInterface } from "../../interfaces";

export const generateEmailVerificationPayload = (
  type: string,
  code: string
) => {
  let payload: emailVerificationPayloadInterface = {
    type: type,
    code: code,
  };

  return payload;
};
