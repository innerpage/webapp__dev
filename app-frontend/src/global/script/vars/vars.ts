export const Vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:4444' : 'https://api.example.com',
    endpoint: {
      account: {
        details: 'account',
        login: 'login',
        logout: 'logout',
        oauth: {
          google: {
            getProfile: 'get-google-profile',
          },
        },
        signup: 'signup',
        password: 'password',
        email: {
          verification: 'verify-email',
        },
      },
      mail: {
        email: {
          verificationCode: 'mail-email-verification-code',
        },
        password: {
          resetCode: 'mail-password-reset-code',
        },
      },
      checkout: {
        stripe: {
          get_Price: 'stripe-get-price',
          create_Session: 'stripe-create-session',
          check_Session: 'stripe-check-session',
        },
      },
    },
  },
};
