import { Store } from "../../../../global/script";

export const setStore = (returnData) => {
  Store.userName = returnData.userName;
  Store.isSessionActive = returnData.isSessionActive;
};
