export const helper_Generate_Stripe_SessionCheck_Payload = (id_Session: string) => {
  let payload_Stripe_SessionCheck = {
    id_Session: id_Session.trim(),
  };

  return payload_Stripe_SessionCheck;
};
