import { updatePayloadInterface } from '../../interfaces';
import { Vars } from '../../../../../global/script';

export const updateApiCall = async (updatePayload: updatePayloadInterface) => {
  let url: string = '';

  if (updatePayload.filter === 'name' || updatePayload.filter === 'email' || updatePayload.filter === 'password') {
    url = `${Vars.api.url}/${Vars.api.endpoint.account}`;
  }

  let options: any = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(updatePayload),
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
