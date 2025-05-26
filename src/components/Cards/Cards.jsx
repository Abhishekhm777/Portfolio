import React from "react";
import "./Cards.css";
import article1 from "../../images/article1.png";
import article2 from "../../images/article2.png";
import article3 from "../../images/article3.png";
import article4 from "../../images/article4.png";
import { ARTICLES_LINK } from "../../constants/const";

export const cardData = [
  {
    title: "Health",
    subtitle: "Knows you by heart.",
    img: article1,
    color: "#FFD9C0",
  },
  {
    title: "Fitness",
    subtitle: "Every move counts.",
    img: article2,
    color: "#E6F0FA",
  },
  {
    title: "Connectivity",
    subtitle: "The right call for staying in touch.",
    img: article3,
    color: "#FFEFF3",
  },
  {
    title: "Safety",
    subtitle: "Good help is easy to find.",
    img: article4,
    color: "#C8F7C5",
  },
];

const Cards = () => {
  const handleCardClick = (index) => {
    window.open(ARTICLES_LINK[index], "_blank");
  };
  return (
    <section id="cards-container">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleCardClick(index)}
          style={{
            background: card?.color,
            border: `${22}px solid ${card?.color}`,
          }}
        >
          {/* <div
            className="card-content"
            style={{
              backgroundColor: card?.color,
            }}
          >
            <h4>{card.title}</h4>
            <h2>{card.subtitle}</h2>
          </div> */}
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundColor: card?.color,
            }}
          ></div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
