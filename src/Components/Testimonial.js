"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"4xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"left"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"xl"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600} fontSize={"3xl"}>
          {name}
        </Text>
        <Text fontSize={"xl"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

function TestimonialPage() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} mt={12}>
      <Container maxW={"6xl"} py={16} as={Stack} spacing={16}>
        <Stack spacing={0} align={"center"}>
          <Heading fontSize={"6xl"}>Our Clients Speak</Heading>
          <Text fontSize={"2xl"} p={8}>
            We have been working with clients around the world
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>
                  Best Courses at affordable prices
                </TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jim Halpert"}
                title={"Employee at Amazon"}
              />
            </Testimonial>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>
                  Awesome Teaching Techniques
                </TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Michael Scott"}
                title={"CEO of Dunder Mifflin"}
              />
            </Testimonial>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Great Experience</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Dwight Schrute"}
                title={"Employee at Dunder Mifflin"}
              />
            </Testimonial>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}
export default TestimonialPage;
