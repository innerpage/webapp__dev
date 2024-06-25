import { userNameAvailabilityPayloadInterface } from "../../interfaces";

export const generateUserNameAvailabilityPayload = (userName: string) => {
  let payload: userNameAvailabilityPayloadInterface = {
    userName: userName.trim(),
  };
  return payload;
};
