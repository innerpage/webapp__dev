import { emailVerificationPayloadInterface } from '../../interfaces';
import { Vars } from '../../../../../../global/script';

export const verifyEmailApi = async (emailVerificationPayload: emailVerificationPayloadInterface) => {
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account.verification}`;
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

  if (!success) {
    return {
      success: false,
      message: `${Vars.emoji.redCross} Failed to verify email`,
      payload: {},
    };
  }

  return {
    success: true,
    message: `${Vars.emoji.greenTick} ${payload.message}`,
    payload: payload,
  };
};
