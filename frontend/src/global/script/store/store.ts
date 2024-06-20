import { createStore } from "@stencil/store";

export const { state } = createStore({
  activeView: "home",
  isSessionActive: false,
  userName: "",
  isModalVisible: false,
});
