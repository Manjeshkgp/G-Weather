import { Middleware } from "@reduxjs/toolkit";
import { searchState } from "./slices/searchSlice";

const syncHistoryMiddleware: Middleware<{search:searchState}> = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  const history = state.search.history;
  localStorage.setItem("searchHistory", JSON.stringify(history));
  return result;
};

export default syncHistoryMiddleware;
