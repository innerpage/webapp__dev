export const generate_SendResetCode_Payload = (email: string) => {
  return {
    email: email.trim().toLowerCase(),
  };
};
