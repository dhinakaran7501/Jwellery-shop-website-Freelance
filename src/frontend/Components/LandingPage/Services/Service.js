import React from "react";
import "../LandingPage.scss";

const ServicePage = () => {
  return (
    <section id="ServicePage_container">
      <div className="servicePage">
        <div className="delivery_sec">
          <div className="img">
            <img src="../images/delivery.png" alt="Delivery" />
          </div>
          <h6>100% Certified & Free Shipping</h6>
        </div>
        <div className="shipping_sec">
          <div className="img">
            <img src="../images/24-hours-support.png" alt="24/7 support" />
          </div>
          <h6>24/7 Customer Service</h6>
        </div>
        <div className="offer_sec">
          <div className="img">
            <img src="../images/loudspeaker.png" alt="Announcemnts" />
          </div>
          <h6>Festival Offers</h6>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
