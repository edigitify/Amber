import React, { useState } from "react";
import Image from "../../assets/opakeCard/1-2.png";
import Image1 from "../../assets/opakeCard/2-2.png";
import Image2 from "../../assets/opakeCard/3-2.png";
import Image3 from "../../assets/opakeCard/4-2.png";
import Image4 from "../../assets/opakeCard/5-2.png";
import Image5 from "../../assets/opakeCard/6-2.png";
import Image6 from "../../assets/opakeCard/7-2.png";
import Image7 from "../../assets/opakeCard/8-2.png";
import Image8 from "../../assets/opakeCard/9-2.png";
import Image9 from "../../assets/opakeCard/10-2.png";
import Image10 from "../../assets/opakeCard/11-2.png";
import Image11 from "../../assets/opakeCard/12-2.png";
import CartImage from "../../assets/opakeCard/image/1-3.png";
import CartImage1 from "../../assets/opakeCard/image/2-3.png"
import CartImage2 from "../../assets/opakeCard/image/3-3.png"
import CartImage3 from "../../assets/opakeCard/image/4-3.png"
import CartImage4 from "../../assets/opakeCard/image/5-3.png"
import DownloadForm from "./DownloadForm";
import CartImage5 from "../../assets/opakeCard/image/6-3.png";
import CartImage6 from "../../assets/opakeCard/image/7-3.png";
import CartImage7 from "../../assets/opakeCard/image/8-3.png";
import CartImage8 from "../../assets/opakeCard/image/9-3.png";
import CartImage9 from "../../assets/opakeCard/image/10-3.png";
import CartImage10 from "../../assets/opakeCard/image/11-3.png";
import CartImage11 from "../../assets/opakeCard/image/12-3.png";
import OpaqueImg from "../../assets/opaqu.jpg";
import OpaquePdf from "../../Data.js/AMBER FILMS OPQAUE.pdf";
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


const Opake = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div className="min-h-96 bg-white px-4 sm:px-6 lg:px-8 py-10">
            {/* Title */}
            <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-10 text-sky-800">
                Opaque Glass Films
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
            <DownloadForm id="opaque" label="Opaque" bgImage={OpaqueImg} pdfFile={OpaquePdf} />
        </div>
    );
}

export default Opake;