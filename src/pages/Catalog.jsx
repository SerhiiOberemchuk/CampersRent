import { useEffect, useState } from "react";
import CamperCatalog from "../components/CamperCatalog/CamperCatalog";
import Container from "../components/Common/Container/Container";
import Section from "../components/Common/Section/Section";
import ModalFilter from "../components/ModalFiltersCamper/ModalFilters";
import SearchFiltersSidebar from "../components/SearchFiltersSidebar/SearchFiltersSidebar";
import css from "./Pages.module.css";
const Catalog = () => {
  const [widthViewport, setWidthViewport] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthViewport(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section>
      <Container>
        {widthViewport < 768 && <ModalFilter />}
        <div className={css.catalog}>
          {widthViewport >= 768 && <SearchFiltersSidebar />}
          <CamperCatalog />
        </div>
      </Container>
    </Section>
  );
};

export default Catalog;
