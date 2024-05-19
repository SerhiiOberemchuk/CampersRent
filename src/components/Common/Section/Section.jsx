import css from "./Section.module.css";

const Section = ({ children, style }) => {
  return (
    <section className={`${css.pageSection} ${style || ""}`}>
      {children}
    </section>
  );
};

export default Section;
