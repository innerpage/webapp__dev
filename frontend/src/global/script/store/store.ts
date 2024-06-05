import { createStore } from '@stencil/store';

export const { state } = createStore({
  activeView: 'home',
  isSessionActive: false,
  accountName: 'Tuhin Bhuyan',
  accountEmail: '',
  isEmailVerified: true,
  currentLocation: 'IN',
  isModalVisible: false,
});
