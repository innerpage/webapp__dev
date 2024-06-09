export const getSessionCookie = () => {
  let sessionCookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)isLogged\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (sessionCookie.length > 0) return true;
  else return false;
};
