import { interface_SendResetCode_Inputs } from '../../interfaces';
import { Vars } from '../../../../../global/script';

export const helper_SendResetCode_Api = async (payload_SendResetCode_Inputs: interface_SendResetCode_Inputs) => {
  let payload_SendResetCode_Inputs_Submission: any;
  let isSuccess_SendResetCode_Inputs_Submission: boolean = false;

  let url: string = `${Vars.api.url}/${Vars.api.endpoint.mail.password.resetCode}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload_SendResetCode_Inputs),
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      payload_SendResetCode_Inputs_Submission = data;
      isSuccess_SendResetCode_Inputs_Submission = payload_SendResetCode_Inputs_Submission.success;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isSuccess_SendResetCode_Inputs_Submission) {
    return {
      isSuccess_SendResetCode_Inputs_Submission: false,
      message_SendResetCode_Inputs_Submission: 'Failed to send password reset code',
      payload_SendResetCode_Inputs_Submission: {},
    };
  } else {
    return {
      isSuccess_SendResetCode_Inputs_Submission: true,
      message_SendResetCode_Inputs_Submission: 'Password reset code sent',
      payload_SendResetCode_Inputs_Submission: payload_SendResetCode_Inputs_Submission,
    };
  }
};
