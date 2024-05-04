import { useState } from "react";
import css from "./BookingCamper.module.css";

const BookingCamper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");
  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };
  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handleChangeData = ({ target: { value } }) => {
    setData(value);
  };
  const handleChangeComment = ({ target: { value } }) => {
    setComment(value);
  };
  const handleSubmit = (e) => {
    e.target.reset();
  };
  return (
    <div>
      <h2 className={css.bookingCamperHeader}>Book your campervan now</h2>
      <p className={css.bookingCamperDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        action="subscribe"
        className={css.formBooking}
        onSubmit={handleSubmit}
      >
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.label}></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={css.input}
            required
            onChange={handleChangeName}
            value={name}
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
            onChange={handleChangeEmail}
            value={email}
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
            placeholder="Booking date"
            value={data}
            onChange={handleChangeData}
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="comment" className={css.label}></label>
          <textarea
            type="text"
            name="comment"
            id="comment"
            placeholder="Comment"
            className={css.inputComment}
            value={comment}
            onChange={handleChangeComment}
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
