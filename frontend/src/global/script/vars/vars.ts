export const Vars = {
  support: {
    email: 'mail@example.com',
  },
  legal: {
    url: {
      privacyPolicy: 'https://google.com',
      termsAndConditions: 'https://facebook.com',
    },
  },
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:4444' : 'https://api.example.com',
    endpoint: {
      account: 'account',
      login: 'login',
      logout: 'logout',
      signup: 'signup',
      password: 'password',
      verify: 'verify',
      oauth: {
        google: 'google-oauth',
      },
      mail: {
        verificationLink: 'mail-verification-link',
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
