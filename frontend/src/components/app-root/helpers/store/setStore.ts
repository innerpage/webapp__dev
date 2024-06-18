import { Store } from "../../../../global/script";

export const setStore = (accountDetailsPayload) => {
  Store.userName = accountDetailsPayload.name;
  Store.isSessionActive = accountDetailsPayload.isSessionActive;
};
