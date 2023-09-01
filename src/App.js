import React from "react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import AutoCarousel from "./Components/Autocarousel";
import Category from "./Components/Category";
import CoursePrice from "./Components/CoursePrice";
import Features from "./Components/Features";
import Statistics from "./Components/Statistics";
import TestimonialPage from "./Components/Testimonial";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footers";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const App = () => {
  const carouselItems = [
    {
      image: "image1.jpg",
      title: "Item 1",
      description: "Description for Item 1",
    },
    {
      image: "image2.jpg",
      title: "Item 2",
      description: "Description for Item 2",
    },
    // Add more items as needed
  ];

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <AutoCarousel items={carouselItems} interval={5000} />
      <Category />
      <CoursePrice />
      <Features />
      <Statistics />
      <TestimonialPage />
      <Pricing />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
