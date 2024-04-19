import { accountUpdatePayloadInterface } from '../../../interfaces';
import { Vars } from '../../../../../../global/script';

export const accountUpdateApiCall = async (accountUpdatePayload: accountUpdatePayloadInterface) => {
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account}`;
  let options: any = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(accountUpdatePayload),
  };

  let payload: any;
  let success: boolean = false;
  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload = data;
      success = payload.success;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: success,
    message: payload.message,
    payload: payload,
  };
};
