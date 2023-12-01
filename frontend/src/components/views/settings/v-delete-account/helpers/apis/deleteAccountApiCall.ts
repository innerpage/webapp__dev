import { Vars } from '../../../../../../global/script';

export const deleteAccountApiCall = async () => {
  let isAccountDeletionSuccessful: boolean = false;
  let accountDeletionReturnObject: any;
  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account.delete}`;
  let options: any = {
    method: 'POST',
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

  if (!isAccountDeletionSuccessful) {
    return { success: false, message: accountDeletionReturnObject.message, payload: {} };
  } else {
    return {
      success: true,
      message: accountDeletionReturnObject.message,
      payload: {},
    };
  }
};
