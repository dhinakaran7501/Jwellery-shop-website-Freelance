import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../IndividualProducts/Oneproduct.scss";
import {
  addToCart,
  getOneProduct,
  handleApplyFilters,
  handleCategorys,
  handleOtherCatergory,
  handlePriceRanges,
  handleReviews,
  handleStars,
  handleWishlist,
} from "../../../Redux/Slice";
import LandingPageNavbar from "../../LandingPage/Navbar/LandingPageNavbar";
import Footer from "../../Footer/Footer";
import { MdLocalOffer } from "react-icons/md";
import { Button, Rating } from "@mui/material";
import Card from "../../../layouts/Card";
import ServicePage from "../../LandingPage/Services/Service";
import Star from "../../../../utils/Star";
import { FaRegHeart, FaShareAlt, FaHeart } from "react-icons/fa";
import ShareButtons from "../../../../utils/ShareButtons";
import Accordion from "react-bootstrap/Accordion";
import Review from "../../../layouts/Review/Review";
import ImageMagnify from "../../../../utils/ImageMagnify";
import { GoHeartFill, GoHeart } from "react-icons/go";
import RecentlyViewed from "../../LandingPage/RecentlyViewed/RecentlyViewed";
import ReviewBox from "../Reviewbox/ReviewBox";

