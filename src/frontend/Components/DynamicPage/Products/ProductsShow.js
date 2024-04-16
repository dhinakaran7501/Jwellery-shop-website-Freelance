import React, { useState } from "react";
import "../DynamicPage.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import json from "../../../../_mock/allDatas.json";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearall,
  handleApplyFilters,
  handleCategorys,
  handlePriceRanges,
  handleStars,
} from "../../../Redux/Slice";
import Card from "../../../layouts/Card";

const ProductsShow = () => {
  let dispatch = useDispatch();
  // const navigate = useNavigate();

  const marks = [
    {
      value: 5000,
      label: "",
    },
    {
      value: 15000,
      label: "",
    },
    {
      value: 25000,
      label: "",
    },
    {
      value: 35000,
      label: "",
    },
    {
      value: 45000,
      label: "",
    },
    {
      value: 55000,
      label: "",
    },
    {
      value: 65000,
      label: "",
    },
    {
      value: 75000,
      label: "",
    },
    {
      value: 85000,
      label: "",
    },
    {
      value: 95000,
      label: "",
    },
    {
      value: 100000,
      label: "",
    },
  ];

  const ratingList = [
    {
      id: 1,
      value: 1,
      label: "1🌟",
    },
    {
      id: 2,
      value: 2,
      label: "2🌟",
    },
    {
      id: 3,
      value: 3,
      label: "3🌟",
    },
    {
      id: 4,
      value: 4,
      label: "4🌟",
    },
    {
      id: 5,
      value: 5,
      label: "5🌟",
    },
  ];
  let { dataView, category, star, priceRange } = useSelector(
    (state) => state.jwelleryShop
  );

  const handleChange = (event, newValue) => {
    dispatch(handlePriceRanges(newValue));
  };

  // apply the function
  const handlecategory = (itemName) => {
    dispatch(handleCategorys(itemName));
  };

  const handlestar = (value) => {
    dispatch(handleStars(value));
  };

  const handleApply = () => {
    const newObj = {
      category,
      priceRange,
      star,
    };

    dispatch(handleApplyFilters(newObj));
  };
  const handleClearAll = () => {
    dispatch(handleCategorys([]));
    dispatch(handleStars(0));
    dispatch(handlePriceRanges([5000, 100000]));
    dispatch(clearall());
  };

  return (
    <section id="ProductsShow_container">
      <div className="filter_section">
        <div className="filterTitle-sec">
          <p>Filters</p>
          <span onClick={() => handleClearAll()}> Clear All</span>
        </div>
        <div className="Category_sec">
          <p>Category</p>
          <div style={{ marginLeft: "15px" }}>
            {json.ourProductsList.map((values, index) => (
              <div key={index} className="category-items">
                <input
                  type="checkbox"
                  name={values.itemName}
                  id={values.itemName}
                  checked={category.includes(values.itemName)}
                  onChange={() => handlecategory(values.itemName)}
                />
                <label htmlFor={values.itemName}>{values.itemName}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="price_range_sec">
          <p>Price Range(&#8377;)</p>
          <Box sx={{ width: 300 }} style={{ width: "100%" }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={priceRange}
              onChange={handleChange}
              valueLabelDisplay="auto"
              marks={marks}
              step={10000}
              min={5000}
              max={100000}
              color="secondary"
            />
          </Box>
          <div className="pricerange-count-show">
            <span>{priceRange[0].toLocaleString()}</span>
            to
            <span>{priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div className="Star_Ratings">
          <p style={{ marginBottom: "15px" }}>Star Ratings</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            {ratingList.map((values) => (
              <Button
                key={values.id}
                variant="contained"
                style={{
                  backgroundColor:
                    star === values.value ? "#4F3267" : "transparent",
                  color: star === values.value ? "#fff" : "#000",
                  border:
                    star === values.value
                      ? "1px #4f3267 solid"
                      : "1px solid #4F3267",
                  fontWeight: "700",
                }}
                onClick={() => handlestar(values.value)}
              >
                {values.label}
              </Button>
            ))}
          </div>
        </div>
        <button onClick={handleApply} className="Apply-button">
          Apply Filters
        </button>
      </div>
      <div id="ProductsShow_section">
        <Card obj={dataView} />
      </div>
    </section>
  );
};

export default ProductsShow;
