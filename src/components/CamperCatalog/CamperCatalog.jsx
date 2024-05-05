import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import css from "./CamperCatalog.module.css";
import { getAllCampersThunk } from "../../redux/campers/operations";
import CamperCard from "./CamperCard";
import { nextPage } from "../../redux/campers/campersSlice";
import ModalMoreInfo from "../ModallMoreInfo/ModalMoreInfo";
import Spiner from "../Common/Spiner/Spiner";

const CamperCatalog = () => {
  const {
    campers,
    isLoading,
    isModallMoreInfo,
    pageOfCampers,
    limitItemsOfCampers,
    isButtonLoadMore,
    filters,
  } = useSelector((state) => state.campers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllCampersThunk({ page: pageOfCampers, limit: limitItemsOfCampers })
    );
  }, [pageOfCampers, limitItemsOfCampers, dispatch]);

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  const filterCampers = () => {
    let filteredCampers = campers;

    if (filters.form) {
      filteredCampers = filteredCampers.filter(
        (camper) => camper.form === filters.form
      );
    }

    if (filters.transmission) {
      filteredCampers = filteredCampers.filter(
        (camper) => camper.transmission === filters.transmission
      );
    }

    // Object.keys(filters).forEach((key) => {
    //   if (key !== "location" && key !== "form" && key !== "transmission") {
    //     filteredCampers = filteredCampers.filter(
    //       (camper) => camper.details[key]
    //     );
    //   }
    // });

    if (filters.location) {
      filteredCampers = filteredCampers.filter((camper) =>
        camper.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    return filteredCampers;
  };

  const filteredCampers = filterCampers();

  return (
    <div className={css.campersBox}>
      {filteredCampers.map((item) => (
        <CamperCard
          key={nanoid()}
          id={item._id}
          name={item.name}
          price={item.price}
          rating={item.rating}
          reviews={item.reviews.length}
          location={item.location}
          description={item.description}
          image={item.gallery[0]}
          adults={item.adults}
          engine={item.engine}
          transmission={item.transmission}
          beds={item.details.beds}
        />
      ))}
      {isButtonLoadMore && (
        <button
          type="button"
          className={css.buttonLoadMore}
          onClick={handleLoadMore}
        >
          {isLoading ? <Spiner /> : "Load more"}
        </button>
      )}
      {isModallMoreInfo && <ModalMoreInfo />}
    </div>
  );
};

export default CamperCatalog;
