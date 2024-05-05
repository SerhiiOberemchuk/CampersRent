import { useDispatch, useSelector } from "react-redux";
import css from "./CamperCatalog.module.css";
import {
  addToFavorite,
  dellFromFavorite,
  showModal,
} from "../../redux/campers/campersSlice";
import DetailsItem from "./DetailsItem/DetailsItem";
import { icons } from "../../assets/Icons/Icons";

const CamperCard = ({
  name,
  price,
  rating,
  reviews,
  location,
  description,
  image,
  adults,
  engine,
  transmission,
  beds,
  id,
}) => {
  const { arrayFavoriteCampers } = useSelector((state) => state.campers);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(showModal(id));
    document.body.classList.add("body-no-scroll");
  };

  const isFavorite = arrayFavoriteCampers.some((item) => item._id === id);

  const handleOnClickFavorite = () => {
    if (isFavorite) {
      dispatch(dellFromFavorite(id));
    } else dispatch(addToFavorite(id));
  };

  return (
    <div className={css.camperCard}>
      <img src={image} alt="camper" className={css.image} />
      <div className={css.camperInformationSection}>
        <div className={css.headerCardInfo}>
          <div className={css.namePriceBlock}>
            <h2 className={css.modelCamper}>{name}</h2>
            <div className={css.price}>
              <p>€{price.toFixed(2)}</p>
              <button
                type="button"
                onClick={handleOnClickFavorite}
                className={css.buttonAddToFavorite}
              >
                <icons.HeartSvg
                  fill={isFavorite ? "#E44848" : ""}
                  stroke={isFavorite ? "#E44848" : "#101828"}
                />
              </button>
            </div>
          </div>
          <div className={css.reviewsLocation}>
            <p className={css.reviews}>
              {<icons.StarSvg />} {rating}({reviews} Reviews)
            </p>
            <p className={css.locationPoint}>
              {<icons.PointLocationSvg />}
              {location}
            </p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.details}>
          <li>
            <DetailsItem image={<icons.AdultSvg />} name={`${adults} adults`} />
          </li>
          <li>
            <DetailsItem
              image={<icons.AutomaticSvg size={20} />}
              name={transmission}
            />
          </li>
          <li>
            <DetailsItem image={<icons.PetrolSvg />} name={engine} />
          </li>
          <li>
            <DetailsItem
              image={<icons.KitchenSvg size={20} />}
              name={"Kitchen"}
            />
          </li>
          <li>
            <DetailsItem image={<icons.BedsSvg />} name={`${beds} beds`} />
          </li>
          <li>
            <DetailsItem image={<icons.AcAirSvg size={20} />} name={"AC"} />
          </li>
        </ul>
        <button
          type="button"
          className={css.buttonShowMore}
          onClick={handleOpenModal}
          aria-label={`Show more about ${name}`}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
