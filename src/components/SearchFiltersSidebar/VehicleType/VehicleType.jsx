import AlcoveSvg from "../../../assets/Icons/AlcoveSvg";
import FullyIntegratedSvg from "../../../assets/Icons/FullyIntegratedSvg";
import VanSvg from "../../../assets/Icons/VanSvg";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import css from "./VehicleType.module.css";
const VehicleType = () => {
  return (
    <div className={css.sectionType}>
      <h2 className={css.typeHeader}>Vehicle type</h2>
      <ul className={css.options}>
        <li>
          <CheckboxFilter name={"Van"} image={<VanSvg />} />
        </li>
        <li>
          <CheckboxFilter
            name={"Fully Integrated"}
            image={<FullyIntegratedSvg />}
          />
        </li>
        <li>
          <CheckboxFilter name={"Alcove"} image={<AlcoveSvg />} />
        </li>
      </ul>
    </div>
  );
};

export default VehicleType;
