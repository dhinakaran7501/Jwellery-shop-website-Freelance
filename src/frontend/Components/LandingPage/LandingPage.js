import React from "react";
import LandingPageNavbar from "./Navbar/LandingPageNavbar";
import Carousel from "./Content/Carousel/Carousel";
import ProductList1 from "./Content/ProductList/ProductList";
import Newcollection from "./NewCollection/Newcollection";
import ServicePage from "./Services/Service";
import Footer from "../Footer/Footer";
import ResponsiveProductList from "./Content/ProductList/ResponsiveProductList";

const LandingPage = () => {
  return (
    <>
      <LandingPageNavbar />
      <Carousel />
      <ProductList1 />
      <ResponsiveProductList />
      <Newcollection />
      <ServicePage />
      <Newcollection />
      <Footer />
    </>
  );
};

export default LandingPage;
