import { MailPayloadInterface } from "../../interfaces";

export const GenerateMailPayload = (email: string, type: string) => {
  let emaiPayload: MailPayloadInterface = {
    email: email.trim().toLowerCase(),
    type: type,
  };

  return emaiPayload;
};
