import { ApiVar } from '../..';

export const accountLogoutApi = async () => {
  let payload_Logout_Submission: any;
  let isSuccess_Logout_Submission: boolean = false;

  let url: string = `${ApiVar.url}${ApiVar.endpoint.account.auth.logout}`;
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
      payload_Logout_Submission = data;
      isSuccess_Logout_Submission = true;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_Logout_Submission) {
    return { success: false, message: payload_Logout_Submission.message, payload: {} };
  } else {
    return { success: true, message: payload_Logout_Submission.message, payload: payload_Logout_Submission };
  }
};
