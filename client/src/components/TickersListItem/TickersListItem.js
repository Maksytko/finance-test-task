import style from "./TickersListItem.module.css";

function TickersListItem({
  ticker,
  textForButton,
  handleFavoriteButtonClick,
  handlePauseButtonClick,
}) {
  return (
    <li className={style.li}>
      <p className={style.text}>
        {ticker.ticker} {ticker.price} {ticker.change} {ticker.change_percent}%
      </p>
      <button
        className={style.button}
        style={{ marginRight: "5px" }}
        onClick={() => handleFavoriteButtonClick(ticker.ticker)}
      >
        {textForButton}
      </button>
      <button
        className={style.button}
        onClick={() => handlePauseButtonClick(ticker)}
      >
        Остановить
      </button>
    </li>
  );
}

export default TickersListItem;
