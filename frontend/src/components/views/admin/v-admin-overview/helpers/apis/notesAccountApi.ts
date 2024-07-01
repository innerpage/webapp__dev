import { Var } from "../../../../../../global/script";

export const notesAccountApi = async () => {
  let url: string = `${Var.api.url}${Var.api.endpoint.admin.count.notes}`;
  let options: any = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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
