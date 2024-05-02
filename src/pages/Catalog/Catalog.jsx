import CamperCatalog from "../../components/CamperCatalog/CamperCatalog";
import Container from "../../components/Container/Container";
import SearchFiltersSidebar from "../../components/SearchFiltersSidebar/SearchFiltersSidebar";
import css from "./Catalog.module.css";
const Catalog = () => {
  return (
    <Container>
      <div className={css.catalog}>
        <SearchFiltersSidebar />
        <CamperCatalog />
      </div>
    </Container>
  );
};

export default Catalog;
