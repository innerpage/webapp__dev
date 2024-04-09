import { loginPayloadInterface } from '../../../interfaces';
import { Vars } from '../../../../../../global/script';

export const loginApi = async (loginPayload: loginPayloadInterface) => {
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.login}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(loginPayload),
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

  if (!success) {
    return { success: false, message: payload.message, payload: {} };
  } else {
    return {
      success: true,
      message: payload.message,
      payload: payload,
    };
  }
};
