export const setSessionInLS = () => {
  if (!window.localStorage) {
    return alert("LocalStorage not found");
  }

  localStorage.setItem("session", JSON.stringify({ isLogged: true }));
};
