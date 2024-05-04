import React, { useState } from "react";
import css from "./CamperCatalog.module.css";
import DetailsItem from "./DetailsItem/DetailsItem";
import AdultsSvg from "../../assets/Icons/AdultsSvg";
import Automatic from "../../assets/Icons/AutomaticSvg";
import PetrolSvg from "../../assets/Icons/PetrolSvg";
import KitchenSvg from "../../assets/Icons/KitchenSvg";
import BedsSvg from "../../assets/Icons/BedsSvg";
import AcAirSvg from "../../assets/Icons/AcAirSvg";
import PointLocationSvg from "../../assets/Icons/PointLocationSvg";
import StarSvg from "../../assets/Icons/StarSvg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  dellFromFavorite,
  showModal,
} from "../../redux/campers/campersSlice";
import HeartSvg from "../../assets/Icons/HeartSvg";

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
                <HeartSvg
                  fill={isFavorite ? "#E44848" : ""}
                  stroke={isFavorite ? "#E44848" : "#101828"}
                />
              </button>
            </div>
          </div>
          <div className={css.reviewsLocation}>
            <p className={css.reviews}>
              {<StarSvg />} {rating}({reviews} Reviews)
            </p>
            <p className={css.locationPoint}>
              {<PointLocationSvg />}
              {location}
            </p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.details}>
          <li>
            <DetailsItem image={<AdultsSvg />} name={`${adults} adults`} />
          </li>
          <li>
            <DetailsItem image={<Automatic size={20} />} name={transmission} />
          </li>
          <li>
            <DetailsItem image={<PetrolSvg />} name={engine} />
          </li>
          <li>
            <DetailsItem image={<KitchenSvg size={20} />} name={"Kitchen"} />
          </li>
          <li>
            <DetailsItem image={<BedsSvg />} name={`${beds} beds`} />
          </li>
          <li>
            <DetailsItem image={<AcAirSvg size={20} />} name={"AC"} />
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
