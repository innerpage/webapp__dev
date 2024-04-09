import { confirmPasswordPayloadInterface } from '../../../interfaces';

export const generateConfirmPasswordPayload = (email: string, newPassword: string, newPasswordRepeat: string) => {
  let confirmPasswordPayload: confirmPasswordPayloadInterface = {
    email: email,
    newPassword: newPassword,
    newPasswordRepeat: newPasswordRepeat,
  };

  return confirmPasswordPayload;
};
