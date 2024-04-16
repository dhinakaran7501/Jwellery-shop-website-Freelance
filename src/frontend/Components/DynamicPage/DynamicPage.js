import React, { useState } from "react";
import "../DynamicPage/DynamicPage.scss";
import Subnavbar from "./SubNavbar/Subnavbar";
import LandingPageNavbar from "../LandingPage/Navbar/LandingPageNavbar";
import ProductsShow from "./Products/ProductsShow";
import Footer from "../Footer/Footer";

const DynamicPage = () => {
  return (
    <>
      <LandingPageNavbar />
      <Subnavbar />
      <ProductsShow />
      <Footer />
    </>
  );
};

export default DynamicPage;
