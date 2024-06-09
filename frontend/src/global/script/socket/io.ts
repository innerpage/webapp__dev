import io from "socket.io-client";
import { Var, Store } from "..";

export let Io: any;

export const InitSocket = async () => {
  Io = await io(Var.api.url, {
    query: {
      email: Store.accountEmail,
    },
  });
};
