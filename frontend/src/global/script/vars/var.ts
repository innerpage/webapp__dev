export const Var = {
  app: {
    name: "",
    contact: {
      email: "mail@example.com",
    },
    domain: "",
    policy: {
      tos: {
        url: "",
      },
      privacy: {
        url: "",
      },
      cancellationAndRefund: {
        url: "",
      },
    },
    url: "",
    owner: {
      name: "",
      website: { url: "" },
      contact: { address: "", email: "" },
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
