import React from "react";
import api from "../../../../../_mock/allDatas.json";
import "../../LandingPage.scss";

const ResponsiveProductList = () => {
  let json = api.ourProductsList;
  return (
    <div id="ResponsiveProductList">
      {json.map((values, index) => (
        <div className="item-list" key={index}>
          <div className="img_sec">
            <img src={values.itemImageURL} alt={values.itemName} />
          </div>
          <p>{values.itemName}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveProductList;
