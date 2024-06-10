import { Var } from "../..";

export const AccountDetailsBySessionApi = async () => {
  let returnObj: any;

  let url: string = `${Var.api.url}${Var.api.endpoint.account.details}`;
  let options: any = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      returnObj = data;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    success: returnObj.success,
    message: returnObj.message,
    data: returnObj.payload,
  };
};
