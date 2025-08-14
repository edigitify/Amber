import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // arrow icons
import Image from "../../assets/1.png";
import Image1 from "../../assets/2.png";

const ClassicImage = () => {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const offsetX = x - bounds.left;
    const newPosition = Math.min(
      Math.max((offsetX / bounds.width) * 100, 0),
      100
    );
    setSliderPosition(newPosition);
  };

  return (
    <div
      className="min-h-[600px] p-6 flex justify-center items-center"
      style={{ backgroundColor: "#1A3446" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <p className="text-white text-7xl font-semibold">Hold and drag </p>
        <br />
        <p className="text-white text-7xl">to see the magic</p>
      </div>

      <div
        ref={containerRef}
        onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
        onTouchMove={handleDrag}
        className="relative w-full max-w-screen-md mx-auto aspect-video overflow-hidden rounded-xl shadow-lg select-none m-20"
      >
        {/* Image switch */}
        <img
          src={sliderPosition < 50 ? Image1 : Image}
          alt="Comparison"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
        />

        {/* Slider Handle */}
        {/* Slider Handle */}
        <div
          onMouseDown={(e) => e.preventDefault()}
          onTouchStart={(e) => e.preventDefault()}
          className="absolute top-0 bottom-0 z-30"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Vertical line */}
          <div className="w-1 bg-white h-full opacity-60 absolute top-0 left-1/2 -translate-x-1/2" />

          {/* Draggable circle centered vertically */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border border-black flex items-center justify-center gap-1 shadow-md pointer-events-none">
            <FaArrowLeft size={14} />
            <FaArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicImage;
