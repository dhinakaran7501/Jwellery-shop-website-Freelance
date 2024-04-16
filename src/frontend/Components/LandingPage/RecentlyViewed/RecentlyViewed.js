import React from "react";
import "../LandingPage.scss";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import Card from "../../../layouts/Card";

const Newcollection = () => {
  let { recentlyViewedProducts } = useSelector((store) => store.jwelleryShop);
  let products = recentlyViewedProducts.slice(0, 5);

  return (
    <section id="NewCollections_container">
      <div className="Title_sec">
        <h4>Recently Viewed</h4>
        <Link>
          See all <MdOutlineKeyboardArrowRight />
        </Link>
      </div>

      <Card obj={products} />
    </section>
  );
};

export default Newcollection;
