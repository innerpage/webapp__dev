export const Vars = {
  api: {
    url: document.domain === 'localhost' ? 'http://localhost:5555' : 'https://api.slimdl.com',
    endpoint: {
      confirm_Password: 'confirm-password',
      document: {
        all: 'documents',
        single: 'document',
        price: 'document-price',
        checkout: 'document-checkout',
      },
      get_AccountDetails: 'account-details',
      login: 'login',
      logout: 'logout',
      reader: 'reader',
      reSend_EmailVerificationCode: 'resend-email-verification-code',
      send_PasswordResetCode: 'send-password-reset-code',
      signup: 'signup',
      submit_EmailVerificationCode: 'verify-email',
      test: 'test',
      publications: {
        all: 'publications',
      },
      library: 'library',
      page: {
        single: 'page',
      },
      stripe: {
        create_Checkout_Session: 'stripe-create-checkout-session',
        check_Session: 'stripe-check-session',
      },
    },
  },
  cookie: {
    session: {
      isLogged: 'isLogged',
    },
  },
};
