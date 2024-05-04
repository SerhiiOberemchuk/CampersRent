import { useDispatch } from "react-redux";
import css from "./ButtonSearch.module.css";
import { getAllCampersThunk } from "../../../redux/campers/operations";

const ButtonSearch = () => {
  const dispatch = useDispatch();
  // const handleAllCampers = () => dispatch(getAllCampersThunk());
  return (
    <button
      type="button"
      className={css.buttonSearch}
      // onClick={() => dispatch(getAllCampersThunk(4, 1))}
    >
      Search
    </button>
  );
};

export default ButtonSearch;
