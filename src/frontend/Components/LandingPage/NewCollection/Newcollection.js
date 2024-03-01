import React from "react";
import json from "../../../../_mock/allDatas.json";
import "../LandingPage.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Newcollection = () => {
  let data = json.data;
  let newProducts = data.filter((values) => values.isNew === true).slice(0, 5);

  return (
    <section id="NewCollections_container">
      <div className="Title_sec">
        <h4>New Collections</h4>
        <Link href="#">
          See all <MdOutlineKeyboardArrowRight />
        </Link>
      </div>
      <div className="item_list_sec">
        {newProducts.map((values) => (
          <div className="item_list" key={values.id}>
            <div className={values.soldout ? "img_sec soldout" : "img_sec"}>
              <img src={values.imgPath} alt={values.productname} />
              {values.isNew && <img src="../images/newTag.png" alt="newtag" />}
              {values.isDeliveryFast && (
                <img src="../images/deliverygif.gif" alt="gif" />
              )}
            </div>
            <div className="img_content_sec">
              <Link href="#">{values.productname}</Link>

              <div className="star_price_sec">
                <div className="star_sec">
                  <IoIosStar
                    style={{
                      color: values.starCount >= 1 ? "#ffa200" : "#ddd",
                    }}
                  />
                  <IoIosStar
                    style={{
                      color: values.starCount >= 2 ? "#ffa200" : "#ddd",
                    }}
                  />
                  <IoIosStar
                    style={{
                      color: values.starCount >= 3 ? "#ffa200" : "#ddd",
                    }}
                  />
                  <IoIosStar
                    style={{
                      color: values.starCount >= 4 ? "#ffa200" : "#ddd",
                    }}
                  />
                  <IoIosStar
                    style={{
                      color: values.starCount > 4 ? "#ffa200" : "#ddd",
                    }}
                  />
                </div>

                <div className="price">
                  <span>
                    <FaIndianRupeeSign /> {values.strikePrice.toLocaleString()}
                  </span>
                  <span>
                    <FaIndianRupeeSign /> {values.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newcollection;
