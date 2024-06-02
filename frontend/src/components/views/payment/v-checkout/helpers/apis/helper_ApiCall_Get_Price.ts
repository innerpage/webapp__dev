import { ApiVar } from '../../../../../../global/script';

export const helper_ApiCall_Get_Price = async payload_Get_Price_Inputs => {
  let backendPayload_Get_Price: any;

  let url: string = `${ApiVar.url}${ApiVar.endpoint.payment.stripe.price.get}?${new URLSearchParams(payload_Get_Price_Inputs)}`;

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
      backendPayload_Get_Price = data;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: backendPayload_Get_Price.success,
    message: backendPayload_Get_Price.message,
    payload: backendPayload_Get_Price.payload,
  };
};
