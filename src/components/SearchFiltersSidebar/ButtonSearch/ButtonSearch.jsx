import css from "./ButtonSearch.module.css";

const ButtonSearch = ({ onClick }) => {
  return (
    <button className={css.buttonSearch} onClick={onClick}>
      Search
    </button>
  );
};

export default ButtonSearch;
