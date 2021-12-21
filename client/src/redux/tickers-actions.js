import { createAction } from "@reduxjs/toolkit";

const setActualTickers = createAction("tickers/setActual");
const addToFavoriteTickers = createAction("tickers/addFavorite");
const deleteFromFavoriteTickers = createAction("tickers/deleteFavorite");
const changeFilter = createAction("filter/change");

export {
  setActualTickers,
  addToFavoriteTickers,
  deleteFromFavoriteTickers,
  changeFilter,
};
