import { interface_SignupInputs } from '../../interfaces';
import { Vars } from '../../../../../global/script';

export const helper_Signup_Api_Signup = async (payload_SignupInputs: interface_SignupInputs) => {
  let payload_SignupInputs_Submission: any;
  let isSuccess_SignupInputs_Submission: boolean = false;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.account.signup}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_SignupInputs),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload_SignupInputs_Submission = data;
      isSuccess_SignupInputs_Submission = payload_SignupInputs_Submission.success;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_SignupInputs_Submission) {
    return { isSuccess_SignupInputs_Submission: false, message_SignupInputs_Submission: payload_SignupInputs_Submission.message, payload_SignupInputs_Submission: {} };
  } else {
    return { isSuccess_SignupInputs_Submission: true, message_SignupInputs_Submission: 'Signup successful', payload_SignupInputs_Submission: payload_SignupInputs_Submission };
  }
};
