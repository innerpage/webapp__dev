import { Store } from "../../../../global/script";

export const setStore = (accountDetailsPayload) => {
  Store.accountName = accountDetailsPayload.name;
  Store.accountEmail = accountDetailsPayload.email;
  Store.isEmailVerified = accountDetailsPayload.isEmailVerified;
  Store.isSessionActive = accountDetailsPayload.isSessionActive;
};
