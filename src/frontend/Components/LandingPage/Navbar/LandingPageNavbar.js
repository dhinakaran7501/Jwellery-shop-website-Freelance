import React from "react";
import "../LandingPage.scss";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import AdbIcon from "@mui/icons-material/Adb";
import { BsFillHandbagFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPageNavbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store) => store.login);

  return (
    <>
      {/* Main navbar */}
      <section id="LandingPageNavbar">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/Products">Products</Link>
            <Link to="#">About Us</Link>
          </ul>
          <div className="Logo">
            <AdbIcon />
            <Link to="/">
              <h5 style={{ color: "white" }}>Company Name</h5>
            </Link>
          </div>
          <div className="search_section">
            <div className="wishlists" onClick={() => navigate("/wishlists")}>
              <BsFillHandbagFill /> Wishlist
            </div>
            {isLoggedIn ? (
              ""
            ) : (
              <div
                className="login_register"
                onClick={() => navigate("/login")}
              >
                <FaUser />
                <span>Register</span>
              </div>
            )}

            <div className="cart_sec" onClick={() => navigate("/cart")}>
              <BsCart3 /> Cart
            </div>
          </div>
        </nav>
      </section>

      {/* Responsive Navbar */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        id="navbar"
        style={{ backgroundColor: "#4F3267", color: "#fff" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand d-flex">
            <AdbIcon />
            <Link to="/">
              <h5>Company Name</h5>
            </Link>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Products" className="nav-link">
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/wishlists" className="nav-link">
                  <BsFillHandbagFill /> Wishlist
                </Link>
              </li>
              {isLoggedIn ? (
                ""
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <FaUser /> Login
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <BsCart3 /> Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingPageNavbar;
