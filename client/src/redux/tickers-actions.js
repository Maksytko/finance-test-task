import { createAction } from "@reduxjs/toolkit";

const setActualTickers = createAction("tickers/setActual");
const addToFavoriteTickers = createAction("tickers/addFavorite");
const deleteFromFavoriteTickers = createAction("tickers/deleteFavorite");

export { setActualTickers, addToFavoriteTickers, deleteFromFavoriteTickers };
