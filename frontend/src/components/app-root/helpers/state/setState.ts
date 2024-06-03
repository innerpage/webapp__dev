import { state } from '../../../../global/script';

export const setState = accountDetailsPayload => {
  state.accountName = accountDetailsPayload.name;
  state.accountEmail = accountDetailsPayload.email;
  state.isEmailVerified = accountDetailsPayload.isEmailVerified;
  state.isSessionActive = accountDetailsPayload.isSessionActive;
};
