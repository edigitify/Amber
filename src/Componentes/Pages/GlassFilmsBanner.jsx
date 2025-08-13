import React, { useState } from "react";

// Assets
import Image from "../../assets/Card/MainCard/1.png";
import Image1 from "../../assets/Card/MainCard/2.png";
import Image2 from "../../assets/Card/MainCard/3.png";
import Image3 from "../../assets/Card/MainCard/4.png";
import Image4 from "../../assets/Card/MainCard/5.png";
import Image5 from "../../assets/Card/MainCard/6.png";
import Image6 from "../../assets/Card/MainCard/7.png";
import Image7 from "../../assets/Card/MainCard/8.png";
import Image8 from "../../assets/Card/MainCard/9.png";
import Image9 from "../../assets/Card/MainCard/10.png";
import Image10 from "../../assets/Card/MainCard/11.png";
import Image11 from "../../assets/Card/MainCard/12.png";
import CartImage from "../../assets/Card/1.jpg";
import CartImage1 from "../../assets/Card/2.jpg";
import CartImage2 from "../../assets/Card/3.jpg";
import CartImage3 from "../../assets/Card/4.jpg";
import CartImage4 from "../../assets/Card/5.jpg";
import CartImage5 from "../../assets/Card/6.jpg";
import CartImage6 from "../../assets/Card/7.jpg";
import CartImage7 from "../../assets/Card/8.jpg";
import CartImage8 from "../../assets/Card/9.jpg";
import CartImage9 from "../../assets/Card/10.jpg";
import CartImage10 from "../../assets/Card/11.jpg";
import DownloadForm from "./DownloadForm";
import TransparentImg from "../../assets/transparent.jpg";


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
    { id: 12, img: Image11, large: CartImage },
];

const GlassFilmsBanner = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (

        <div className="min-h-96 bg-white px-4 sm:px-6 lg:px-8 py-10">
            {/* Title */}
            <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-10 text-sky-800">
                Frosted Glass Films
            </h1>

            {/* Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-6 perspective">
                {brassShades.map((shade) => (
                    <div
                        key={shade.id}
                        className="bg-white rounded-xl p-4 cursor-pointer transform-style-preserve-3d hover:rotate-y-6 hover:rotate-x-3 transition-transform duration-100"
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
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50"
                        >
                            &times;
                        </button>

                        {/* Large Image */}
                        <img
                            src={selectedImage}
                            alt="Selected Brass Shade"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
            <DownloadForm id="frosted" label="" bgImage={TransparentImg} pdfFile="/opaque.pdf"/>
        </div>

    );
};

export default GlassFilmsBanner;
