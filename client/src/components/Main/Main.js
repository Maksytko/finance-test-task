import { useEffect } from "react";
import { io } from "socket.io-client";
import { connect } from "react-redux";
import { setActualTickers } from "../../redux/tickers-actions";
import style from "./Main.module.css";

import PauseAllButton from "../PauseAllButton";
import AllTickersSection from "../AllTickersSection";
import FavoriteTickersSection from "../FavoriteTickersSection";

const socket = io("http://localhost:4000/");

function Main({ setActualTickers }) {
  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (res) => {
      setActualTickers(res);
    });
  }, []);

  function tickerSwitcher(event) {
    const target = event.currentTarget;
    if (target.getAttribute("data-status") === "On") {
      target.innerText = "Запустить обновления";
      target.setAttribute("data-status", "Off");
      socket.emit("stop");
      return;
    }

    if (target.getAttribute("data-status") === "Off") {
      target.innerText = "Остановить обновления";
      target.setAttribute("data-status", "On");
      socket.emit("start");
      return;
    }
  }

  return (
    <main className={style.main}>
      <div>
        <PauseAllButton handleButtonClick={tickerSwitcher} />
      </div>
      <FavoriteTickersSection />
      <AllTickersSection />
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setActualTickers: (tickers) => dispatch(setActualTickers(tickers)),
});

export default connect(null, mapDispatchToProps)(Main);
