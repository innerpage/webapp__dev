import { Vars } from '../../../../../../global/script';

export const deleteAccountApiCall = async () => {
  let isAccountDeletionSuccessful: boolean = false;
  let accountDeletionReturnObject: any;
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account}`;
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
      accountDeletionReturnObject = data;
      isAccountDeletionSuccessful = accountDeletionReturnObject.success;
    })
    .catch(error => {
      console.log(error);
    });

  return {
    success: isAccountDeletionSuccessful,
    message: accountDeletionReturnObject.message,
    payload: accountDeletionReturnObject.payload,
  };
};
