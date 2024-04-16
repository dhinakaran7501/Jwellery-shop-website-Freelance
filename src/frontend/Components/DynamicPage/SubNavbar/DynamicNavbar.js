import React from "react";
import { Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const SecondNavbar = () => {
  return (
    <section id="Navbar_container">
      <div className="navbar">
        <Link to="/" className="Logo">
          <AdbIcon />
          <h5>Company Name</h5>
        </Link>
        <div className="search_section">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="register_cart">
          <div className="login_register">
            <FaUser />
            <span>Register</span>
          </div>
          <div className="cart_sec">
            <BsCart3 /> Cart
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondNavbar;
