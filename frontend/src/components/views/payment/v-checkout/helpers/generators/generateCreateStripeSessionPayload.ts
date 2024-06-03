export const generateCreateStripeSessionPayload = (documentId: string) => {
  let createStripeCheckoutSessionPayload = {
    documentId: documentId,
  };

  return createStripeCheckoutSessionPayload;
};
