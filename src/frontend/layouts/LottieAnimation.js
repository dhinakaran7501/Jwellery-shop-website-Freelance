import React from "react";
import Lottie from "lottie-react";

const LottieAnimation = ({ animationData, width, height }) => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        speed={1.5}
        style={{ width: width, height: height }}
      />
    </div>
  );
};

export default LottieAnimation;
