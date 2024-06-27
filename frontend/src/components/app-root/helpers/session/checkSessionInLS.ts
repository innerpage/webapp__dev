export const checkSessionInLS = () => {
  if (!window.localStorage) {
    return {
      success: false,
      message: "LocalStorage not found",
    };
  }

  let sessionString: string = localStorage.getItem("session");
  if (!sessionString) {
    return {
      success: false,
      message: "Could not retrieve session",
    };
  }

  let sessionData: any = JSON.parse(sessionString);
  return {
    success: true,
    message: "Fetched session data",
    payload: sessionData,
  };
};
