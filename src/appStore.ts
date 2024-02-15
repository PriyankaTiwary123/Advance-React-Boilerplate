import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";

const appStore = configureStore({
  reducer: rootReducer,
});

export default appStore;