export const OneProduct = ({ url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productname } = useParams();

  const {
    initdata,
    dataView,
    ourProductsLists,
    category,
    priceRange,
    star,
    wishlist,
    reviews,
  } = useSelector((store) => store.jwelleryShop);

  useEffect(() => {
    if (productname) {
      dispatch(getOneProduct(productname));
    }
  }, [productname]);

  let obj = initdata?.category;

  let filteredData = dataView
    .filter((values) => obj === values.category)
    .slice(0, 5);

  const addcart = (values) => {
    dispatch(addToCart(values));
    navigate("/cart");
  };
  // for image changeing
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  const handleproducts = (value) => {
    dispatch(handleOtherCatergory(value));
    dispatch(handleStars(0));
    dispatch(handlePriceRanges([5000, 100000]));

    dispatch(handleApplyFilters());
  };
  const [selectedTab, setSelectedTab] = useState(0);
  // social media sharing
  const currentURL = url || window.location.href;
  const [shareBtn, setShareBtn] = useState(false);
  const handleShare = () => {
    setShareBtn((shareBtn) => !shareBtn);
  };
  // for wishlist there or not
  const isProductInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  console.log(initdata);
  return (
    <>
      <LandingPageNavbar />

      <section id="Subnavbar_container">
        <div className="Subnavbar">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Link to="/Products">
              <Tabs
                value={selectedTab}
                onChange={(event, newValue) => setSelectedTab(newValue)}
              >
                {ourProductsLists.map((values, index) => (
                  <Tab
                    key={index}
                    // value={index}
                    label={values.itemName}
                    onClick={() => handleproducts(values.itemName)}
                  />
                ))}
              </Tabs>
            </Link>
          </Box>
        </div>
      </section>

      <div>
        {Object.keys(initdata).length !== 0 && (
          <div id="onemain">
            <div className="leftbox">
              <div className="verticalline">
                {initdata.details[0].img.map((values, index) => (
                  <div
                    key={index}
                    className="smallimg-sec"
                    onClick={() => handleImageClick(index)}
                  >
                    <img className="smallimg" src={values} alt="" />
                  </div>
                ))}
              </div>
              <div className="imgdivbox">
                {/* <img src={initdata.details[0].img[selectedImageIndex]} alt="" /> */}
                <ImageMagnify
                  image={initdata.details[0].img[selectedImageIndex]}
                />
              </div>
            </div>

            <div className="rightbox">
              <div
                style={{
                  color: "gray",
                  fontSize: "12px",
                  textTransform: "capitalize",
                }}
              >
                <Link to="/">home</Link> {">"}{" "}
                <Link to="/Products">Products</Link> {">"} {initdata.category}
              </div>
              <div style={{ position: "relative" }}>
                <h2 className="title">{initdata.productname}</h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    fontSize: "20px",
                    position: "absolute",
                    right: "-20%",
                    top: "13%",
                    cursor: "pointer",
                  }}
                >
                  {isProductInWishlist(initdata) ? (
                    <GoHeartFill
                      style={{ fontSize: "xx-large", color: "red" }}
                      onClick={() => dispatch(handleWishlist(initdata))}
                      className="heart-icon"
                    />
                  ) : (
                    <GoHeart
                      style={{ fontSize: "xx-large", color: "gray" }}
                      onClick={() => dispatch(handleWishlist(initdata))}
                      className="heart-icon"
                    />
                  )}
                  {/* {shareBtn ? (
                    <ShareButtons
                      shareBtn={shareBtn}
                      handleShare={handleShare}
                      url={currentURL}
                      title="Discover Exquisite Jewelry at [Your Website Name]"
                    />
                  ) : (
                    <div onClick={() => handleShare()}>
                      <FaShareAlt className="share-icon" />
                      Share
                    </div>
                  )} */}
                </div>
              </div>
              <Rating
                name="read-only"
                value={initdata.starCount}
                readOnly
                precision={0.5}
                style={{ fontSize: "18px" }}
              />

              <div className="pricedivone">
                <span>₹{initdata.price.toLocaleString()}</span>
                <span>₹{initdata.strikePrice.toLocaleString()}</span>
                <span>{initdata.details[0].offerCount}%off</span>
              </div>
              <div className="availableOffers">
                <h5 style={{ marginBottom: "5px" }}>Available offers:</h5>
                <div className="availableoffers-content">
                  {initdata.details[0].availableOffers.map((values, index) => (
                    <div key={index}>
                      <span>
                        <MdLocalOffer style={{ color: "#2e7d32" }} />
                      </span>
                      <span> {values}</span>
                      <span
                        style={{
                          color: "var(--site-blue)",
                          fontWeight: "500",
                          marginLeft: "5px",
                        }}
                      >
                        T&C
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="buttbox">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    addcart(initdata);
                  }}
                >
                  Add To cart
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="product-cont">
          <div className="product-detail-cont">
            <h2 className="product-details-h2">Product Details</h2>
            <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="custom-header">
                  Metal Information
                </Accordion.Header>
                <Accordion.Body>
                  {initdata.details && initdata.details.length > 0 && (
                    <div>
                      <div className="row">
                        <p className="row-heading">Metal:</p>
                        <p>{initdata.details[0].metal}</p>
                      </div>
                      <div className="row">
                        <p className="row-heading">Metal Purity:</p>
                        <p>{initdata.details[0].metalPurity}</p>
                      </div>
                      <div className="row">
                        <p className="row-heading">Product Weight (Approx):</p>
                        <p>{initdata.details[0].productWeight}</p>
                      </div>
                      <div className="row">
                        <p className="row-heading">Metal Certification:</p>
                        <p>{initdata.details[0].metalCertification}</p>
                      </div>
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Product Information</Accordion.Header>
                <Accordion.Body>
                  {initdata.details && initdata.details.length > 0 && (
                    <div>
                      <div className="row">
                        <p className="row-heading">Product Code:</p>
                        <p>{initdata.details[0].productCode}</p>
                      </div>
                      <div className="row">
                        <p className="row-heading">Brand:</p>
                        <p>{initdata.details[0].brand}</p>
                      </div>
                      <div className="row">
                        <p className="row-heading">Bandwidth (mm):</p>
                        <p>{initdata.details[0].bandwidth}</p>
                      </div>
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Services</Accordion.Header>
                <Accordion.Body>
                  {initdata.details && initdata.details.length > 0 && (
                    <div>
                      <div className="row">
                        <p className="row-heading">Expected Shipping Date:</p>
                        <p>{initdata.details[0].expectedShippingDate}</p>
                      </div>
                      <div className="row">
                        <p className="row-heading">Lifetime Exchange:</p>
                        <p>{initdata.details[0].lifetimeExchange}</p>
                      </div>
                      <div className="row">
                        <p className="row-heading">Lifetime Buyback:</p>
                        <p>{initdata.details[0].lifetimeBuyback}</p>
                      </div>
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <ReviewBox ourProductsLists={ourProductsLists} />
        </div>
        {reviews && <Review reviews={reviews} />}
        <div className="relatedProducts">
          <h4>Related Products: </h4>
          <Card obj={filteredData} />
        </div>
        <ServicePage />
        <RecentlyViewed />
      </div>
      <Footer />
    </>
  );
};
