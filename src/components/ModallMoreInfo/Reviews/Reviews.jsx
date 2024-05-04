import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import StarSvg from "../../../assets/Icons/StarSvg";
import { nanoid } from "nanoid";

const Reviews = () => {
  const { camperMoreInfo } = useSelector((state) => state.campers);

  return (
    <ul className={css.reviewesList}>
      {camperMoreInfo.reviews.map((item) => (
        <li key={nanoid()} className={css.reviewsItems}>
          <div className={css.reviewsLogoBlock}>
            <div className={css.reviewesLogo}>
              <span className={css.logoLetter}>
                {item.reviewer_name.charAt(0)}
              </span>
            </div>
            <div className={css.nameStarsBlock}>
              <h2 className={css.reviewsName}>{item.reviewer_name}</h2>
              <span className={css.starsBlock}>
                {Array.from({ length: item.reviewer_rating }, () => (
                  <StarSvg size={16} key={nanoid()} />
                ))}
                {Array.from({ length: 5 - item.reviewer_rating }, () => (
                  <StarSvg size={16} color="#f2f4f7" key={nanoid()} />
                ))}
              </span>
            </div>
          </div>
          <p>{item.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
