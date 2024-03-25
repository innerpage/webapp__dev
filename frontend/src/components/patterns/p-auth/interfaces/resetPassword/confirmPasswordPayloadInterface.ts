export interface confirmPasswordPayloadInterface {
  email: string;
  newPassword: string;
  newPasswordRepeat: string;
  passwordResetCode: number;
}
