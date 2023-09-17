import { Vars } from '../../../../../global/script';

export const helper_ApiCall_Stripe_SessionCheck = async payload_Stripe_SessionCheck => {
  let backendPayload_Stripe_SessionCheck: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.checkout.stripe.check_Session}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_Stripe_SessionCheck),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Stripe_SessionCheck = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Stripe_SessionCheck.success,
    message: backendPayload_Stripe_SessionCheck.message,
    payload: backendPayload_Stripe_SessionCheck.payload,
  };
};
