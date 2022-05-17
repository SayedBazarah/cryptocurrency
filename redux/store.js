import { configureStore } from "@reduxjs/toolkit";
import { cryptoAPI } from "../utils/cryptoAPI";
import { createNewsAPI } from "../utils/cryptoNewsAPI";

export default configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    [createNewsAPI.reducerPath]: createNewsAPI.reducer,
  },
});
