import { interface_LoginInputs } from '../../interfaces';
import { Vars } from '../../../../../global/script';

export const helper_Login_Api = async (payload_LoginInputs: interface_LoginInputs) => {
  let payload_LoginInputs_Submission: any;
  let isSuccess_LoginInputs_Submission: boolean = false;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account.login}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_LoginInputs),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload_LoginInputs_Submission = data;
      isSuccess_LoginInputs_Submission = payload_LoginInputs_Submission.success;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_LoginInputs_Submission) {
    return { isSuccess_LoginInputs_Submission: false, message_LoginInputs_Submission: payload_LoginInputs_Submission.message, payload_LoginInputs_Submission: {} };
  } else {
    return {
      isSuccess_LoginInputs_Submission: true,
      message_LoginInputs_Submission: payload_LoginInputs_Submission.message,
      payload_LoginInputs_Submission: payload_LoginInputs_Submission,
    };
  }
};
