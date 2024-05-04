import { configureStore } from "@reduxjs/toolkit";
import { campersReduser } from "./campers/campersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReduser,
  },
});
