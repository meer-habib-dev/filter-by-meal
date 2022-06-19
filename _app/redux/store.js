import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slices/inputSlice";

export const store = configureStore({
  reducer: {
    input: inputSlice,
  },
});
