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
  const [selectedVanType, setSelectedVanType] = useState(filteredVanType);
  const [currentLocation, setCurrentLocation] = useState(location);

  const handleLocationChange = (e) => {
    setCurrentLocation(e.target.value);
  };

  const handleVanTypeChange = (vanType) => {
    setSelectedVanType(vanType);
  };

  const handleEquipmentChange = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const handleApplyFilters = () => {
    dispatch(setFilteredVanType(selectedVanType));
    dispatch(setFilteredEquipment(selectedEquipment));
    dispatch(setLocation(currentLocation));
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
          value={currentLocation}
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
          selectedVanType={selectedVanType}
        />
        <ButtonSearch onClick={handleApplyFilters} />
      </div>
    </div>
  );
};

export default SearchFiltersSidebar;
