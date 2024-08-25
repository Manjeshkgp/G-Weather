import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchSlice from "./slices/searchSlice";
import syncHistoryMiddleware from "./sync-history-middleware";


export const store = configureStore({
    reducer: {
      search:searchSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(syncHistoryMiddleware)
    ,
  }
  );
  
  setupListeners(store.dispatch);

  export type MainState = ReturnType<typeof store.getState>;