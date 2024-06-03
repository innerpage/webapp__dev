import io from 'socket.io-client';
import { ApiVar, state } from '../../../global/script';

export let IO: any;

export const initSocket = async () => {
  IO = await io(ApiVar.url, {
    query: {
      email: state.accountEmail,
    },
  });
};
