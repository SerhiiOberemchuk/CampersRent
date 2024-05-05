import css from "./Section.module.css";

const Section = ({ children }) => {
  return <section className={css.pageSection}>{children}</section>;
};

export default Section;
