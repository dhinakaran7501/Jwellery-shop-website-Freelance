import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ImageMagnify = ({ image }) => {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "iage",
          isFluidWidth: true,
          src: image,
        },
        largeImage: {
          src: image,
          width: 1000,
          height: 1000,
        },
        enlargedImagePosition: "over",
      }}
    />
  );
};

export default ImageMagnify;
