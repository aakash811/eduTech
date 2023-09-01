"use client";
import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  HStack,
  useColorModeValue,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import img1removebgpreview from "./Images/img1removebgpreview.png";
import img2removebgpreview from "./Images/img2removebgpreview.png";

const Autocarousel = () => {
  const slides = [
    {
      img: "https://returnon.college/assets/images/home-page/introduction-section-illustration.svg",
      label: "Welcome to XYZ",
      description: "Find the best Courses available on any topic",
    },
    {
      img: "https://www.sunday.tech/assets/img/edu-soft-dev/edusoftdev.svg",
      label: "Interactive Teaching",
      description: "Interactive sessions for effective learning",
    },
    {
      img: img1removebgpreview,
      label: "Expert Instructors",
      description: "Tons of expert instructors to guide and teach",
    },
    {
      img: img2removebgpreview,
      label: "Become a Pro",
      description: "Learn the Subjects and become an expert",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = 5000;

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [currentSlide]);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      direction={{ base: "row", md: "row" }}
      bg={useColorModeValue("gray.200", "gray.700")}
      p={5} // Adjust the padding as needed
    >
      <Box
        flex={{ base: 1, md: 1, lg: 2 }}
        p={5} // Adjust the padding as needed
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          Welcome to XYZ
        </Heading>
        <Text
          color={"pink.400"}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          mt={2}
        >
          The Best Courses You'll Find
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          mt={2}
          px={{ base: 1, md: 0 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Button
          size={"lg"}
          bg={"pink.400"}
          mt={{ base: 4, md: 6, lg: 10 }}
          fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          color={"white"}
          _hover={{
            bg: "pink.400",
            color: "gray.900",
            borderColor: "pink",
          }}
        >
          Get Started
        </Button>
      </Box>

      <Flex
        ml={{ base: 0, md: 0, lg: 5 }} // Adjust the margin as needed
        w={{ base: "40%", md: "40%", lg: "30%" }}
        pos="relative"
        overflow="hidden"
        h={{ base: "300px", md: "360px", lg: "400px" }}
        bg={useColorModeValue("gray.200", "gray.700")}
        borderRadius={20}
      >
        <Flex
          h={{ base: "300px", md: "300px", lg: "600px" }}
          w="full"
          {...carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="contain"
                ml={{ base: "20%", md: "20%", lg: "30%" }}
                h={{ base: "180px", md: "250px", lg: "300px" }}
                w={{ base: "180px", md: "200px", lg: "300px" }}
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
              >
                <Text
                  color={"pink.400"}
                  fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}
                  fontWeight={"extrabold"}
                >
                  {slide.label}
                </Text>
                <Text
                  color={"black"}
                  fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                  fontWeight={600}
                >
                  {slide.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Autocarousel;
