import { ApiVar } from '../../../../../../global/script';

export const createStripeSessionApi = async createStripeSessionPayload => {
  let returnObj: any;

  let url: string = `${ApiVar.url}${ApiVar.endpoint.payment.stripe.session.create}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(createStripeSessionPayload),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      returnObj = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: returnObj.success,
    message: returnObj.message,
    payload: returnObj.payload,
  };
};
