"use client";

import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const options = [
  { id: 1, desc: "1 lorem ipsum" },
  { id: 2, desc: "Lorem, ipsum dolor." },
  { id: 3, desc: "Monthly Updates" },
];

const PackageTier = ({
  title,
  description,
  options,
  typePlan,
  checked = false,
}) => {
  const colorTextLight = checked ? "white" : "pink.600";
  const bgColorLight = checked ? "pink.400" : "gray.300";

  const colorTextDark = checked ? "white" : "pink.400";
  const bgColorDark = checked ? "pink.400" : "gray.300";

  return (
    <Box
      maxW={{ base: "full", md: "full" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      filter="auto"
      bg="#edf3f8"
      _dark={{
        bg: "gray.900",
        borderColor: "gray.800",
      }}
    >
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: "flex-start",
          md: "space-around",
        }}
        direction={{
          base: "column",
          md: "row",
        }}
        alignItems={{ md: "center" }}
      >
        <Grid>
          <Heading size={"xl"} w={"200px"}>
            {title}
          </Heading>
          <Text fontSize={"lg"} w={"400px"}>
            {description}
          </Text>
        </Grid>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id} fontSize={"lg"}>
              <ListIcon
                as={CheckCircleIcon}
                color="green.500"
                fontSize={"lg"}
              />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Heading size={"xl"}>{typePlan}</Heading>
        <Stack>
          <Button
            fontSize={"xl"}
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
            _hover={{
              bg: "pink.400",
              color: "gray.900",
              borderColor: "pink",
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
const CoursePrice = () => {
  return (
    <Box py={6} px={5} width="full" mt={20}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
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
            textAlign={"center"}
          >
            <Heading size={"3xl"}>
              The Right Plan for <Text color="pink.400">Your Business</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"} fontSize={"2xl"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <PackageTier
          title={"Starter"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit."
          typePlan="Free"
          options={options}
        />
        <PackageTier
          title={"Lorem Plus"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          quod in iure vero. Facilis magnam, sed officiis commodi labore
          odit."
          checked={true}
          typePlan="$32.00"
          options={options}
        />
        <PackageTier
          title={"Lorem Pro"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit."
          typePlan="$50.00"
          options={options}
        />
      </Stack>
    </Box>
  );
};

export default CoursePrice;
