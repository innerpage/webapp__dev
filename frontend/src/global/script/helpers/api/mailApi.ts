import { mailPayloadInterface } from '../../interfaces';
import { ApiVar } from '../../';

export const mailApi = async (mailPayload: mailPayloadInterface) => {
  let url: string = '';

  if (mailPayload.type === 'emailVerificationLink' || mailPayload.type === 'passwordResetLink') {
    url = `${ApiVar.url}${ApiVar.endpoint.mail.verificationLink}`;
  }

  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(mailPayload),
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
