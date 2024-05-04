import { useSelector } from "react-redux";
import css from "./DetailsInformation.module.css";
import BookingCamper from "../BookingCamper/BookingCamper";
import Feauters from "../Feauters/Feauters";

const DetailsInformation = () => {
  const { camperMoreInfo } = useSelector((state) => state.campers);

  const { description } = camperMoreInfo;
  return (
    <div className={css.descriptionBlok}>
      <p className={css.descriptionText}>{description}</p>
      <div className={css.featureReviewsBlock}>
        <button type="button" className={css.buttonsFeaturesReviews}>
          Reviews
        </button>
        <button type="button" className={css.buttonsFeaturesReviews}>
          Features
        </button>
      </div>

      <div className={css.bottomBoxDescription}>
        <div className={css.featuresOrReviews}>{/* <Feauters /> */}</div>
        <div className={css.bookingForm}>
          <BookingCamper />
        </div>
      </div>
    </div>
  );
};

export default DetailsInformation;
