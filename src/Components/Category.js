"use strict";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { MoonIcon } from "@chakra-ui/icons";
import {
  FaBusinessTime,
  FaCode,
  FaCompass,
  FaFigma,
  FaNodeJs,
  FaPalette,
} from "react-icons/fa";

function Card({ heading, description, icon, href }) {
  return (
    <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.3 }}>
      <Box
        maxW={{ base: "full", md: "400px" }}
        w={"full"}
        borderWidth="1px"
        borderRadius="lg"
        borderColor={"gray.400"}
        overflow="hidden"
        p={5}
        filter="auto"
        bg="#edf3f8"
        _dark={{
          bg: "gray.900",
          borderColor: "gray.800",
        }}
        _hover={{ boxShadow: "dark-lg" }}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={useColorModeValue("gray.400", "gray.700")}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md" fontSize={"4xl"}>
              {heading}
            </Heading>
            <Text mt={1} fontSize={"2xl"}>
              {description}
            </Text>
          </Box>
          <Button
            variant={"link"}
            colorScheme={"blue"}
            size={"xl"}
            fontSize={"xl"}
          >
            Learn more
          </Button>
        </Stack>
      </Box>
    </motion.div>
  );
}

function Category() {
  return (
    <Box mt={12} p={7} paddingBottom={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "7xl" }} fontWeight={"bold"}>
          Our Courses
        </Heading>
        <Text
          color={useColorModeValue("gray.800", "gray.200")}
          fontSize={{ base: "sm", sm: "2xl" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"8xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={14} justify="center">
          <Card
            heading={"Business & Management"}
            icon={<Icon as={FaBusinessTime} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Computer & programming"}
            icon={<Icon as={FaCode} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Creative Arts & Design"}
            icon={<Icon as={FaPalette} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"UI/UX Design"}
            icon={<Icon as={FaFigma} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"DSA"}
            icon={<Icon as={FaCode} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Web/App Developer"}
            icon={<Icon as={FaNodeJs} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default Category;
