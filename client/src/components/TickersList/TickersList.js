import style from "./TickersList.module.css";
import { useState } from "react";

import TickersListItem from "../TickersListItem";

function TickersList({ tickers, handleButtonClick, textForButton }) {
  const [pausedTickersData, setPausedTickersData] = useState([]);

  function handlePauseButtonClick(event, ticker) {
    const tickerIndex = pausedTickersData.findIndex(
      (obj) => obj.ticker === ticker.ticker
    );

    if (tickerIndex !== -1) {
      pausedTickersData.splice(tickerIndex, 1);
      event.currentTarget.innerText = "Остановить";
      return;
    }
    setPausedTickersData([...pausedTickersData, ticker]);
    event.currentTarget.innerText = "Запустить";
  }

  function tinkerRender(ticker) {
    const pausedTicker = pausedTickersData.find(
      (data) => data.ticker === ticker.ticker
    );
    if (pausedTicker) {
      return (
        <TickersListItem
          ticker={pausedTicker}
          textForButton={textForButton}
          handleFavoriteButtonClick={handleButtonClick}
          handlePauseButtonClick={handlePauseButtonClick}
          key={pausedTicker.ticker}
        />
      );
    }

    return (
      <TickersListItem
        ticker={ticker}
        textForButton={textForButton}
        handleFavoriteButtonClick={handleButtonClick}
        handlePauseButtonClick={handlePauseButtonClick}
        key={ticker.ticker}
      />
    );
  }

  return (
    <ul className={style.ul}>
      {tickers.length > 0 && tickers.map((ticker) => tinkerRender(ticker))}
    </ul>
  );
}

export default TickersList;
