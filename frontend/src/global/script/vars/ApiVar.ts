export const ApiVar = {
  url: document.domain === 'localhost' ? 'http://localhost:4444' : 'https://api.example.com',
  endpoint: {
    account: {
      details: '/account',
      auth: {
        login: '/login',
        logout: '/logout',
        signup: '/signup',
        oauth: {
          google: '/google-oauth',
        },
      },
      password: '/password',
    },
    mail: {
      verificationLink: '/mail-verification-link',
    },
    payment: {
      stripe: {
        session: {
          create: '/stripe-create-session',
          check: '/stripe-check-session',
        },
        price: {
          get: '/stripe-get-price',
        },
      },
    },
  },
};
