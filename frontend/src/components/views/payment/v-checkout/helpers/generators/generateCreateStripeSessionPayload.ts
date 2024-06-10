export const generateCreateStripeSessionPayload = (productId: string) => {
  let createStripeCheckoutSessionPayload = {
    productId: productId,
  };

  return createStripeCheckoutSessionPayload;
};
