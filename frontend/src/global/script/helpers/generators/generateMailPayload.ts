import { MailPayloadInterface } from "../../interfaces";

export const generateMailPayload = (email: string, type: string) => {
  let emaiPayload: MailPayloadInterface = {
    email: email.trim().toLowerCase(),
    type: type,
  };

  return emaiPayload;
};
