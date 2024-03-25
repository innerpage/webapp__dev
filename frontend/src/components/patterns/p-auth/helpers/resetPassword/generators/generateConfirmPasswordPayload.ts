import { confirmPasswordPayloadInterface } from '../../../interfaces';

export const generateConfirmPasswordPayload = (email: string, newPassword: string, newPasswordRepeat: string, passwordResetCode: number) => {
  let confirmPasswordPayload: confirmPasswordPayloadInterface = {
    email: email.trim().toLowerCase(),
    newPassword: newPassword,
    newPasswordRepeat: newPasswordRepeat,
    passwordResetCode: passwordResetCode,
  };

  return confirmPasswordPayload;
};
