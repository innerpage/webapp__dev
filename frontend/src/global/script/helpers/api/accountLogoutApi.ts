import { ApiVar } from '../..';

export const accountLogoutApi = async () => {
  let logoutPayload: any;
  let isLoggedOut: boolean = false;

  let url: string = `${ApiVar.url}${ApiVar.endpoint.account.auth.logout}`;
  let options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  await fetch(url, options)
    .then(response => response.json())
    .then(data => {
      logoutPayload = data;
      isLoggedOut = true;
    })
    .catch(error => {
      console.log(error);
    });

  if (!isLoggedOut) {
    return { success: false, message: logoutPayload.message, payload: {} };
  } else {
    return { success: true, message: logoutPayload.message, payload: logoutPayload };
  }
};
