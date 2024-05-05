import Container from "../Common/Container/Container";
import css from "./HomeDescription.module.css";

const HomeDescription = () => {
  return (
    <Container>
      <div className={css.header}>
        <h1 className={css.mainHeading}>Welcome to CamperHub!</h1>
        <p className={css.introParagraph}>
          CamperHub is your trusted partner in the world of adventure and travel
          across Ukraine! We offer a wide range of campers for rent that will
          make your trips memorable, comfortable, and cozy.
        </p>
      </div>

      <div className={css.section}>
        <h2 className={css.sectionHeading}>Our Services Include:</h2>
        <ul className={css.serviceList}>
          <li className={css.listItem}>
            Wide Selection of Campers: From compact models for two people to
            spacious family motorhomes.
          </li>
          <li className={css.listItem}>
            Flexible Rental Terms: Rent for any duration, from a short trip to
            an extended expedition.
          </li>
          <li className={css.listItem}>
            Full Service Package: Equipped with modern technologies and
            accessories for convenience and comfort on the road.
          </li>
          <li className={css.listItem}>
            Affordable Prices: Competitive rates with transparent terms and no
            hidden fees.
          </li>
        </ul>
      </div>

      <div className={css.section}>
        <h2 className={css.sectionHeading}>Why Choose CamperHub?</h2>
        <ul className={css.benefitsList}>
          <li className={css.listItem}>
            Easy to Find and Book: Our website provides a catalog of campers,
            filtered by location, equipment, and type.
          </li>
          <li className={css.listItem}>
            Your Favorite Listings: Save camper listings to your favorites for
            easy access later.
          </li>
          <li className={css.listItem}>
            Trustworthy Experience: Our team of professionals ensures a
            hassle-free rental experience.
          </li>
          <li className={css.listItem}>
            Quality Campers: Our campers are always in excellent condition,
            ready for your next adventure.
          </li>
        </ul>
      </div>

      <div className={css.section}>
        <h2 className={css.sectionHeading}>
          Embark on Your Dream Journey with CamperHub!
        </h2>
        <p className={css.finalParagraph}>
          Book your camper today and start your next great adventure with us!
        </p>
      </div>
    </Container>
  );
};

export default HomeDescription;
