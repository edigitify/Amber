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
const cards = [
  {
    title: "THE PRINT POETRY",
    src: Image1,
    content: "Amber Solutions provides cutting-edge technology...",
  },
  {
    title: "Digital Innovation",
    src: Image2,
    content: "We help companies transform ideas into products...",
  },
  {
    title: "Tech Solutions",
    src: Image3,
    content: "Our team specializes in delivering tech solutions...",
  },
  {
    title: "Future Tech",
    src: Image4,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Transformative Tech",
    src: Image5,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Innovative Solutions",
    src: Image6,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Tech Trends",
    src: Image7,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "Tech Trends",
    src: Image8,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "path to the future",
    src: Image1,
    content: "Exploring the future of technology and innovation...",
  },
   {
    title: "path to the future",
    src: Image2,
    content: "Exploring the future of technology and innovation...",
  },
      {
    title: "path to the future",
    src: Image3,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Future Tech",
    src: Image2,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Future Tech",
    src: Image4,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "Future Tech",
    src: Image5,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "print poetry",
    src: Image6,
    content: "Exploring the future of technology and innovation...",
  },
  {
    title: "pseudo future",
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
    </>
  );
};

export default Home;
