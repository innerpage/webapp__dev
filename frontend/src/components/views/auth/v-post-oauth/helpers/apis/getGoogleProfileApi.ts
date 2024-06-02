import { getGoogleProfilePayloadInterface } from '../../interfaces';
import { ApiVar } from '../../../../../../global/script';

export const getGoogleProfileApi = async (getGoogleProfilePayload: getGoogleProfilePayloadInterface) => {
  let backendPayload: any;

  let url: string = `${ApiVar.url}${ApiVar.endpoint.account.auth.oauth.google}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(getGoogleProfilePayload),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload.success,
    message: backendPayload.message,
    payload: backendPayload.payload,
  };
};
