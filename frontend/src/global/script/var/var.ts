export const Var = {
  app: {
    name: "InnerPage",
    contact: {
      email: "innerpage.journal@gmail.com",
      social: {
        twitter: "https://x.com/TheInnerPage",
      },
    },
    domain: "innerpage.org",
    policy: {
      tos: {
        url: "https://innerpage.org/terms-of-service",
      },
      privacy: {
        url: "https://innerpage.org/privacy-policy",
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
      admin: {
        count: {
          accounts: "/accounts-count",
          deletedAccounts: "/deleted-accounts",
          notes: "/notes-count",
          creations: {
            accounts: "/account-creation-count",
            notes: "/note-creation-count",
          },
        },
        activity: "/activity",
      },
      account: {
        details: "/account",
        auth: {
          login: "/login",
          logout: "/logout",
          signup: "/signup",
        },
        availability: {
          userName: "/username",
        },
        password: "/password",
      },
      note: {
        single: "/note",
        all: "/notes",
      },
    },
  },
};
