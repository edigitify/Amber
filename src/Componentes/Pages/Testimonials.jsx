import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Meera Shah",
    review:
      "The explanations provided by the lab staff were thorough and easy to understand. It made a stressful situation much more manageable.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Ravi Mourya",
    review:
      "I was impressed by how quickly I received my test results. The online portal made it so easy to access my reports.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Anjali Verma",
    review:
      "The home collection service was a lifesaver for me. The staff was professional and made the process very comfortable.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Suresh Kumar",
    review:
      "I appreciate the transparency in pricing. The health packages offered were affordable and provided great value.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-sky-800">What People Say</h2>
      </div>

      <div className="md:flex md:space-x-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-sky-800">
          <h3 className="text-xl font-semibold text-sky-800">About Amber Glass India</h3>
          <p>
            Amber Glass India is a trusted name in premium glass packaging solutions, delivering quality and innovation for industries across the country.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Specializing in high-quality amber glass bottles and jars</li>
            <li>Trusted by pharmaceutical, food, and cosmetic brands</li>
            <li>Durable, eco-friendly, and safe packaging materials</li>
            <li>Custom designs and bulk supply options available</li>
          </ul>
        </div>

        {/* Swiper Carousel */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1280: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            className="h-full"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md p-6 rounded-xl text-center h-full">
                  <div className="text-sky-800 text-lg mb-2">★★★★★</div>
                  <p className="text-sky-800 mb-4">{t.review}</p>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                  <p className="font-semibold mt-2">{t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
