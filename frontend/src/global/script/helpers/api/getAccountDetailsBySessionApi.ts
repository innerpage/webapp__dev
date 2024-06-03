import { ApiVar } from '../..';

export const getAccountDetailsBySessionApi = async () => {
  let getAccountDetailsBySessionReturnObj: any;

  let url: string = `${ApiVar.url}${ApiVar.endpoint.account.details}`;
  let options: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      getAccountDetailsBySessionReturnObj = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: getAccountDetailsBySessionReturnObj.success,
    message: getAccountDetailsBySessionReturnObj.message,
    payload: getAccountDetailsBySessionReturnObj.payload,
  };
};
