import { emailVerificationPayloadInterface } from '../../interfaces';
import { ApiVar } from '../../../../../../global/script';

export const verifyEmailApi = async (emailVerificationPayload: emailVerificationPayloadInterface) => {
  let url: string = `${ApiVar.url}${ApiVar.endpoint.mail.verificationLink}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(emailVerificationPayload),
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
    payload: payload.payload,
  };
};
