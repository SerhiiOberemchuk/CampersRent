import React from "react";
import { useSelector } from "react-redux";
import CamperCard from "../CamperCatalog/CamperCard";
import { nanoid } from "nanoid";

const FavoritesList = () => {
  const { arrayFavoriteCampers } = useSelector((state) => state.campers);

  return (
    <ul>
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
  );
};

export default FavoritesList;
