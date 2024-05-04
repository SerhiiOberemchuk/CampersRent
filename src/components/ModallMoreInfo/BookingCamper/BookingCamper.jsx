import css from "./BookingCamper.module.css";

const BookingCamper = () => {
  return (
    <div>
      <h2 className={css.bookingCamperHeader}>Book your campervan now</h2>
      <p className={css.bookingCamperDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <form action=""></form>
      <button type="submit" className={css.buttonSubscribe}>
        Send
      </button>
    </div>
  );
};

export default BookingCamper;
