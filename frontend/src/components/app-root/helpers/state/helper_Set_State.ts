import { state } from '../../../../global/script';

export const helper_Set_State = payload_AccountDetails => {
  state.accountName = payload_AccountDetails.name;
  state.accountEmail = payload_AccountDetails.email;
  state.isEmailVerified = payload_AccountDetails.isEmailVerified;
  state.isSessionActive = payload_AccountDetails.isSessionActive;
};
