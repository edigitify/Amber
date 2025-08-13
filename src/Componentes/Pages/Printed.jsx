import React, { useState } from "react";
import Image from "../../assets/Printed/1-4.png";
import Image1 from "../../assets/Printed/2-4.png";
import Image2 from "../../assets/Printed/3-4.png";
import Image3 from "../../assets/Printed/4-4.png";
import Image4 from "../../assets/Printed/5-4.png";
import Image5 from "../../assets/Printed/6-4.png";
import Image6 from "../../assets/Printed/7-4.png";
import Image7 from "../../assets/Printed/8-4.png";
import Image8 from "../../assets/Printed/9-4.png";
import Image9 from "../../assets/Printed/10-4.png";
import Image10 from "../../assets/Printed/11-4.png";
import Image11 from "../../assets/Printed/12-4.png";
import CartImage from "../../assets/Printed/image/1-5.png";
import CartImage1 from "../../assets/Printed/image/2-5.png";
import CartImage2 from "../../assets/Printed/image/3-5.png";
import CartImage3 from "../../assets/Printed/image/4-5.png";
import CartImage4 from "../../assets/Printed/image/5-5.png";
import CartImage5 from "../../assets/Printed/image/6-5.png";
import CartImage6 from "../../assets/Printed/image/7-5.png";
import CartImage7 from "../../assets/Printed/image/8-5.png";
import CartImage8 from "../../assets/Printed/image/9-5.png";
import CartImage9 from "../../assets/Printed/image/10-5.png";
import CartImage10 from "../../assets/Printed/image/11-5.png";
import CartImage11 from "../../assets/Printed/image/12-5.png";
import DownloadForm from './DownloadForm';
import PrintedImg from "../../assets/printed.jpg";
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

const Printed = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div className="min-h-96 bg-white px-4 sm:px-6 lg:px-8 py-10">
            {/* Title */}
            <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-10 text-sky-800">
                Printed Glass Films
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
            <DownloadForm id="printed" label={Printed} bgImage={PrintedImg}/>
        </div>
    );
}
export default Printed;