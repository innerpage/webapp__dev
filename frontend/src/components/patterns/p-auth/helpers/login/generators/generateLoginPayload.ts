export const generateLoginPayload = (email: string, password: string) => {
  let loginPayload = {
    email: email.trim().toLowerCase(),
    password: password.trim(),
  };

  return loginPayload;
};
