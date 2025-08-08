import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image1 from "../../assets/9.jpeg";
import { title } from "motion/react-client";

export const Carousel3DY = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const radius = 800;
  const angleStep = 360 / cards.length;

  const rotateCarousel = (index) => {
    const newIndex = (index + cards.length) % cards.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateCarousel(currentIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="w-full h-[600px] flex flex-col items-center justify-center  overflow-hidden"
      style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 3D Scene */}
      <div
        className="relative w-[300px] h-[400px]"
        style={{ perspective: 1200 }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(-${
              currentIndex * angleStep
            }deg)`,
            transition: "transform 1s ease",
          }}
        >
          {cards.map((card, index) => {
            const rotateY = index * angleStep;
            return (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: `rotateY(${rotateY}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white"
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
                    {card.title}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
