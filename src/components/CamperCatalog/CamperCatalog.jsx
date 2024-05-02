import css from "./CamperCatalog.module.css";
import camperImage from "/camper1.jpg";
const CamperCatalog = () => {
  return (
    <div className={css.campersBox}>
      <div className={css.camperCard}>
        <img src={camperImage} alt="camper" />
        <div className={css.camperInformationSection}>
          <div className={css.headerCardInfo}>
            <div className={css.namePriceBlock}>
              <h2 className={css.modelCamper}>name</h2>
              <div className={css.price}>
                <p>price</p>
                <label htmlFor="model_id"></label>
                <input type="checkbox" name="model" id="model_id" />
              </div>
            </div>
            <div className={css.reviewsLocation}>
              <p>reviews</p>
              <p>location</p>
            </div>
          </div>
          <p>text info</p>
          <p>technical info</p>
          <button type="button" className={css.buttonShowMore}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CamperCatalog;
