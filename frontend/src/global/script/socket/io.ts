import io from 'socket.io-client';
import { Vars, state } from '../../../global/script';

export let IO: any;

export const init_Socket = async () => {
  IO = await io(Vars.api.url, {
    query: {
      email: state.account_Email,
    },
  });
};
