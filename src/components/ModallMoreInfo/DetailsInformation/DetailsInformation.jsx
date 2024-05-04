import { useSelector } from "react-redux";
import css from "./DetailsInformation.module.css";
import BookingCamper from "../BookingCamper/BookingCamper";
import Feauters from "../Feauters/Feauters";
import Reviews from "../Reviews/Reviews";
import { useState } from "react";

const DetailsInformation = () => {
  const [isFeature, setIsFeature] = useState(false);
  const [isReviews, setIsReviewse] = useState(false);
  const { camperMoreInfo } = useSelector((state) => state.campers);
  const togleIsFeatures = () => {
    setIsFeature(!isFeature);
    setIsReviewse(false);
  };
  const togleIsReviews = () => {
    setIsReviewse(!isReviews);
    setIsFeature(false);
  };
  const { description } = camperMoreInfo;
  return (
    <div className={css.descriptionBlok}>
      <p className={css.descriptionText}>{description}</p>
      <div className={css.featureReviewsBlock}>
        <button
          type="button"
          className={`${css.buttonsFeaturesReviews} ${
            isFeature ? css.active : ""
          }`}
          onClick={togleIsFeatures}
        >
          Features
        </button>
        <button
          type="button"
          className={`${css.buttonsFeaturesReviews} ${
            isReviews ? css.active : ""
          }`}
          onClick={togleIsReviews}
        >
          Reviews
        </button>
      </div>

      {(isFeature || isReviews) && (
        <div className={css.bottomBoxDescription}>
          <div className={css.featuresOrReviews}>
            {isFeature && <Feauters />}
            {isReviews && <Reviews />}
          </div>
          <div className={css.bookingForm}>
            <BookingCamper />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsInformation;
