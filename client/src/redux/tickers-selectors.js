import { createSelector } from "@reduxjs/toolkit";

const getActualTickers = (state) => state.tickers.actual;
const getPrevTickers = (state) => state.tickers.prev;
const getFavorite = (state) => state.favoriteTickers;
const getFilter = (state) => state.filter;

const normalizeTickers = createSelector(
  [getPrevTickers, getActualTickers],
  (prevTickers, actualTickers) => {
    if (prevTickers.length === 0) {
      return actualTickers;
    }

    const normalizedTickers = actualTickers.map((actualTicker) => {
      const prevTicker = prevTickers.find(
        (prevTicker) => prevTicker.ticker === actualTicker.ticker
      );

      const difference = prevTicker.price - actualTicker.price;

      if (difference > 0) {
        return {
          ...actualTicker,
          change: -actualTicker.change,
          change_percent: -actualTicker.change_percent,
        };
      }

      if (difference < 0) {
        return {
          ...actualTicker,
          change: +actualTicker.change,
          change_percent: +actualTicker.change_percent,
        };
      }

      return actualTicker;
    });

    return normalizedTickers;
  }
);

const getAllTickersWithoutFavorite = createSelector(
  [normalizeTickers, getFavorite],
  (allTickers, favoriteTickers) => {
    return allTickers.filter(
      (ticker) => !favoriteTickers.includes(ticker.ticker)
    );
  }
);

const getTickersByFilter = createSelector(
  [getAllTickersWithoutFavorite, getFilter],
  (tickers, filter) => {
    return tickers.filter((ticker) =>
      ticker.ticker.toUpperCase().includes(filter.toUpperCase())
    );
  }
);

const getFavoriteTickers = createSelector(
  [normalizeTickers, getFavorite],
  (allTickers, favoriteTickers) => {
    return allTickers.filter((ticker) =>
      favoriteTickers.includes(ticker.ticker)
    );
  }
);

export { getTickersByFilter, getFavoriteTickers };
