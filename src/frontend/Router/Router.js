import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import DynamicPage from "../Components/DynamicPage/DynamicPage";
import ScrollTop from "../../utils/ScrollTop";
import { OneProduct } from "../Components/DynamicPage/IndividualProducts/OneProduct";
import Cart from "../Components/DynamicPage/AddtoCart/Cart";
import LoginPage from "../Components/DynamicPage/Login/LoginPage";
import NotFound from "../Components/NotFound/NotFound";
import ShopProduct from "../Components/DynamicPage/Products/ShopProducts";
import Wishlists from "../Components/DynamicPage/Wishlist/Wishlists";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Products" element={<DynamicPage />} />
          <Route path="/Shop" element={<ShopProduct />} />
          <Route path="/Products/:productname" element={<OneProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
