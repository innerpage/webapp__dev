import { signupPayloadInterface } from '../../../interfaces';
import { Vars } from '../../../../../../global/script';

export const signupApi = async (signupInputs: signupPayloadInterface) => {
  let payload: any;
  let success: boolean = false;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account.signup}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(signupInputs),
  };

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
    return { success: true, message: 'Signup successful', payload: payload };
  }
};
