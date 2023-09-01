import {
  Box,
  Center,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function StatsCard({ title, stat, icon }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const animationDuration = 1000;
    const step = (stat - animatedValue) / (animationDuration / 16);

    const interval = setInterval(() => {
      setAnimatedValue((prevValue) => {
        const newValue = prevValue + step;
        if (newValue >= stat) {
          clearInterval(interval);
          return stat;
        }
        return newValue;
      });
    }, 16);

    return () => {
      clearInterval(interval);
    };
  }, [stat, animatedValue]);

  return (
    <Box
      maxW={{ base: "full", md: "400px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={"gray.300"}
      overflow="hidden"
      p={5}
      filter="auto"
      bg="#edf3f8"
      _dark={{
        bg: "gray.900",
        borderColor: "gray.800",
      }}
    >
      <Stat>
        <Flex justifyContent={"space-between"} p={2}>
          <Box pl={{ base: 1, md: 1 }}>
            <StatLabel fontWeight={"medium"} fontSize={"4xl"}>
              {title}
            </StatLabel>
            <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
              <Flex>
                {Math.round(animatedValue)} <Text>+</Text>
              </Flex>
            </StatNumber>
          </Box>
        </Flex>
      </Stat>
    </Box>
  );
}

const Statistics = () => {
  return (
    <Box maxW="8xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 5 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"7xl"}
        py={10}
        fontWeight={"bold"}
      >
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacingX={{ base: 5, lg: 20 }}
        spacingY={{ base: 5, lg: 10 }}
      >
        <StatsCard title={"Happy Students"} stat={3000} />
        <StatsCard title={"Course Lessons"} stat={1000} />
        <StatsCard title={"Expert Instructors"} stat={50} />
        <StatsCard title={"Affordable Country"} stat={100} />
        <StatsCard title={"Jobs Given"} stat={300} />
        <StatsCard title={"Aluminis"} stat={100} />
      </SimpleGrid>
    </Box>
  );
};

export default Statistics;
