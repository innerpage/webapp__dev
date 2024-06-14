export const Var = {
  app: {
    name: "Projckt WebApp",
    contact: {
      email: "projckt@gmail.com",
      url: "https://projckt.com/support",
    },
    domain: "projckt.com",
    logo: {
      rectangle: {
        colour:
          "https://res.cloudinary.com/projcktold/image/upload/v1718190583/Starter/Webapp/Webapp_Logo.png",
      },
    },
    policy: {
      tos: {
        url: "https://projckt.com/terms-of-service",
      },
      privacy: {
        url: "https://projckt.com/privacy-policy",
      },
      cancellationAndRefund: {
        url: "https://projckt.com/cancellation",
      },
    },
    url: "https://projckt.com",
    owner: {
      name: "Projckt",
      website: { url: "https://projckt.com" },
      contact: {
        address: "Guwahati, Assam, India",
        email: "projckt@gmail.com",
      },
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
      verify: {
        email: "/verify-email",
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
