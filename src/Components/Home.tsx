import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Stack,
  SimpleGrid,
  Icon,
  Card,
  CardBody,
  Avatar,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaMoneyCheckAlt,
  FaDesktop,
} from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const testimonials = [
  {
    text: "My Son, David Osazuwa in Jss1A before he was admitted into BENNY INT'L we couldn't read what he was writing, but just a term in BENNY INT'L SCH we were able to read his notebooks and he has improved in his academic work. Kudos to the teachers",
    name: "Mr. Jude Richy Osazuwa",
    role: "Parent",
    image:
      "https://www.bennyschools.org/assets/images/testimonials/parents/Mr%20Jude%20Richy%20Osazuwa.jpg",
  },
  {
    text: "Benny international is a nice school .it has every good educational quality for your kids. They also have good manner of approach, you can equally depend on the school trying their very best to give your kids the best quality education ever, I have found no fault in them ever since my kids where been admitted.",
    name: "Mrs. Ebiye Diela",
    role: "Parent",
    image:
      "https://www.bennyschools.org/assets/images/testimonials/parents/Mrs%20Ebiye%20Diela.jpg",
  },
  {
    text: "This is a top notch and fantastic school with a well-planned curriculum, pupils and students’ academic needs-focused with a serene atmosphere fully equipped to assist in learning.",
    name: "Mrs. Esther E. Muojekwu",
    role: "Parent",
    image:
      "https://www.bennyschools.org/assets/images/testimonials/parents/Mrs%20Esther%20Emarobebh%20Muojekwu.jpg",
  },
  {
    text: "BIS teachers and minders wield a standard to be proud of, their love and care for their students is evident in their resilient efforts to impart the needed academic excellence evidenced on the students, as a parent, I have had cause to call on the teachers some times and discuss my concerns and sure they give me a listening ear and the necessary action is taken, this is commendable.",
    name: "Mrs. Oke Timipre Gbaiwogha",
    role: "Parent",
    image:
      "src/assets/screenshot-1760540322617.png",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  
  
   

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box w="100%" py={{ base: 10, md: 4 }}>
      {/* === Hero Section === */}
      <Box
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        w="95%"
        mx="auto"
        h={{ base: "300px", md: "500px" }}
      >
        <Image
          src="https://www.bennyschools.org/assets/images/banner.jpg"
          alt="Students of Benny International Schools"
          objectFit="cover"
          w="100%"
          h="100%"
          filter="brightness(45%)"
          opacity={0.8}
        />

        <Flex
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
          color="white"
          px={4}
        >
          <Text
            fontSize={{ base: "2xl", md: "6xl" }}
            fontWeight="bold"
            mb={4}
            lineHeight="shorter"
          >
            Welcome To Our School
          </Text>

          <Text fontSize={{ base: "md", md: "3xl" }} mb={6}>
            A Great Citadel of Learning
          </Text>

          <Button
            colorScheme="blue"
            size="lg"
            borderRadius="md"
            px={8}
            fontWeight="bold"
            transition="all 0.3s ease"
            _hover={{ bg: "blue.700", transform: "scale(1.05)" }}
            onClick={() => navigate("/about")}
          >
            See More
          </Button>
        </Flex>
      </Box>

      {/* === Welcome Section === */}
      <Box
        w="95%"
        mx="auto"
        maxW="1200px"
        bg="gray.50"
        borderRadius="xl"
        mt={{ base: 12, md: 16 }}
        p={{ base: 6, md: 10 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={10}
        >
          <Stack spacing={5} flex="1">
            <Box>
              <Text fontSize={{ base: "xl", md: "4xl" }} color="gray.700">
                Welcome to
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="bold"
                color="blue.600"
                lineHeight="shorter"
              >
                Benny International Schools
              </Text>
            </Box>

            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              Benny International Schools (BIS) was established on October 1st, 2001 by
              Mrs. Beniere O. Ifidi due to her desire to contribute to the manpower
              development of the state.
            </Text>

            <Button
              colorScheme="blue"
              w="150px"
              borderRadius="md"
              fontWeight="medium"
              onClick={() => navigate("/about")}
            >
              Read On
            </Button>
          </Stack>

          <Box flex="1" textAlign="center">
            <Image
              src="https://www.bennyschools.org/assets/images/carousel/slide5/science_sm.jpg"
              alt="Students in Laboratory"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              maxW="500px"
              mx="auto"
              boxShadow="md"
            />
          </Box>
        </Flex>
      </Box>

      {/* === Why Choose Us Section === */}
      <Box bg="blue.600" color="white" py={{ base: 12, md: 20 }} mt={16}>
        <Box textAlign="center" mb={12} px={4}>
          <Text fontSize={{ base: "2xl", md: "2xl" }} fontWeight="bold" mb={3}>
            Why Choose Us
          </Text>
          <Text
            fontSize={{ base: "md", md: "md" }}
            maxW="700px"
            mx="auto"
            opacity={0.9}
          >
            Diligence and Excellence is our motto and watchword. We have put things
            in place as we grow to better accommodate the educational needs of our
            21st century students.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, md: 16 }}
          maxW="1000px"
          mx="auto"
          px={6}
        >
          <Flex align="flex-start" gap={4}>
            <Icon as={FaChalkboardTeacher} boxSize="90px" color="white" />
            <Box>
              <Text fontSize="2xl" fontWeight="medium">
                Highly Qualified Teachers
              </Text>
              <Text mt={2} opacity={0.9}>
                We ensure to hire highly qualified teachers for teaching roles in
                our school, so that students get the best.
              </Text>
            </Box>
          </Flex>

          <Flex align="flex-start" gap={4}>
            <Icon as={FaGraduationCap} boxSize="90px" color="white" />
            <Box>
              <Text fontSize="2xl" fontWeight="medium">
                Conducive Learning Environment
              </Text>
              <Text mt={2} opacity={0.9}>
                Our school has great facilities and space to ensure students get
                the best.
              </Text>
            </Box>
          </Flex>

          <Flex align="flex-start" gap={4}>
            <Icon as={FaMoneyCheckAlt} boxSize="90px" color="white" />
            <Box>
              <Text fontSize="2xl" fontWeight="medium">
                Affordable
              </Text>
              <Text mt={2} opacity={0.9}>
                Our fees are moderate and affordable.
              </Text>
            </Box>
          </Flex>

          <Flex align="flex-start" gap={4}>
            <Icon as={FaDesktop} boxSize="90px" color="white" />
            <Box>
              <Text fontSize="2xl" fontWeight="medium">
                ICT Compliant
              </Text>
              <Text mt={2} opacity={0.9}>
                We ensure our students graduate with proficient ICT skills. Student
                performance is monitored closely via our school portal, giving
                parents real time feedback on the performance of their wards.
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>

      {/* === Recent Activities Section === */}
      <Box bg="blue.50" py={{ base: 12, md: 20 }}>
        <Box textAlign="center" mb={12}>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="medium"
            color="blue.600"
          >
            Recent Activities
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 10, md: 8 }}
          w="90%"
          mx="auto"
          mb={10}
        >
          <Card
            borderRadius="md"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
          >
            <Image
              src="https://www.bennyschools.org/assets/images/gallery/departmental_practicals/md/dprac_02.jpg"
              alt="Cooking Practical"
              objectFit="cover"
              h="220px"
              w="100%"
            />
            <CardBody>
              <Text
                fontSize="2xl"
                fontWeight="medium"
                color="blue.600"
                mb={2}
              >
                Practicals on making Doughnuts and Fish Pie
              </Text>
              <Text fontSize="sm" color="blue.500">
                April 16, 2021
              </Text>
            </CardBody>
          </Card>

          <Card
            borderRadius="md"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
          >
            <Image
              src="https://www.bennyschools.org/assets/images/gallery/departmental_practicals/md/dprac_31.jpg"
              alt="Chemistry Practical"
              objectFit="cover"
              h="220px"
              w="100%"
            />
            <CardBody>
              <Text
                fontSize="2xl"
                fontWeight="medium"
                color="blue.600"
                mb={2}
              >
                Chemistry Practicals on Titration
              </Text>
              <Text fontSize="sm" color="blue.500">
                November 2, 2020
              </Text>
            </CardBody>
          </Card>

          <Card
            borderRadius="md"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
          >
            <Image
              src="https://www.bennyschools.org/assets/images/gallery/departmental_practicals/md/dprac_44.jpg"
              alt="Fish Preservation Practical"
              objectFit="cover"
              h="220px"
              w="100%"
            />
            <CardBody>
              <Text
                fontSize="2xl"
                fontWeight="medium"
                color="blue.600"
                mb={2}
              >
                Practicals on fish preservation techniques
              </Text>
              <Text fontSize="sm" color="blue.500">
                October 30, 2020
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>

        <Flex justify="right">
          <Button colorScheme="blue" size="md" px={6} borderRadius="md">
            More Activities
          </Button>
        </Flex>
      </Box>

      {/* === Testimonials Section === */}
