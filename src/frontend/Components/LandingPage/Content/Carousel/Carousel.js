import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" id="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/carousel/image1.jpg"
          alt="Carousel-1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/carousel/image2.jpg"
          alt="Carousel-2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/carousel/image3.jpg"
          alt="Carousel-3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;

// import React from "react";

// const Carousel = () => {
//   return (
//     <div
//       id="carouselExampleAutoplaying"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img
//             src="../images/carousel/image1.jpg"
//             className="d-block w-100"
//             alt="Carousel-1"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="../images/carousel/image2.jpg"
//             className="d-block w-100"
//             alt="Carousel-2"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="../images/carousel/image3.jpg"
//             className="d-block w-100"
//             alt="Carousel-3"
//           />
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleAutoplaying"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleAutoplaying"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;
