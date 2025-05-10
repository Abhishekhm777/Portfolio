import React from "react";
import "./Cards.css";

const cardData = [
  {
    title: "Health",
    subtitle: "Knows you by heart.",
    img: "/path-to-your-heart-image.jpg",
    color: "#FFD9C0",
  },
  {
    title: "Fitness",
    subtitle: "Every move counts.",
    img: "/path-to-your-fitness-image.jpg",
    color: "#E6F0FA",
  },
  {
    title: "Connectivity",
    subtitle: "The right call for staying in touch.",
    img: "/path-to-your-connectivity-image.jpg",
    color: "#FFEFF3",
  },
  {
    title: "Safety",
    subtitle: "Good help is easy to find.",
    img: "/path-to-your-safety-image.jpg",
    color: "#C8F7C5",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundColor: card?.color,
            }}
          ></div>
          <div className="card-content">
            <h4>{card.title}</h4>
            <h2>{card.subtitle}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
