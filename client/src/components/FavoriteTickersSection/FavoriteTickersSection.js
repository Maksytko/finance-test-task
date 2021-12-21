import { connect } from "react-redux";
import { getFavoriteTickers } from "../../redux/tickers-selectors";
import { deleteFromFavoriteTickers } from "../../redux/tickers-actions";
import style from "./FavoriteTickersSection.module.css";

import TickersList from "../TickersList";

function FavoriteTickersSection({ tickers, deleteFromFavoriteTickers }) {
  return (
    <section className={style.section}>
      <p className={style.text}>Избранные активы</p>
      {tickers.length > 0 ? (
        <TickersList
          tickers={tickers}
          handleButtonClick={deleteFromFavoriteTickers}
          textForButton="Удалить из избранного"
        />
      ) : (
        <p>Список пуст</p>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  tickers: getFavoriteTickers(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteFromFavoriteTickers: (ticker) =>
    dispatch(deleteFromFavoriteTickers(ticker)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteTickersSection);
