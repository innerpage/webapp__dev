export const generateCreateStripeSessionPayload = (id_Document: string) => {
  let payload_Create_Stripe_CheckoutSession = {
    id_Document: id_Document,
  };

  return payload_Create_Stripe_CheckoutSession;
};
