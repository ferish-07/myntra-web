import { configureStore } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import allReducers from "./Index";

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
