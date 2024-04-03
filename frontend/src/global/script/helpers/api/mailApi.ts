import { mailPayloadInterface } from '../../interfaces';
import { Vars } from '../../';

export const mailApi = async (mailPayload: mailPayloadInterface) => {
  let url: string = '';

  if (mailPayload.type === 'emailVerificationLink' || mailPayload.type === 'passwordResetLink') {
    url = `${Vars.api.url}/${Vars.api.endpoint.mail.verificationLink}`;
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

  if (!success) {
    return {
      success: false,
      message: `${Vars.emoji.redCross} Could not send password reset link. Kindly contact ${Vars.support.email}`,
      payload: {},
    };
  }

  return {
    success: true,
    message: payload.message,
    payload: payload,
  };
};
