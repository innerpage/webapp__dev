export const generateSendResetCodePayload = (email: string) => {
  return {
    email: email.trim().toLowerCase(),
  };
};
