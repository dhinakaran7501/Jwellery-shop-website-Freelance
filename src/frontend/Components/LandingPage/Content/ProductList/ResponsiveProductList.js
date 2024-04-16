import React from "react";
import "../../LandingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  handleApplyFilters,
  handleOtherCatergory,
  handlePriceRanges,
  handleStars,
} from "../../../../Redux/Slice";

const ResponsiveProductList = () => {
  const dispatch = useDispatch();
  let { ourProductsLists } = useSelector((state) => state.jwelleryShop);

  const handleproductlist = (value) => {
    dispatch(handleOtherCatergory(value));
    dispatch(handleStars(0));
    dispatch(handlePriceRanges([5000, 100000]));

    dispatch(handleApplyFilters());
  };
  return (
    <div id="ResponsiveProductList">
      {ourProductsLists.map((values, index) => (
        <Link
          className="item-list"
          key={index}
          to="/Products"
          onClick={() => handleproductlist(values.itemName)}
        >
          <div className="img_sec">
            <img src={values.itemImageURL} alt={values.itemName} />
          </div>
          <p>{values.itemName}</p>
        </Link>
      ))}
    </div>
  );
};

export default ResponsiveProductList;
