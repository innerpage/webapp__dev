export const Var = {
  app: {
    name: "InnerPage",
    contact: {
      email: "innerpage.journal@gmail.com",
      url: "https://innerpage.org/contact-us",
    },
    domain: "innerpage.org",
    logo: {
      rectangle: {
        black:
          "https://res.cloudinary.com/dj9xh37fj/image/upload/v1718521642/Logotype_Transparent_Black_kvzkty.png",
        white:
          "https://res.cloudinary.com/dj9xh37fj/image/upload/v1718521642/Logotype_Transparent_White_sfcqmy.png",
      },
      square: {
        black:
          "https://res.cloudinary.com/dj9xh37fj/image/upload/v1718521642/Logo_Transparent_Black_dylnfh.png",
        white:
          "https://res.cloudinary.com/dj9xh37fj/image/upload/v1718521642/Logo_Transparent_White_b2sfhk.png",
      },
    },
    policy: {
      tos: {
        url: "https://innerpage.org/terms-of-service",
      },
      privacy: {
        url: "https://innerpage.org/privacy-policy",
      },
      cancellationAndRefund: {
        url: "https://innerpage.org/cancellation",
      },
    },
    url: "https://app.innerpage.org",
    owner: {
      name: "Projckt",
      website: { url: "https://projckt.com" },
      contact: {
        address: "Guwahati, Assam, India",
        email: "projckt@gmail.com",
      },
    },
    website: { url: "https://innerpage.org" },
  },
  api: {
    url:
      document.domain === "localhost"
        ? "http://localhost:4444"
        : "https://api.innerpage.org",
    endpoint: {
      account: {
        details: "/account",
        auth: {
          login: "/login",
          logout: "/logout",
          signup: "/signup",
        },
        password: "/password",
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
};
