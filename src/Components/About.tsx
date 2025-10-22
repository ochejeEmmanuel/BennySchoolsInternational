import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Flex,
  Heading,
  VStack,
  Container,
} from "@chakra-ui/react";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="white">
        <Image src="src/assets/45.svg" alt="Loading..." boxSize="50px" />
      </Flex>
    );
  }

  return (
    <Box bg="white">
      {/* Banner Section */}
      <Box
        position="relative"
        h="300px"
        w="full"
        overflow="hidden"
        borderRadius="md"
        mb={8}
        px={{ base: "5", md: "10%" }}
      >
        <Image
          src="src/assets/about_hero_lg.jpeg"
          alt="About Banner"
          objectFit="cover"
          w="full"
          h="full"
          filter="brightness(40%)"
          mt={-16}
        />
        <Center position="absolute" top="0" left="0" w="full" h="full" mt={-5}>
          <Text
            color="white"
            fontSize="xl"
            fontWeight="semibold"
            fontFamily="'Playfair Display', serif"
          >
            About us
          </Text>
        </Center>
      </Box>

      {/* Content Section */}
      <Box py={12}>
        <Container maxW="7xl">
          {/* Welcome Section */}
          <VStack spacing={4} align="start" mb={16}>
            <Heading
              size="xl"
              color="blue.700"
              mb="8"
              fontFamily="'Playfair Display', serif"
            >
              Welcome
            </Heading>
            <Text fontSize="lg" color="gray.700">
              In Benny International Schools, Diligence and Excellence is our
              motto and watchword. We have put things in place as we grow to
              better accommodate the educational needs of our 21st-century
              students.
            </Text>
          </VStack>

          {/* Vision Section */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={8}
            mb={{ base: "12", md: "0%" }}
          >
            {/* For mobile: title above image */}
            <Box
              display={{ base: "block", md: "none" }}
              textAlign="center"
              mb="3"
            >
              <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
                Our Vision
              </Heading>
            </Box>

            <Image
              src="src/assets/dprac_14.jpeg"
              alt="Students cooking"
              w={{ base: "100%", md: "50%" }}
              borderRadius="none"
            />

            <Box w={{ base: "100%", md: "50%" }}>
              {/* For desktop: title beside image */}
              <Heading
                size="lg"
                color="blue.700"
                mb={5}
                display={{ base: "none", md: "block" }}
                fontFamily="'Playfair Display', serif"
              >
                Our Vision
              </Heading>
              <Text color="gray.700">
                To raise children with the necessary skills and attitude that
                will enable them serve in a highly competitive world.
              </Text>
            </Box>
          </Flex>

          {/* Mission Section */}
          <Flex
            direction={{ base: "column", md: "row-reverse" }}
            align="center"
            gap={8}
            mb={{ base: "12", md: "0%" }}
          >
            <Box
              display={{ base: "block", md: "none" }}
              textAlign="center"
              mb={3}
            >
              <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
                Our Mission
              </Heading>
            </Box>

            <Image
              src="src/assets/science_md.jpeg"
              alt="Science students"
              w={{ base: "100%", md: "50%" }}
              borderRadius="none"
            />

            <Box w={{ base: "100%", md: "50%" }}>
              <Heading
                size="lg"
                color="blue.700"
                mb={5}
                display={{ base: "none", md: "block" }}
                fontFamily="'Playfair Display', serif"
              >
                Our Mission
              </Heading>
              <Text color="gray.700">
                To support the government in providing qualitative education
                through improved standards, eradicate indiscipline and provide
                opportunity for children with diverse talents to meet the
                challenges of our time.
              </Text>
            </Box>
          </Flex>

          {/* History Section */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={8}
            mb={{ base: "12", md: "2%" }}
          >
            <Box
              display={{ base: "block", md: "none" }}
              textAlign="center"
              mb={3}
            >
              <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
                Our History
              </Heading>
            </Box>

            <Image
              src="src/assets/sports_md.jpeg"
              alt="Playground"
              w={{ base: "100%", md: "50%" }}
              borderRadius="none"
            />

            <Box w={{ base: "100%", md: "50%" }}>
              <Heading
                size="lg"
                color="blue.700"
                mb={5}
                display={{ base: "none", md: "block" }}
                fontFamily="'Playfair Display', serif"
              >
                Our History
              </Heading>
              <Text color="gray.700">
                Benny International Schools (BIS) was established on October
                1st, 2001 (over 20 years now) by Mrs. Beniere O. Ifidi due to
                her desire to contribute to the manpower development of the
                state. We began with 31 students in JS1 and JS2 classes. And now
                we have over 300 students, all class levels, and over 35 staff.
              </Text>
            </Box>
          </Flex>

          {/* Awards Section */}
          <Flex
            direction={{ base: "column", md: "row-reverse" }}
            align="center"
            gap={8}
          >
            <Box
              display={{ base: "block", md: "none" }}
              textAlign="center"
              mb={3}
            >
              <Heading size="lg" color="blue.700" fontFamily="'Playfair Display', serif">
                Awards
              </Heading>
            </Box>

            <Image
              src="src/assets/awards.jpeg"
              alt="Awards"
              w={{ base: "100%", md: "45%" }}
              borderRadius="none"
            />

            <Box w={{ base: "100%", md: "50%" }}>
              <Heading
                size="lg"
                color="blue.700"
                mb={5}
                display={{ base: "none", md: "block" }}
                fontFamily="'Playfair Display', serif"
              >
                Awards
              </Heading>
              <Text color="gray.700">
                Best Standard School, 2018; 1st Position, Shell/NNPC Joint
                Science Competition, 2016; 1st Position, NTA 2nd Edition Senior
                Secondary School Science Quiz Competition, 2015; 3rd Position,
                NTA etv educational Television Senior category Arts, 2015;
                Award, Macmillian Team Success, 2011.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
