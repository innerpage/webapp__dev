export const generate_Signup_Payload = (name_First: string, name_Last: string, email: string, password: string) => {
  let payload_SignupInputs = {
    firstName: name_First.trim(),
    lastName: name_Last.trim(),
    email: email.trim().toLowerCase(),
    password: password.trim(),
  };

  return payload_SignupInputs;
};
