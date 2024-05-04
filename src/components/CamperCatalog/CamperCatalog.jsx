import { useDispatch, useSelector } from "react-redux";
import css from "./CamperCatalog.module.css";
import { getAllCampersThunk } from "../../redux/campers/operations";
import CamperCard from "./CamperCard";
import { useEffect } from "react";
import { nextPage } from "../../redux/campers/campersSlice";
import Spiner from "../Common/Spiner";
import ModalMoreInfo from "../ModallMoreInfo/ModalMoreInfo";
import { nanoid } from "nanoid";

const CamperCatalog = () => {
  const {
    campers,
    isLoading,
    error,
    isModallMoreInfo,
    pageOfCampers,
    limitItemsOfCampers,
    isButtonLoadMore,
  } = useSelector((state) => state.campers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect triggered", pageOfCampers);
    dispatch(
      getAllCampersThunk({ page: pageOfCampers, limit: limitItemsOfCampers })
    );
  }, [pageOfCampers, limitItemsOfCampers, dispatch]);

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  return (
    <div className={css.campersBox}>
      {campers &&
        campers.map((item) => (
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
