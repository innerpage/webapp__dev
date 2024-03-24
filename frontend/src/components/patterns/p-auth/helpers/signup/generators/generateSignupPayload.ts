export const generateSignupPayload = (name: string, email: string, password: string) => {
  let signupPayload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password.trim(),
  };
  return signupPayload;
};
