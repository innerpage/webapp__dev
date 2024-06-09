export const Var = {
  app: {
    contact: {
      email: "mail@example.com",
    },
    policy: {
      tos: { url: "https://google.com" },
      privacy: { url: "https://facebook.com" },
    },
  },
  api: {
    url:
      document.domain === "localhost"
        ? "http://localhost:4444"
        : "https://api.example.com",
    endpoint: {
      account: {
        details: "/account",
        auth: {
          login: "/login",
          logout: "/logout",
          signup: "/signup",
          oauth: {
            google: "/google-oauth",
          },
        },
        password: "/password",
      },
      mail: {
        verificationLink: "/mail-verification-link",
      },
      payment: {
        stripe: {
          session: {
            create: "/stripe-create-session",
            check: "/stripe-check-session",
          },
          price: {
            get: "/stripe-get-price",
          },
        },
      },
    },
  },
  keys: {
    oauth: {
      google: {
        clientId:
          "411214741221-lpl9pf804a1qb5a0t4dvgavfeh6k3l14.apps.googleusercontent.com",
      },
    },
  },
};
