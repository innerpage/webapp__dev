export const checkLoggedInCookie = () => {
  let loggedInCookie = document.cookie.replace(/(?:(?:^|.*;\s*)isLogged\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  if (loggedInCookie.length > 0) return true;
  else return false;
};
