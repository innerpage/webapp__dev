import { state } from '../../../../global/script';

export const helper_Set_State = payload_AccountDetails => {
  state.account_FirstName = payload_AccountDetails.firstName;
  state.account_LastName = payload_AccountDetails.lastName;
  state.account_Email = payload_AccountDetails.email;
  state.isVerified_AccountEmail = payload_AccountDetails.isEmailVerified;
  state.isActive_Session = payload_AccountDetails.isSessionActive;
};
