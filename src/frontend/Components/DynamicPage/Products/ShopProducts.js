import React, { useState } from "react";
import "../DynamicPage.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../layouts/Card";
import Footer from "../../Footer/Footer";
import ServicePage from "../../LandingPage/Services/Service";
import DarkVariantExample from "../../LandingPage/Content/Carousel/Carousel";
import LandingPageNavbar from "../../LandingPage/Navbar/LandingPageNavbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { handleSortitems } from "../../../Redux/Slice";

const ShopProduct = () => {
  let dispatch = useDispatch();

  let { dataView, category, star, priceRange } = useSelector(
    (state) => state.jwelleryShop
  );
  const Nav = [
    "Popularity",
    "Sort A-Z",
    "Price:Low to High",
    "Price:High to Low",
  ];
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);

    let itemListname;
    switch (newValue) {
      case 0:
        itemListname = "Popularity";
        break;
      case 1:
        itemListname = "A-Z";
        break;
      case 2:
        itemListname = "Low to High";
        break;
      case 3:
        itemListname = "High to Low";
        break;
      default:
        itemListname = "Popularity";
    }
    dispatch(handleSortitems(itemListname));
  };
  return (
    <div>
      <LandingPageNavbar />
      <DarkVariantExample />
      <section id="Subnavbar_container">
        <div className="Subnavbar second-sub-nav">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Popularity" />
              <Tab label="Sort A-Z" />
              <Tab label="Price:Low to High" />
              <Tab label="Price:High to Low" />
            </Tabs>
          </Box>
        </div>
      </section>
      <section id="ProductsShow_container">
        <div id="ProductsShow_section">
          <Card obj={dataView} />
        </div>
      </section>
      <ServicePage />
      <Footer />
    </div>
  );
};

export default ShopProduct;
