import { ApiVar } from '../..';

export const getAccountDetailsBySessionApi = async () => {
  let backendPayload_GetAccountDetails_BySession: any;

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
      backendPayload_GetAccountDetails_BySession = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_GetAccountDetails_BySession.success,
    message: backendPayload_GetAccountDetails_BySession.message,
    payload: backendPayload_GetAccountDetails_BySession.payload,
  };
};
