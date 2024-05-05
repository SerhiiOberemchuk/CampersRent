import CamperCatalog from "../components/CamperCatalog/CamperCatalog";
import Container from "../components/Common/Container/Container";
import Section from "../components/Common/Section/Section";
import SearchFiltersSidebar from "../components/SearchFiltersSidebar/SearchFiltersSidebar";
import css from "./Pages.module.css";
const Catalog = () => {
  return (
    <Section>
      <Container>
        <div className={css.catalog}>
          <SearchFiltersSidebar />
          <CamperCatalog />
        </div>
      </Container>
    </Section>
  );
};

export default Catalog;
