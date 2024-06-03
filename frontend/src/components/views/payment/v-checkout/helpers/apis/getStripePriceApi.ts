import { ApiVar } from '../../../../../../global/script';

export const getStripePriceApi = async getPricePayload => {
  let returnObj: any;

  let url: string = `${ApiVar.url}${ApiVar.endpoint.payment.stripe.price.get}?${new URLSearchParams(getPricePayload)}`;

  let options: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
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
