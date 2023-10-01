import { Vars } from '../../../../../../global/script';

export const helper_ApiCall_Create_StripeSession = async payload_Create_Stripe_CheckoutSession => {
  let backendPayload_Create_Stripe_CheckoutSession: any;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.checkout.stripe.create_Session}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_Create_Stripe_CheckoutSession),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      backendPayload_Create_Stripe_CheckoutSession = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Create_Stripe_CheckoutSession.success,
    message: backendPayload_Create_Stripe_CheckoutSession.message,
    payload: backendPayload_Create_Stripe_CheckoutSession.payload,
  };
};
