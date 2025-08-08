import React, { useRef, useState } from "react";
import Image from "../../assets/1.png";
import Image1 from "../../assets/2.png";

const ClassicImage = () => {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const offsetX = x - bounds.left;
    const newPosition = Math.min(Math.max((offsetX / bounds.width) * 100, 0), 100);
    setSliderPosition(newPosition);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
      onTouchMove={handleDrag}
      className="relative w-full max-w-screen-md mx-auto aspect-video overflow-hidden rounded-xl shadow-lg select-none bg-black m-20"
    >
      {/* Full-size image inside the container */}
      <img
        src={sliderPosition < 50 ? Image1 : Image}
        alt="Comparison"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
      />

      {/* Slider Handle */}
      <div
        onMouseDown={(e) => e.preventDefault()}
        onTouchStart={(e) => e.preventDefault()}
        className="absolute top-0 bottom-0 z-30"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-1 bg-white h-full opacity-60" />
        <div className="w-6 h-6 bg-white rounded-full border border-black mx-auto mt-2 shadow-md" />
      </div>
    </div>
  );
};

export default ClassicImage;
