import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import css from "./FavoritesList.module.css";
import CamperCard from "../CamperCatalog/CamperCard";
import Container from "../Common/Container/Container";
import ModalMoreInfo from "../ModallMoreInfo/ModalMoreInfo";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const { arrayFavoriteCampers, isModallMoreInfo } = useSelector(
    (state) => state.campers
  );

  return (
    <Container>
      {arrayFavoriteCampers.length === 0 ? (
        <p>
          Please go to the{" "}
          <Link to="/catalog" className={css.linkCatalog}>
            Catalog page
          </Link>{" "}
          and choose your favorite campers to add to this list.
        </p>
      ) : (
        <ul className={css.favoriteList}>
          {arrayFavoriteCampers.map((item) => (
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
        </ul>
      )}
      {isModallMoreInfo && <ModalMoreInfo />}
    </Container>
  );
};

export default FavoritesList;
