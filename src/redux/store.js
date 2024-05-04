import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { campersReduser } from "./campers/campersSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "campers",
  storage,
  whitelist: ["arrayFavoriteCampers"],
};

const rootReducers = combineReducers({
  campers: persistReducer(persistConfig, campersReduser),
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
