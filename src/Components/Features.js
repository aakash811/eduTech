"use client";

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import {
  FaBrain,
  FaCalendar,
  FaCertificate,
  FaMale,
  FaMoneyBillWave,
  FaPagelines,
  FaParagraph,
  FaPersonBooth,
  FaStackExchange,
  FaStackOverflow,
  FaTeamspeak,
  FaUserInjured,
} from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.400", "gray.700")}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600} fontSize={"4xl"} paddingLeft={3}>
          {title}
        </Text>
      </Flex>
      <Text fontSize={"2xl"} color={useColorModeValue("gray.700", "gray.200")}>
        {text}
      </Text>
    </Stack>
  );
};

function Features() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.700")}
      mt={12}
      paddingTop={20}
      paddingBottom={20}
      justify={"Center"}
    >
      <Stack
        p={5}
        alignItems={"center"}
        justifyContent={{
          base: "flex-start",
          md: "space-around",
        }}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Stack
          width={{
            base: "100%",
            md: "40%",
          }}
          ml={200}
          textAlign={"center"}
        >
          <Heading size={"3xl"}>
            Why choose <Text color="pink.400">Us</Text>
          </Heading>
        </Stack>
        <Stack
          width={{
            base: "100%",
            md: "60%",
          }}
        >
          <Text textAlign={"center"} fontSize={"4xl"} fontWeight={800}>
            Engaging and Interactive Learning Materials
          </Text>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        mt={10}
        paddingLeft={20}
        paddingRight={20}
      >
        <Feature
          icon={<Icon as={FaCalendar} w={10} h={10} />}
          title={"Flexible Scheduling"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FaCertificate} w={10} h={10} />}
          title={"Get certification"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FaMale} w={10} h={10} />}
          title={"Experienced Instructors"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FaMoneyBillWave} w={10} h={10} />}
          title={"Scholarship Exams"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FaStackOverflow} w={10} h={10} />}
          title={"Vast range of courses"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FaTeamspeak} w={10} h={10} />}
          title={"Interactive Sessions"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
export default Features;
