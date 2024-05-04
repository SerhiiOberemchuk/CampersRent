import css from "./DetailsItem.module.css";

const DetailsItem = ({ image, name }) => {
  return (
    <span className={css.details}>
      {image}
      <p>{name}</p>
    </span>
  );
};

export default DetailsItem;
