import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  setActualTickers,
  addToFavoriteTickers,
  deleteFromFavoriteTickers,
  changeFilter,
} from "./tickers-actions";

const initialState = {
  tickers: {
    prev: [],
    actual: [],
  },
  favoriteTickers: [],
  filter: "",
};

const tickersReducer = createReducer(initialState.tickers, {
  [setActualTickers]: ({ actual }, { payload }) => ({
    prev: actual,
    actual: payload,
  }),
});

const favoriteTickersReducer = createReducer(initialState.favoriteTickers, {
  [addToFavoriteTickers]: (state, { payload }) => [...state, payload],
  [deleteFromFavoriteTickers]: (state, { payload }) =>
    state.filter((elem) => elem !== payload),
});

const filterReducer = createReducer(initialState.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

const reducer = combineReducers({
  tickers: tickersReducer,
  favoriteTickers: favoriteTickersReducer,
  filter: filterReducer,
});

export default reducer;
