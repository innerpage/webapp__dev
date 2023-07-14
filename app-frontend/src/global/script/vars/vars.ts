export const Vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:4444' : 'https://api.example.com',
    endpoint: {
      account: {
        details: 'account-details',
        login: 'login',
        logout: 'logout',
        signup: 'signup',
        password: {
          confirm: 'confirm-password',
          send_ResetCode: '',
        },
        email: {
          verification: 'verify-email',
        },
      },
      mail: {
        email: {
          verificationCode: 'resend-email-verification-code',
        },
        password: {
          resetCode: 'send-password-reset-code',
        },
      },
      checkout: {
        stripe: {
          create_Session: 'stripe-create-checkout-session',
          check_Session: 'stripe-check-session',
        },
      },
    },
  },
};
