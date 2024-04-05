import { confirmPasswordPayloadInterface } from '../../../interfaces';

export const generateConfirmPasswordPayload = (newPassword: string, newPasswordRepeat: string) => {
  let confirmPasswordPayload: confirmPasswordPayloadInterface = {
    newPassword: newPassword,
    newPasswordRepeat: newPasswordRepeat,
  };

  return confirmPasswordPayload;
};
