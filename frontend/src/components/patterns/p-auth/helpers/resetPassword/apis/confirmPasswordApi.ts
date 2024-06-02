import { confirmPasswordPayloadInterface } from '../../../interfaces';
import { ApiVar } from '../../../../../../global/script';

export const confirmPasswordApi = async (confirmPasswordPayload: confirmPasswordPayloadInterface) => {
  let url: string = `${ApiVar.url}${ApiVar.endpoint.account.password}`;
  let options: any = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(confirmPasswordPayload),
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
