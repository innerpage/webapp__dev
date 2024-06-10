import { MailPayloadInterface } from "../../interfaces";
import { Var } from "../..";

export const MailApi = async (payload: MailPayloadInterface) => {
  let url: string = "";
  if (
    payload.type === "emailVerificationLink" ||
    payload.type === "passwordResetLink"
  ) {
    url = `${Var.api.url}${Var.api.endpoint.mail.verificationLink}`;
  }

  let options: any = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  };

  let returnData: any;
  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      returnData = data;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    success: returnData.success,
    message: returnData.message,
    payload: returnData.payload,
  };
};
