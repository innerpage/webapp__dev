export const generate_Signup_Payload = (name: string, email: string, password: string) => {
  let payload_SignupInputs = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password.trim(),
  };

  return payload_SignupInputs;
};
