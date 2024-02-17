import { combineReducers } from "@reduxjs/toolkit";
import useFuzzySearchReducer from "./slices/fuzzySearchSlice";

export const rootReducer = combineReducers({
  useFuzzySearch: useFuzzySearchReducer,
});
