import React from "react";
import "../LandingPage.scss";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const LandingPageNavbar = () => {
  return (
    <>
      {/* Main navbar */}
      <section id="LandingPageNavbar">
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <div className="Logo">
            <AdbIcon />
            <h5>Company Name</h5>
          </div>
          <div className="search_section">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {/* <div className="input_box">
              <input type="text" placeholder="Search your product..." />
              <IoSearchSharp />
            </div> */}
            <div className="login_register">
              <FaUser />
              <span>Register</span>
            </div>
            <div className="cart_sec">
              <BsCart3 /> Cart
            </div>
          </div>
        </nav>
      </section>

      {/* Responsive Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex" href="#">
            <AdbIcon />
            <h5>Company Name</h5>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  <FaUser /> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  <BsCart3 /> Cart
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingPageNavbar;
