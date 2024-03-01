import React from "react";
import api from "../../../../../_mock/allDatas.json";
import "../../LandingPage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductList1 = () => {
  let json = api.ourProductsList;

  // React Slick
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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

  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  return (
    <div id="OurProduct">
      <Slider {...settings}>
        {json.map((values, index) => (
          <div className="item-list" key={index}>
            <div className="img_sec">
              <img src={values.itemImageURL} alt={values.itemName} />
            </div>
            <p>{values.itemName}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList1;
