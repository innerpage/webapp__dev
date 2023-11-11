import { Vars } from '../../../../global/script';

interface Payload {
  email: string;
}

export const mailEmailVerificationCodeApi = async (payload: Payload) => {
  let backendResponse: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.mail.email.verificationCode}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendResponse = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendResponse.success,
    message: backendResponse.message,
    payload: backendResponse.payload,
  };
};
