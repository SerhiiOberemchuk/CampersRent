import css from "./VehicleType.module.css";
import AlcoveSvg from "../../../assets/Icons/AlcoveSvg";
import FullyIntegratedSvg from "../../../assets/Icons/FullyIntegratedSvg";
import VanSvg from "../../../assets/Icons/VanSvg";
import { useState } from "react";

const VehicleType = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
    setSelectedType(value);
  };

  return (
    <div className={css.sectionType}>
      <h2 className={css.typeHeader}>Vehicle type</h2>
      <form className={css.options}>
        <input
          onChange={handleChange}
          checked={selectedType === "panelTruck"}
          type="radio"
          name="vanType"
          value="panelTruck"
          id="panelTruck"
          className={css.visuallyHidden}
        />
        <label htmlFor="panelTruck" className={css.label}>
          <VanSvg />
          <p>Van</p>
        </label>

        <input
          onChange={handleChange}
          checked={selectedType === "fullyIntegrated"}
          type="radio"
          name="vanType"
          value="fullyIntegrated"
          id="fullyIntegrated"
          className={css.visuallyHidden}
        />
        <label htmlFor="fullyIntegrated" className={css.label}>
          <FullyIntegratedSvg />
          <p>Fully Integrated</p>
        </label>

        <input
          onChange={handleChange}
          checked={selectedType === "alcove"}
          type="radio"
          name="vanType"
          value="alcove"
          id="alcove"
          className={css.visuallyHidden}
        />
        <label htmlFor="alcove" className={css.label}>
          <AlcoveSvg />
          <p>Alcove</p>
        </label>
      </form>
    </div>
  );
};

export default VehicleType;
