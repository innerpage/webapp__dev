export const generateConfirmPasswordPayload = (email: string, newPassword: string, newPasswordRepeat: string, passwordResetCode: number) => {
  return {
    email: email.trim().toLowerCase(),
    newPassword: newPassword,
    newPasswordRepeat: newPasswordRepeat,
    passwordResetCode: passwordResetCode,
  };
};
