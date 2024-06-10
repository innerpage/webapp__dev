import { signupPayloadInterface } from "../../../interfaces";
import { Var } from "../../../../../../global/script";

export const signupApi = async (payload: signupPayloadInterface) => {
  let url: string = `${Var.api.url}${Var.api.endpoint.account.auth.signup}`;
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
    // payload: returnData.payload,
  };
};
