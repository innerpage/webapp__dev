import { confirmPasswordPayloadInterface } from '../../../interfaces';
import { Vars } from '../../../../../../global/script';

export const conformPasswordApi = async (confirmPasswordPayload: confirmPasswordPayloadInterface) => {
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account.password}`;
  let options: any = {
    method: 'POST',
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

  if (!success) {
    return {
      success: false,
      message: 'Failed to confirm password',
      payload: {},
    };
  } else {
    return {
      success: true,
      message: payload.message,
      payload: payload,
    };
  }
};
