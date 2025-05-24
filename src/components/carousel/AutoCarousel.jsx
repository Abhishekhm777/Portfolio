import React, { useEffect, useRef, useState } from "react";
import "./AutoCarousel.css";

const AutoCarousel = ({ images, interval = 1000 }) => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollToIndex = (i) => {
      const width = scrollContainer.offsetWidth;
      scrollContainer.scrollTo({ left: width * i, behavior: "smooth" });
    };

    const autoScroll = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % images?.length;
        scrollToIndex(next);
        return next;
      });
    }, interval);

    return () => clearInterval(autoScroll);
  }, [images?.length, interval]);

  return (
    <div
      className="carousel-container"
      ref={scrollRef}
      onMouseEnter={() => clearInterval()}
    >
      {images?.map((img, i) => (
        <div className="carousel-item" key={i}>
          <img src={img?.img} alt={`slide-${i}`} />
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
