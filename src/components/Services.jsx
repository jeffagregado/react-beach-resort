import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// Components
import Title from "./Title";

export default function Services() {
  // useState Arrays
  const [services] = useState([
    {
      icons: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nostrum!",
    },
    {
      icons: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nostrum!",
    },
    {
      icons: <FaShuttleVan />,
      title: "Free shuttle",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nostrum!",
    },
    {
      icons: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nostrum!",
    },
  ]);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => (
          <article key={index} className="service">
            <span>{item.icons}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
