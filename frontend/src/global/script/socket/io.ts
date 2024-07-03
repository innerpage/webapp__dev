import io from "socket.io-client";
import { Var } from "../../../global/script";

export let IO: any;

export const initSocket = async () => {
  IO = await io(Var.api.url);
};
