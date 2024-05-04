import css from "./BookingCamper.module.css";

const BookingCamper = () => {
  return (
    <div>
      <h2 className={css.bookingCamperHeader}>Book your campervan now</h2>
      <p className={css.bookingCamperDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <form action="subscribe">
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.label}></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="email" className={css.label}></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="data" className={css.label}></label>
          <input
            type="date"
            name="data"
            id="data"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="comment" className={css.label}></label>
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Comment"
            className={css.input}
          />
        </div>

        <button type="submit" className={css.buttonSubscribe}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingCamper;
