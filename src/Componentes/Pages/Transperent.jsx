import React, { useState } from "react";
import Image from "../../assets/Transperent/1-6.png";
import Image1 from "../../assets/Transperent/2-6.png";
import Image2 from "../../assets/Transperent/3-6.png";
import Image3 from "../../assets/Transperent/4-6.png";
import Image4 from "../../assets/Transperent/5-6.png";
import Image5 from "../../assets/Transperent/6-6.png";
import Image6 from "../../assets/Transperent/7-6.png";
import Image7 from "../../assets/Transperent/8-6.png";
import Image8 from "../../assets/Transperent/9-6.png";
import Image9 from "../../assets/Transperent/10-6.png";
import Image10 from "../../assets/Transperent/11-6.png";
import Image11 from "../../assets/Transperent/12-6.png";
import CartImage from "../../assets/Transperent/Image/1-7.png";
import CartImage1 from "../../assets/Transperent/Image/2-7.png";
import CartImage2 from "../../assets/Transperent/Image/3-7.png";
import CartImage3 from "../../assets/Transperent/Image/4-7.png";
import CartImage4 from "../../assets/Transperent/Image/5-7.png";
import CartImage5 from "../../assets/Transperent/Image/6-7.png";
import CartImage6 from "../../assets/Transperent/Image/7-7.png";
import CartImage7 from "../../assets/Transperent/Image/8-7.png";
import CartImage8 from "../../assets/Transperent/Image/9-7.png";
import CartImage9 from "../../assets/Transperent/Image/10-7.png";
import CartImage10 from "../../assets/Transperent/Image/11-7.png";
import CartImage11 from "../../assets/Transperent/Image/12-7.png";
import DownloadForm from "./DownloadForm";
import TransparentImg from "../../assets/transparent.jpg";
import Pdf from "../../Data.js/TRANSPARENT.pdf";
const brassShades = [
  { id: 1, img: Image, large: CartImage },
  { id: 2, img: Image1, large: CartImage1 },
  { id: 3, img: Image2, large: CartImage2 },
  { id: 4, img: Image3, large: CartImage3 },
  { id: 5, img: Image4, large: CartImage4 },
  { id: 6, img: Image5, large: CartImage5 },
  { id: 7, img: Image6, large: CartImage6 },
  { id: 8, img: Image7, large: CartImage7 },
  { id: 9, img: Image8, large: CartImage8 },
  { id: 10, img: Image9, large: CartImage9 },
  { id: 11, img: Image10, large: CartImage10 },
  { id: 12, img: Image11, large: CartImage11 },
];

const Transperent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  function getStartIndexOfSecondRow() {
    if (window.innerWidth >= 1024) return 6; // lg:grid-cols-6
    if (window.innerWidth >= 640) return 3; // sm:grid-cols-3
    return 2; // grid-cols-2
  }

  function getEndIndexOfSecondRow() {
    return getStartIndexOfSecondRow() * 2;
  }

  return (
    <div className="min-h-96 bg-white px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-10 text-sky-800">
        Transparent Glass Films
      </h1>

      {/* Grid with reduced row gap */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-6 perspective">
        {brassShades.map((shade, index) => (
          <div
            key={shade.id}
            className={`
        bg-white rounded-xl p-4 cursor-pointer transform-style-preserve-3d
        hover:rotate-y-6 hover:rotate-x-3 transition-transform duration-100
        ${
          index >= getStartIndexOfSecondRow() &&
          index < getEndIndexOfSecondRow()
            ? "blur-[2px]"
            : ""
        }
      `}
            onClick={() => setSelectedImage(shade.large)}
          >
            <img
              src={shade.img}
              alt={`Brass shade ${shade.id}`}
              className="w-full h-48 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative w-full px-4 flex justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected Brass Shade"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <DownloadForm
        id="transparent"
        label="transparent"
        bgImage={TransparentImg}
        pdfFile={Pdf}
      />
    </div>
  );
};

export default Transperent;
