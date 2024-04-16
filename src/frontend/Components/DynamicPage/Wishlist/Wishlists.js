import React from "react";
import LandingPageNavbar from "../../LandingPage/Navbar/LandingPageNavbar";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import emptyWishlists from "../../../../_mock/emptyWishlists.json";
import "./Wishlists.scss";
import { useSelector } from "react-redux";
import LottieAnimation from "../../../layouts/LottieAnimation";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Wishlists = () => {
  const { wishlist } = useSelector((store) => store.jwelleryShop);

  const handleItemRemove = (productname, category) => {
    // const item = wishlist.find(
    //   (values) =>
    //     values.category === category && values.productname === productname
    // );
  };

  return (
    <>
      <LandingPageNavbar />

      <section id="wishistsSection">
        <h4 className="heading">Your Products Wishlist</h4>
        <div className="wishlistsContainer">
          <div className="itemsLists">
            {wishlist.length > 0 ? (
              wishlist.map((values, index) => (
                <Link
                  to={`/Products/${values.productname}`}
                  className="items"
                  key={index}
                >
                  <div className="wishlist-product-actions">
                    <span className="category">{values.category}</span>
                    <Link
                      onClick={() =>
                        handleItemRemove(values.productname, values.category)
                      }
                    >
                      <IoCloseCircleOutline />
                    </Link>
                  </div>
                  <div className="image-section">
                    <img
                      src={values.imgPath}
                      alt={values.productname}
                      className="image"
                    />
                  </div>
                  <div className="content-section">
                    <p>{values.productname}</p>
                    <p>
                      <FaIndianRupeeSign />
                      {values.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="emptyWishlists">
                <LottieAnimation
                  animationData={emptyWishlists}
                  width={400}
                  height={400}
                />
                <p>
                  Your wishlist is currently empty. <br />
                  Start adding items to save them for later!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Wishlists;
