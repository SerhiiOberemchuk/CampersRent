import { useState, useEffect } from "react";
import css from "./VehicleEquipment.module.css";
import AcAirSvg from "../../../assets/Icons/AcAirSvg";
import AutomaticSvg from "../../../assets/Icons/AutomaticSvg";
import KitchenSvg from "../../../assets/Icons/KitchenSvg";
import TvSvg from "../../../assets/Icons/TvSvg";
import ShowerWcSvg from "../../../assets/Icons/ShowerWcSvg";
import { nanoid } from "nanoid";

const equipmentOptions = [
  { value: "airConditioner", label: "AC", icon: <AcAirSvg /> },
  { value: "automatic", label: "Automatic", icon: <AutomaticSvg /> },
  { value: "kitchen", label: "Kitchen", icon: <KitchenSvg /> },
  { value: "TV", label: "TV", icon: <TvSvg /> },
  { value: "bathroom", label: "Shower/WC", icon: <ShowerWcSvg /> },
];

const VehicleEquipment = ({ onChange, filters }) => {
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (value === "automatic") {
      onChange({ transmission: isChecked ? value : undefined });
    } else {
      onChange({ [value]: isChecked ? isChecked : undefined });
    }
  };

  return (
    <div className={css.equipmentSection}>
      <h2 className={css.boxName}>Vehicle Equipment</h2>
      <form className={css.options}>
        {equipmentOptions.map((option) => (
          <div key={nanoid()}>
            <input
              type="checkbox"
              name="vehicleEquipment"
              id={option.value}
              value={option.value}
              className={css.visuallyHidden}
              onChange={handleCheckboxChange}
              checked={
                option.value === "automatic"
                  ? filters.transmission === "automatic"
                  : !!filters[option.value]
              }
            />
            <label
              htmlFor={option.value}
              className={`${css.filterCheckbox} ${
                (
                  option.value === "automatic"
                    ? filters.transmission === "automatic"
                    : !!filters[option.value]
                )
                  ? css.checked
                  : ""
              }`}
            >
              {option.icon}
              <p>{option.label}</p>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default VehicleEquipment;
