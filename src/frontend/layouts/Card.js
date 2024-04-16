import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from "@mui/material/Rating";

const Card = ({ obj }) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="item_list_sec">
        {obj?.map((values, index) => (
          <Link
            className="item_list"
            key={index}
            onClick={() =>
              navigate(
                values.soldout === false && `/Products/${values.productname}`
              )
            }
          >
            <div className="img_sec">
              <img
                src={values.imgPath}
                alt={values.productname}
                className={values.soldout ? "image soldout" : "image"}
              />
              {values.soldout === true && (
                <img
                  src={"../images/soldout.png"}
                  alt={values.productname}
                  className="soldout-image"
                />
              )}
              {values.isNew && values.soldout === false && (
                <img
                  src="../images/newTag.png"
                  alt="newtag"
                  className="newNameTag"
                />
              )}
              {values.isDeliveryFast && values.soldout === false && (
                <img
                  src="../images/deliverygif.gif"
                  alt="gif"
                  className="deliverygif"
                />
              )}
            </div>
            <div className="img_content_sec">
              <Link>{values.productname}</Link>

              <div className="star_price_sec">
                <div className="star_sec">
                  <Rating
                    name="read-only"
                    value={values.starCount}
                    readOnly
                    precision={0.5}
                    style={{ fontSize: "18px" }}
                  />
                </div>

                {values.price && values.soldout === false ? (
                  <div className="price">
                    {values.strikePrice && (
                      <span className="strikeprice">
                        <FaIndianRupeeSign />
                        {values.strikePrice.toLocaleString()}
                      </span>
                    )}

                    <span className="price">
                      <FaIndianRupeeSign /> {values.price.toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <div className="soldout-name">
                    <span>Sold out</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Card;
