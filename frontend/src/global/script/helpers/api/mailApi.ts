import { mailPayloadInterface } from '../../interfaces';
import { Vars } from '../../';

export const mailApi = async (mailPayload: mailPayloadInterface) => {
  let url: string = '';
  if (mailPayload.type === 'emailVerificationLink') {
    url = `${Vars.api.url}/${Vars.api.endpoint.mail.email.verificationLink}`;
  } else if (mailPayload.type === 'passwordResetLink') {
    url = `${Vars.api.url}/${Vars.api.endpoint.mail.password.resetLink}`;
  }

  let body: any = {
    email: mailPayload.email,
  };

  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
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
      message: 'Failed to send password reset link',
      payload: {},
    };
  } else {
    return {
      success: true,
      message: 'Password reset link sent',
      payload: payload,
    };
  }
};