<Box py={{ base: 16, md: 24 }} textAlign="center" bg="white">
  <Text
    fontSize={{ base: "2xl", md: "4xl" }}
    fontWeight="bold"
    mb={10}
    color="gray.800"
  >
    What Parents Say
  </Text>

  <Box position="relative" maxW="800px" mx="auto" minH="420px">
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <Icon
          as={FaQuoteLeft}
          color="yellow.300"
          boxSize={10}
          mb={4}
          opacity={0.6}
        />
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          maxW="700px"
          mx="auto"
          mb={8}
        >
          {testimonials[current].text}
        </Text>

        <Avatar
          size="xl"
          src={testimonials[current].image}
          mb={4}
          mx="auto"
        />
        <Text fontWeight="bold" fontSize="lg" color="gray.800">
          {testimonials[current].name}
        </Text>
        <Text color="gray.500">{testimonials[current].role}</Text>
      </motion.div>
    </AnimatePresence>

    <Flex justify="space-between" mt={-32}>
      <Icon
        as={FaArrowLeft}
        boxSize={6}
        cursor="pointer"
        onClick={prevSlide}
      />
      <Icon
        as={FaArrowRight}
        boxSize={6}
        cursor="pointer"
        onClick={nextSlide}
      />
    </Flex>
  </Box>
</Box>
    </Box>
  );
};

export default Home;
