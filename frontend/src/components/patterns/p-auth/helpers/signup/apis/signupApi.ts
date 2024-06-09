import { signupPayloadInterface } from "../../../interfaces";
import { Var } from "../../../../../../global/script";

export const signupApi = async (signupPayload: signupPayloadInterface) => {
  let url: string = `${Var.api.url}${Var.api.endpoint.account.auth.signup}`;
  let options: any = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(signupPayload),
  };

  let payload: any;
  let success: boolean = false;

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      payload = data;
      success = payload.success;
    })
    .catch((error) => {
      console.log(error);
    });

  if (!success) {
    return { success: false, message: payload.message, payload: {} };
  } else {
    return { success: true, message: "Signup successful", payload: payload };
  }
};
