export const generate_Login_Payload = (email: string, password: string) => {
  let payload_LoginInputs = {
    email: email.trim().toLowerCase(),
    password: password.trim(),
  };

  return payload_LoginInputs;
};
