import React from "react";
import LandingPageNavbar from "./Navbar/LandingPageNavbar";
import Carousel from "./Content/Carousel/Carousel";
import ProductList1 from "./Content/ProductList/ProductList";
import Newcollection from "./NewCollection/Newcollection";
import ServicePage from "./Services/Service";
import Footer from "../Footer/Footer";
import ResponsiveProductList from "./Content/ProductList/ResponsiveProductList";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import RecentlyViewed from "./RecentlyViewed/RecentlyViewed";

const LandingPage = () => {
  return (
    <>
      <LandingPageNavbar />
      <Carousel />
      <ProductList1 />
      <ResponsiveProductList />
      <Newcollection />
      <ServicePage />
      <RecentlyViewed />
      <Footer />
    </>
  );
};

export default LandingPage;
