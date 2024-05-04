import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home/Home.jsx";
import Catalog from "../src/pages/Catalog/Catalog.jsx";
import Favorites from "../src/pages/Favorites/Favorites.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
