import { createStore } from '@stencil/store';

export const { state } = createStore({
  activeView: 'home',
  isSessionActive: false,
  accountName: 'Tuhin Bhuyan',
  accountEmail: '',
  isAccountEmailVerified: true,
  googleClientId: '411214741221-lpl9pf804a1qb5a0t4dvgavfeh6k3l14.apps.googleusercontent.com',
  currentLocation: 'IN',
  isModalVisible: false,
  modal: '',
});
