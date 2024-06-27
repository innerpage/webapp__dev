export const clearSessionInLS = () => {
  if (!window.localStorage) {
    return alert("LocalStore not found");
  }

  localStorage.clear();
};
