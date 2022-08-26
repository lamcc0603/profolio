import { configureStore } from "@reduxjs/toolkit";
import subjectSlice from "../reducer/subjectSlice";
import authSlice from "../reducer/authSlice";
import dataSlice from "../reducer/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});
