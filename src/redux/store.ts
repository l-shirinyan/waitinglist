import { configureStore } from "@reduxjs/toolkit";
import joinReducer from "./join/joinSlice";
import resturantReducer from "./waitinglist/restureantSlice";
export const store = configureStore({
  reducer: {
    join: joinReducer,
    resturant: resturantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
