import React from "react";
import "../../LandingPage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleApplyFilters,
  handleCategorys,
  handleOtherCatergory,
  handlePriceRanges,
  handleStars,
} from "../../../../Redux/Slice";
import { Link } from "react-router-dom";

const ProductList1 = () => {
  let { ourProductsLists, category, star, priceRange } = useSelector(
    (state) => state.jwelleryShop
  );
  const dispatch = useDispatch();
  // React Slick
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleproductlist = (value) => {
    dispatch(handleOtherCatergory(value));
    dispatch(handleStars(0));
    dispatch(handlePriceRanges([5000, 100000]));

    dispatch(handleApplyFilters());
  };

  return (
    <div id="OurProduct">
      <Slider {...settings}>
        {ourProductsLists.map((values, index) => (
          <Link
            to="/Products"
            onClick={() => handleproductlist(values.itemName)}
            key={index}
          >
            <div className="item-list">
              <div className="img_sec">
                <img src={values.itemImageURL} alt={values.itemName} />
              </div>
              <p>{values.itemName}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList1;
