import React from "react";
import { Carousel3DY} from "../Pages/Carousel";
import Image1 from "../../assets/20.jpg";
import Image2 from "../../assets/21.jpg";
import Image3 from "../../assets/22.jpg";
import Image4 from "../../assets/23.jpg";
import Image5 from "../../assets/24.jpg";
import Image6 from "../../assets/25.jpg";
import Image7 from "../../assets/26.jpg";
import Image8 from "../../assets/27.jpg";
import ClassicImage from "./ClassicImage";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import FeatureSection from "./FeatureSection";
import WindowFilem from "./WindowFilem";
import InstagramCarousel from "./InstagramCarousel";
import Testimonials from "./Testimonials";
import FeaturedProducts from "../FeaturedProducts";
const cards = [
  {
    title: "Transparent Glass Films",
    src: Image1,
    content: "Amber Solutions provides cutting-edge technology...",
  },
  {
    title: "Transparent Glass Films",
    src: Image2,
    content: "We help companies transform ideas into products...",
  },
  {
    title: "Frosted Glass Films",
    src: Image3,
    content: "Our team specializes in delivering tech solutions...",
  },
  {
    title: "Frosted Glass Films",
    src: Image4,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Printed Glass Films",
    src: Image5,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Printed Glass Films",
    src: Image6,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Opaque Glass Films",
    src: Image7,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Transparent Glass Films",
    src: Image8,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Transparent Glass Films",
    src: Image1,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "THE TRANSPARENT TALES",
    src: Image2,
    content: "Exploring the future of technology and innovation...",
  },
      {
    title: "Frosted Glass Films",
    src: Image3,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Frosted Glass Films",
    src: Image2,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Printed Glass Films",
    src: Image4,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Printed Glass Films",
    src: Image5,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Printed Glass Films",
    src: Image6,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Opaque Glass Films",
    src: Image7,
    content: "Exploring the future of technology and innovation...",
  },
];

const Home = () => {
  return (
    <>
    <Carousel3DY cards={cards} />
    <AboutSection />
    <ClassicImage />
    <FeaturedProducts />
    <FeaturesSection />
    <WindowFilem />
   <FeatureSection />
    <InstagramCarousel />
    <Testimonials />
    </>
  );
};

export default Home;
