import React from "react";
import "../DynamicPage.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { handleFilteritems, handlePriceRanges } from "../../../Redux/Slice";
import SecondNavbar from "./SecondNavbar";

const Subnavbar = () => {
  let dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    let itemListname;
    switch (newValue) {
      case 0:
        itemListname = "AllProducts";
        break;
      case 1:
        itemListname = "New Arrivals";
        break;
      case 2:
        itemListname = "Fast Delivery";
        break;
      case 3:
        itemListname = "Currently Available";
        break;
      default:
        itemListname = "AllProducts";
    }

    dispatch(handleFilteritems(itemListname));

    dispatch(handlePriceRanges([5000, 100000]));
  };

  return (
    <>
      <section id="Subnavbar_container">
        <div className="Subnavbar">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="All" />
              <Tab label="New Arrivals" />
              <Tab label="Fast Delivery" />
              <Tab label="Currently Available" />
            </Tabs>
          </Box>
        </div>
      </section>
    </>
  );
};

export default Subnavbar;
