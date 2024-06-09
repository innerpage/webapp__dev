import io from "socket.io-client";
import { ApiVar, Store } from "../../../global/script";

export let Io: any;

export const InitSocket = async () => {
  Io = await io(ApiVar.url, {
    query: {
      email: Store.accountEmail,
    },
  });
};
