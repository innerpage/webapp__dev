import { activityPayloadInterface } from "../../interfaces";

export const generateActivityPayload = (
  range: string,
  startDate: string,
  endDate: string
) => {
  let payload: activityPayloadInterface = {
    range: range,
    startDate: startDate,
    endDate: endDate,
  };

  return payload;
};
