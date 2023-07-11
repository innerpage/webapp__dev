import { createStore } from '@stencil/store';

export const { state } = createStore({
  isActive_Session: false,
  account_FirstName: '',
  account_LastName: '',
  account_Email: '',
  isVerified_AccountEmail: false,
  current_Location: 'IN',
});
