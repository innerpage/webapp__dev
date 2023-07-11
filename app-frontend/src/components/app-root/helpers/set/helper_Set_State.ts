import { state } from '../../../../global/script';

export const helper_Set_State = payload_AccountDetails => {
  state.account_FirstName = payload_AccountDetails.name_First;
  state.account_LastName = payload_AccountDetails.name_Last;
  state.account_Email = payload_AccountDetails.email;
  state.isVerified_AccountEmail = payload_AccountDetails.isVerified_Email;
  state.isActive_Session = payload_AccountDetails.isActive_Session;
};
