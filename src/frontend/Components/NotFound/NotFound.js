import React from "react";
import LottieAnimation from "../../layouts/LottieAnimation";
import notfound from "../../../_mock/404page.json";
import "./NotFound.scss";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFoundpage">
      <LottieAnimation animationData={notfound} width={300} height={300} />
      <p>The Page you are trying to reach is not found</p>
      <button onClick={() => navigate("/")}>Click to Go Back</button>
    </div>
  );
};

export default NotFound;
