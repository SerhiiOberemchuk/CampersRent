import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import css from "./SearchFiltersSidebar.module.css";
import VehicleType from "./VehicleType/VehicleType";
import VehicleEquipment from "./VehicleEquipment/VehicleEquipment";
import ButtonSearch from "./ButtonSearch/ButtonSearch";
import { setFilters } from "../../redux/campers/campersSlice";

const SearchFiltersSidebar = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.campers);

  const [currentFilters, setCurrentFilters] = useState(filters);

  const handleLocationChange = (e) => {
    setCurrentFilters({ ...currentFilters, location: e.target.value });
  };

  const handleVanTypeChange = (vanType) => {
    setCurrentFilters({ ...currentFilters, form: vanType });
  };

  const handleEquipmentChange = (equipmentFilters) => {
    setCurrentFilters({ ...currentFilters, ...equipmentFilters });
  };

  const handleApplyFilters = () => {
    dispatch(setFilters(currentFilters));
  };

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
          value={currentFilters.location || ""}
          onChange={handleLocationChange}
        />
      </div>
      <div className={css.filetCampers}>
        <h2 className={css.filterName}>Filters</h2>
        <VehicleEquipment onChange={handleEquipmentChange} />
        <VehicleType onChange={handleVanTypeChange} />
        <ButtonSearch onClick={handleApplyFilters} />
      </div>
    </div>
  );
};

export default SearchFiltersSidebar;
