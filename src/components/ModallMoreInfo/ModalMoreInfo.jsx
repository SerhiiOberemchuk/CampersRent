import { useDispatch, useSelector } from "react-redux";
import css from "./ModalMoreInfo.module.css";
import { closeModal } from "../../redux/campers/campersSlice";
import { useEffect } from "react";
import StarSvg from "../../assets/Icons/StarSvg";
import PointLocationSvg from "../../assets/Icons/PointLocationSvg";
import CloseIconSvg from "../../assets/Icons/CloseIconSvg";
import DetailsInformation from "./DetailsInformation/DetailsInformation";

const ModalMoreInfo = () => {
  const dispatch = useDispatch();
  const { camperMoreInfo } = useSelector((state) => state.campers);

  function closeModalScroll() {
    document.body.classList.remove("body-no-scroll");
  }
  useEffect(() => {
    const handlePressKey = (e) => {
      if (e.code === "Escape") {
        dispatch(closeModal());
        closeModalScroll();
      }
    };
    window.addEventListener("keydown", handlePressKey);
    return () => window.removeEventListener("keydown", handlePressKey);
  }, [dispatch]);

  console.log(camperMoreInfo);
  const { gallery, name, price, rating, reviews, location } = camperMoreInfo;
  return (
    <div
      className={css.overlay}
      onClick={() => {
        dispatch(closeModal());
        closeModalScroll();
      }}
    >
      <div className={css.modalMore} onClick={(e) => e.stopPropagation()}>
        <div className={css.namePriceBlock}>
          <div className={css.headerLine}>
            <h2 className={css.modelCamper}>{name}</h2>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModal());
                closeModalScroll();
              }}
              className={css.buttonCloseModal}
            >
              <CloseIconSvg />
            </button>
          </div>
          <div className={css.reviewsLocation}>
            <p className={css.reviews}>
              {<StarSvg />} {rating}({reviews.length} Reviews)
            </p>
            <p className={css.locationPoint}>
              {<PointLocationSvg />}
              {location}
            </p>
          </div>
          <p className={css.price}>€{price.toFixed(2)}</p>
        </div>
        <div className={css.scrollBox}>
          <ul className={css.imageList}>
            {gallery.map((item) => (
              <li key={item}>
                <img src={item} alt="camper" className={css.image} />
              </li>
            ))}
          </ul>
          <DetailsInformation />
        </div>
        {/* 
          
         
          <ul className={css.details}>
            <li>
              <DetailsItem image={<AdultsSvg />} name={`${adults} adults`} />
            </li>
            <li>
              <DetailsItem
                image={<Automatic size={20} />}
                name={transmission}
              />
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
        </div> */}
      </div>
    </div>
  );
};

export default ModalMoreInfo;
