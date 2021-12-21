import { useState } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/tickers-actions";
import style from "./SearchForm.module.css";

function SearchForm({ changeFilter }) {
  const [filter, setFilter] = useState("");

  function handleInputChange(event) {
    setFilter(event.currentTarget.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    changeFilter(filter);
    setFilter("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        value={filter}
        className={style.input}
      ></input>
      <button type="submit" className={style.button}>
        Поиск
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (text) => dispatch(changeFilter(text)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
