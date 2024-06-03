import { ApiVar } from '../../../../../../global/script';

export const deleteAccountApiCall = async () => {
  let isSuccess: boolean = false;
  let returnObj: any;
  let url: string = `${ApiVar.url}${ApiVar.endpoint.account.details}`;
  let options: any = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      returnObj = data;
      isSuccess = returnObj.success;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: isSuccess,
    message: returnObj.message,
    payload: returnObj.payload,
  };
};
