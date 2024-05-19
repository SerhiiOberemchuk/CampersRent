import Section from "../components/Common/Section/Section";
import HomeDescription from "../components/HomeDescription/HomeDescription";
import css from "./Pages.module.css";

const Home = () => {
  return (
    <Section style={css.section}>
      <HomeDescription />
    </Section>
  );
};

export default Home;
