import ButtonSearch from "./ButtonSearch/ButtonSearch";
import css from "./SearchFiltersSidebar.module.css";
import VehicleEquipment from "./VehicleEquipment/VehicleEquipment";
import VehicleType from "./VehicleType/VehicleType";

const SearchFiltersSidebar = () => {
  return (
    <div className={css.sideBar}>
      <div className={css.location}>
        <label htmlFor="locationCamper" className={css.labelLocation}>
          Location
        </label>
        <input
          type="text"
          name="locationCamper"
          className={css.inputLocation}
        />
      </div>
      <div className={css.filetCampers}>
        <h2 className={css.filterName}>Filters</h2>
        <VehicleEquipment />
        <VehicleType />
        <ButtonSearch />
      </div>
    </div>
  );
};

export default SearchFiltersSidebar;
