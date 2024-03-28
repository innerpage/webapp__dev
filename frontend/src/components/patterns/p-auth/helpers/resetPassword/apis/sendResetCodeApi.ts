import { emailPayloadInterface } from '../../../../../../global/script/interfaces';

import { Vars } from '../../../../../../global/script';

export const sendResetCodeApi = async (sendResetCodePayload: emailPayloadInterface) => {
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.mail.password.resetCode}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(sendResetCodePayload),
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
      message: 'Failed to send password reset code',
      payload: {},
    };
  } else {
    return {
      success: true,
      message: 'Password reset code sent',
      payload: payload,
    };
  }
};
