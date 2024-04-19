import { passwordUpdatePayloadInterface } from '../../interfaces';

export const generatePasswordUpdatePayload = (newPassword: string) => {
  let passwordUpdatePayload: passwordUpdatePayloadInterface = {
    password: newPassword,
  };

  return passwordUpdatePayload;
};
