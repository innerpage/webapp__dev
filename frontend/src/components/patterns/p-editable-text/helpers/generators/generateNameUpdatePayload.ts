import { nameUpdatePayloadInterface } from '../../interfaces';

export const generateNameUpdatePayload = (newName: string) => {
  let nameUpdatePayload: nameUpdatePayloadInterface = {
    name: newName,
  };

  return nameUpdatePayload;
};
