import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import css from "./VehicleEquipment.module.css";
import AcAirSvg from "../../../assets/Icons/AcAirSvg";
import AutomaticSvg from "../../../assets/Icons/AutomaticSvg";
import KitchenSvg from "../../../assets/Icons/KitchenSvg";
import TvSvg from "../../../assets/Icons/TvSvg";
import ShowerWcSvg from "../../../assets/Icons/ShowerWcSvg";

const VehicleEquipment = () => {
  return (
    <div className={css.equipmentSection}>
      <h2 className={css.boxName}>VehicleEquipment</h2>

      <ul className={css.options}>
        <li>
          <CheckboxFilter name={"AC"} image={<AcAirSvg />} />
        </li>
        <li>
          <CheckboxFilter name={"Automatic"} image={<AutomaticSvg />} />
        </li>
        <li>
          <CheckboxFilter name={"Kitchen"} image={<KitchenSvg />} />
        </li>
        <li>
          <CheckboxFilter name={"TV"} image={<TvSvg />} />
        </li>
        <li>
          <CheckboxFilter name={"Shower/WC"} image={<ShowerWcSvg />} />
        </li>
      </ul>
    </div>
  );
};

export default VehicleEquipment;
