import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Spiner from "../Common/Spiner/Spiner";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={css.layoutSpiner}>
              <Spiner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
