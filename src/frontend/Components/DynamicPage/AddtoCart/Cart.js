import React from "react";
import "./cart.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, removecart } from "../../../Redux/Slice";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router";

// Lottie Animation
import LottieAnimation from "../../../layouts/LottieAnimation";
import emptycart from "../../../../_mock/emptycart.json";
import arrow from "../../../../_mock/arrow.json";
import LandingPageNavbar from "../../LandingPage/Navbar/LandingPageNavbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((store) => store.jwelleryShop);

  const totalPrice = cart.reduce((accumulator, currentItem) => {
    const productPrice = currentItem.price * currentItem.quantity;
    return accumulator + productPrice;
  }, 0);

  const youSaved = cart.reduce((accumulator, currentItem) => {
    const productPrice = currentItem.strikePrice - currentItem.price;
    return accumulator + Math.abs(productPrice * currentItem.quantity);
  }, 0);

  const totalCount = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);

  const handlePay = () => {
    // console.log(totalPrice);
    if (totalPrice <= 69) {
      alert("Enter the amount");
    } else {
      var options = {
        key: "",
        key_secret: "",
        amount: totalPrice * 100,
        currency: "INR",
        name: "Jwellery Shop",

        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Dheena",
          email: "dhinakings123@gmail.com",
          contact: "7550338725",
        },
        notes: {
          address: "Razorpay corporate office",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <>
      <LandingPageNavbar />
      <section id="cart-section">
        {cart.length !== 0 ? (
          <div className="cartContent-container">
            <h4>Shopping Cart ({cart.length})</h4>
            <div className="whole-items">
              <div className="cartContent">
                <div className="items-list">
                  {cart.map((values, index) => (
                    <div className="items" key={index}>
                      <div className="items-content">
                        <div className="image-container">
                          <div
                            className="img-div"
                            onClick={() =>
                              navigate(`/Products/${values.productname}`)
                            }
                          >
                            <img
                              src={values.imgPath}
                              alt={values.productname}
                            />
                          </div>
                        </div>
                        <div className="content-container">
                          <div className="top-container">
                            <p className="item-product-name">
                              {values.productname}
                            </p>
                            <p className="cart-item-price">
                              ₹{values.price.toLocaleString()}
                              <span className="strikethrough">
                                ₹{values.strikePrice.toLocaleString()}
                              </span>
                              <span className="discountprice">
                                Save ₹
                                {(
                                  values.strikePrice - values.price
                                ).toLocaleString()}
                              </span>
                            </p>
                            <p className="product-id">{values.productCode}</p>
                          </div>
                          <div className="bottom-container">
                            <div className="button-count">
                              <>
                                <p>{values.category}</p>
                                <div>
                                  <button
                                    className="cart-decrement-btn"
                                    onClick={() =>
                                      dispatch(decrement(values.id))
                                    }
                                  >
                                    -
                                  </button>
                                  <input
                                    value={values.quantity}
                                    className="cart-input"
                                    disabled
                                  ></input>
                                  <button
                                    className="cart-increment-btn"
                                    onClick={() =>
                                      dispatch(increment(values.id))
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </>
                            </div>
                          </div>
                        </div>
                        <div
                          className="removeCart-icon"
                          onClick={() => dispatch(removecart(values.id))}
                        >
                          <FaCircleXmark />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cartContent-priceDetails">
                <div className="priceDetails">
                  <div className="priceDetails-splitWise">
                    <p className="subtotal">
                      Subtotal{" "}
                      <span className="price-values">
                        ₹{totalPrice.toLocaleString()}
                      </span>
                    </p>
                    <p className="discount">
                      You Saved{" "}
                      <span className="price-values">
                        - ₹{youSaved.toLocaleString()}
                      </span>
                    </p>
                    <p className="total-items">
                      Total-items
                      <span className="price-values">
                        <span className="free">{totalCount}</span>
                      </span>
                    </p>
                    <p className="shipping-charge">
                      Shipping Fee
                      <span className="price-values">
                        <span className="free">
                          {totalPrice > 10000 ? "Free" : 100}
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="priceDetails-totalPrice">
                    <p className="price-breakup-final">
                      Total Cost{" "}
                      <span className="price-values">
                        ₹{(totalPrice - youSaved).toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="placeOrder-btn">
                  <Link onClick={handlePay}>Place Order</Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="emptyCart-container">
            <LottieAnimation
              animationData={emptycart}
              width={300}
              height={300}
            />
            <p>There are no products in your cart! </p>
            <LottieAnimation animationData={arrow} width={50} height={50} />
            <button
              className="emptycart-startshopping"
              onClick={() => navigate("/")}
            >
              Start Shopping
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
