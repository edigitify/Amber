import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
];

const InstagramCarousel = () => {
  return (
    <div className="py-8" style={{ backgroundColor: "#1A3446" }}>
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-semibold mb-6">
          Glass Films on Instagram
        </h2>


        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1.3 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={src}
                  alt={`Glass Film ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default InstagramCarousel;