import io from 'socket.io-client';
import { Vars, ApiVar, state } from '../../../global/script';

export let IO: any;

export const init_Socket = async () => {
  IO = await io(ApiVar.url, {
    query: {
      email: state.accountEmail,
    },
  });
};
