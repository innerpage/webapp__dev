import { createStore } from '@stencil/store';

export const { state } = createStore({
  isActive_Session: false,
  activeView: 'home',
  account_FirstName: '',
  account_LastName: '',
  account_Email: '',
  isVerified_AccountEmail: false,
  googleClientId: '411214741221-lpl9pf804a1qb5a0t4dvgavfeh6k3l14.apps.googleusercontent.com',
  current_Location: 'IN',
});
