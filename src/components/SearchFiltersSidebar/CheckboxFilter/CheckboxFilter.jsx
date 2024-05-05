import { useState } from "react";
import css from "./CheckboxFilter.module.css";

const CheckboxFilter = ({
  name,
  image,
  nameInput,
  value,
  type = "checkbox",
}) => {
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
          <p>{nameInput}</p>
        </div>
      </label>
      <input
        onChange={togleIsChecked}
        checked={isChecked}
        type={type}
        name={name}
        id={name}
        className={css.visually_hidden}
        value={value}
      />
    </>
  );
};

export default CheckboxFilter;
