import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import css from "./SearchFiltersSidebar.module.css";

import VehicleType from "./VehicleType/VehicleType";
import VehicleEquipment from "./VehicleEquipment/VehicleEquipment";
import ButtonSearch from "./ButtonSearch/ButtonSearch";
import {
  setFilteredEquipment,
  setFilteredVanType,
  setLocation,
} from "../../redux/campers/campersSlice";

const SearchFiltersSidebar = () => {
  const dispatch = useDispatch();
  const { filteredVanType, filteredEquipment, location } = useSelector(
    (state) => state.campers
  );

  const [selectedEquipment, setSelectedEquipment] = useState(filteredEquipment);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleVanTypeChange = (vanType) => {
    dispatch(setFilteredVanType(vanType));
  };

  const handleEquipmentChange = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const handleApplyFilters = () => {
    dispatch(setFilteredEquipment(selectedEquipment));
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
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className={css.filetCampers}>
        <h2 className={css.filterName}>Filters</h2>
        <VehicleEquipment
          onChange={handleEquipmentChange}
          selectedEquipment={selectedEquipment}
        />
        <VehicleType
          onChange={handleVanTypeChange}
          selectedVanType={filteredVanType}
        />
        <ButtonSearch onClick={handleApplyFilters} />
      </div>
    </div>
  );
};

export default SearchFiltersSidebar;
