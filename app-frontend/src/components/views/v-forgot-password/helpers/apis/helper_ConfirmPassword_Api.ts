import { interface_ConfirmPassword_Inputs } from '../../interfaces';
import { Vars } from '../../../../../global/script';

export const helper_ConfirmPassword_Api = async (payload_ConfirmPassword_Inputs: interface_ConfirmPassword_Inputs) => {
  let payload_ConfirmPassword_Inputs_Submission: any;
  let isSuccess_ConfirmPassword_Inputs_Submission: boolean = false;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account.password}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_ConfirmPassword_Inputs),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload_ConfirmPassword_Inputs_Submission = data;
      isSuccess_ConfirmPassword_Inputs_Submission = payload_ConfirmPassword_Inputs_Submission.success;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_ConfirmPassword_Inputs_Submission) {
    return {
      isSuccess_ConfirmPassword_Inputs_Submission: false,
      message_ConfirmPassword_Inputs_Submission: payload_ConfirmPassword_Inputs_Submission.message,
      payload_ConfirmPassword_Inputs_Submission: {},
    };
  } else {
    return {
      isSuccess_ConfirmPassword_Inputs_Submission: true,
      message_ConfirmPassword_Inputs_Submission: payload_ConfirmPassword_Inputs_Submission.message,
      payload_ConfirmPassword_Inputs_Submission: payload_ConfirmPassword_Inputs_Submission,
    };
  }
};
