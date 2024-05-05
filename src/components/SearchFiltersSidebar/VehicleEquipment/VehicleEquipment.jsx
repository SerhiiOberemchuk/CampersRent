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
      <h2 className={css.boxName}>Vehicle Equipment</h2>

      <form className={css.options}>
        <CheckboxFilter
          name={"vehicleEquipment"}
          nameInput={"AC"}
          image={<AcAirSvg />}
        />

        <CheckboxFilter
          name={"vehicleEquipment"}
          nameInput={"Automatic"}
          image={<AutomaticSvg />}
        />

        <CheckboxFilter
          name={"vehicleEquipment"}
          nameInput={"Kitchen"}
          image={<KitchenSvg />}
        />

        <CheckboxFilter name={"TV"} nameInput={"TV"} image={<TvSvg />} />

        <CheckboxFilter
          name={"vehicleEquipment"}
          nameInput={"Shower/WC"}
          image={<ShowerWcSvg />}
        />
      </form>
    </div>
  );
};

export default VehicleEquipment;
