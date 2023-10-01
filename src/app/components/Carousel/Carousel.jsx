import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { initalState } from "./data";
import Card from "./Card";

function CarouselComponent() {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        // Small screens
        setCenterSlidePercentage(100);
      } else if (screenWidth < 1024) {
        // Medium screens
        setCenterSlidePercentage(50);
      } else {
        // Larger screens
        setCenterSlidePercentage(33.33);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial value
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      centerMode
      centerSlidePercentage={centerSlidePercentage}
      showThumbs={false}
      showIndicators={false}
      className="mt-5"
      showStatus={false}
      stopOnHover={true}
      interval={5000}
    >
      {initalState.map((item) => (
        <div key={item.idx} className="relative">
          <Card text={item.text} img={item.img} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
