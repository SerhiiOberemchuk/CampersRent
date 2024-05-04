import { useDispatch, useSelector } from "react-redux";
import css from "./CamperCatalog.module.css";
import {
  getAllCampersThunk,
  getCamperByIdThunk,
} from "../../redux/campers/operations";
import CamperCard from "./CamperCard";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { nextPage } from "../../redux/campers/campersSlice";

const CamperCatalog = () => {
  const { campers, isLoading, error, pageOfCampers } = useSelector(
    (state) => state.campers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect triggered", pageOfCampers);
    dispatch(getAllCampersThunk({ page: pageOfCampers, limit: 4 }));
  }, [pageOfCampers, dispatch]);

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  // console.log(pageOfCampers);
  // const handleShowMoreInfo = (id) => dispatch(getCamperByIdThunk(id));

  return (
    <div className={css.campersBox}>
      {campers &&
        campers.map((item) => (
          <CamperCard
            // key={nanoid()}
            key={item.id}
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
      <button
        type="button"
        className={css.buttonLoadMore}
        onClick={handleLoadMore}
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

export default CamperCatalog;
