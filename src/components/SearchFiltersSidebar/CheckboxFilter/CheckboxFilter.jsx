import { useState } from "react";
import css from "./CheckboxFilter.module.css";

const CheckboxFilter = ({ name, image }) => {
  const [isChecked, setIsChecked] = useState(false);

  const togleIsChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <label htmlFor={name}>
        <div
          className={`${css.filterCheckbox} ${isChecked ? css.checked : ""} `}
        >
          {image}
          <p>{name}</p>
        </div>
      </label>
      <input
        onChange={togleIsChecked}
        type="checkbox"
        name={name}
        checked={isChecked}
        id={name}
        className={css.visually_hidden}
      />
    </>
  );
};

export default CheckboxFilter;
