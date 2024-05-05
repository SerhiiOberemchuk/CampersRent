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

const VehicleEquipment = ({ onChange, selectedEquipment }) => {
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    onChange(
      selectedEquipment.includes(value)
        ? selectedEquipment.filter((item) => item !== value)
        : [...selectedEquipment, value]
    );
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
              checked={selectedEquipment.includes(option.value)}
            />
            <label
              htmlFor={option.value}
              className={`${css.filterCheckbox} ${
                selectedEquipment.includes(option.value) ? css.checked : ""
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
