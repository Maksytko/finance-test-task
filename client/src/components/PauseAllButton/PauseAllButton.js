import style from "./PauseAllButton.module.css";

function PauseAllButton({ handleButtonClick }) {
  return (
    <button
      onClick={handleButtonClick}
      data-status="On"
      className={style.button}
    >
      Остановить обновления
    </button>
  );
}

export default PauseAllButton;
