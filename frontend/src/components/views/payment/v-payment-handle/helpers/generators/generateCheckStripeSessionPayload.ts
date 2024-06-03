export const generateCheckStripeSessionPayload = (sessionId: string) => {
  let checkStripeSessionPayload = {
    sessionId: sessionId.trim(),
  };

  return checkStripeSessionPayload;
};
