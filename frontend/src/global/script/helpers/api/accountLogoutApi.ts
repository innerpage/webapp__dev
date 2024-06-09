import { Var } from "../..";

export const AccountLogoutApi = async () => {
  let returnObj: any;

  let url: string = `${Var.api.url}${Var.api.endpoint.account.auth.logout}`;
  let options: any = {
    method: "POST",
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
    payload: returnObj.payload,
  };
};
