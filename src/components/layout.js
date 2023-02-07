import React from "react";
import * as Styles from "./layout.module.css";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={Styles.layoutMain}>
      <title>{pageTitle}</title>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
