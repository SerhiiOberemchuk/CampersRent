import { nanoid } from "nanoid";
import css from "./VehicleEquipment.module.css";
import { icons } from "../../../assets/Icons/Icons";

const equipmentOptions = [
  { value: "airConditioner", label: "AC", icon: <icons.AcAirSvg /> },
  { value: "automatic", label: "Automatic", icon: <icons.AutomaticSvg /> },
  { value: "kitchen", label: "Kitchen", icon: <icons.KitchenSvg /> },
  { value: "TV", label: "TV", icon: <icons.TvSvg /> },
  { value: "bathroom", label: "Shower/WC", icon: <icons.ShowerWcSvg /> },
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
