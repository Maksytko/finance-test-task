import { connect } from "react-redux";
import { getTickersByFilter } from "../../redux/tickers-selectors";
import { addToFavoriteTickers } from "../../redux/tickers-actions";
import style from "./AllTickersSection.module.css";

import TickersList from "../TickersList";
import SearchForm from "../SearchForm";

function AllTickersSection({ tickers, addToFavoriteTickers }) {
  return (
    <section className={style.section}>
      <p className={style.text}>Вас может заинтересовать</p>
      <SearchForm />
      {tickers.length > 0 ? (
        <TickersList
          tickers={tickers}
          handleButtonClick={addToFavoriteTickers}
          textForButton="Добавить в избранное"
        />
      ) : (
        <p>Список пуст</p>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  tickers: getTickersByFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavoriteTickers: (ticker) => dispatch(addToFavoriteTickers(ticker)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTickersSection);
