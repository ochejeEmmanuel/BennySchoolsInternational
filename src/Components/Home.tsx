import {
  Box,
  Text,
  Flex,
  Grid,
  Avatar
} from "@chakra-ui/react";
import heroImage from '../assets/hero-img.png'
import leaveleft from '../assets/leave-left.png'
import leaveright from '../assets/leave-right.png'
import boymobile from '../assets/boymobile.png'
import manteacher from '../assets/manTeacher.png'
import graduation from '../assets/graduation.png'
import affordable from '../assets/affordable.png'
import compliant from '../assets/compliant.png'
import Gallery from "../assets/gallerybg.jpg";
import Avatars from '../assets/avatar.png'
import mathildemobile from '../assets/mathildemobile.jpg'

const Home = () => {
  return (
    <Box w="100%" py={{base: 10, md: 4 }}>

      <Text>
        <Text fontSize={{base:"4xl", lg: "2xl"}} gap="5" fontWeight="bold" mx={{base: 5, lg: 20}} width={{base: "80", lg: "600px"}} lineHeight="shorter">
          <Text as="span" color="#0675C6">
            20 Years of Excellence
          </Text> 
          : The Inspiring Journey of Benny International Schools (BIS)
        </Text>
        <Text color="" mt={5} mx={{base: 5, lg: 20}} width={{base: "80", lg: "550px"}}> 
          Benny International Schools (BIS) was established on October 1st, 2001 by Mrs. Beniere O. Ifidi due to her desire to contribute to the manpower development of the state.
        </Text>
      </Text>

      <Flex align="center" ml={{base: "5", lg: "20"}} mt={10}>
        <Box display={{base: "none", lg: "block"}} width={"100%"} mr={16}>
          <img src={heroImage} width={"100%"} alt="" />
        </Box>

        <Box position={"absolute"} left={"75pc"} top={"20pc"} display={{base: "none", lg: "block"}}>
          <img src={leaveleft}  alt="" />
        </Box>
      </Flex>

      <Box position={"absolute"} top={"62pc"} display={{base: "none", lg: "block"}}>
        <img src={leaveright}  alt="" />
      </Box>

      <Box display={{base: "block", lg: "none"}} ml={5} mr={{base: "none", lg: 20}} width={"90%"}>
        <img src={boymobile} width={"100%"} alt="" />          
      </Box>

      <Flex bg={"#F5FBFF"} pl={{base: "5", lg: "20"}} direction={{base: "column", lg: "row"}} mt={10} justify="space-between" py={{base: 14, lg: 20}}>
        <Box>
          <Text fontSize={'32'} fontWeight={'bold'}>
            Why Choose Us?
          </Text>
          <Text my={5} mr={5}>
            Diligence and Excellence is our motto and watch words. We have put things in place as we grow to better accommodate the educational needs of our 21st century students.
          </Text>
        </Box>

        <Box ml={{base: "none", lg: "14"}}>
          <Grid templateColumns={{base: "none", lg: "repeat(2, 1fr)"}} gap="14">
            <Box>
              <img src={manteacher} alt="" />

              <Text mt={3} fontSize={'20'} fontWeight={'bold'}>
                Highly Qualified Teachers
              </Text>

              <Text mt={3} mr={5}>
                We ensure to hire highly qualified teachers for teaching roles in our school, so that students get the best.
              </Text>
            </Box>
            
            <Box>
              <img src={graduation} alt="" />

              <Text mt={3} fontSize={'20'} fontWeight={'bold'}>
                Conducive Learning Environment
              </Text>

              <Text mt={3} mr={5}>
                Our school has great facilities and space to ensure students get the best.
              </Text>
            </Box>
          </Grid>

          <Grid templateColumns={{base: "none", lg: "repeat(2, 1fr)"}} gap="14" mt={{base: 5, lg: 10}}>
            <Box>
              <img src={affordable} alt="" />

              <Text mt={3} fontSize={'20'} fontWeight={'bold'}>
                Affordable
              </Text>

              <Text mt={3} mr={5}>
                Our fees are moderate and affordable.
              </Text>
            </Box>
            
            <Box>
              <img src={compliant} alt="" />

              <Text mt={3} fontSize={'20'} fontWeight={'bold'}>
                ICT Compliant
              </Text>

              <Text mt={3} mr={5}>
                We ensure our students graduate with proficient ICT skills. Student performance is monitored closely via our school portal, giving parents real time feedback on the performance of their wards.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Flex>

        <Box width={{base: 96, lg: "670px"}} mt={10} ml={{base: "5", lg: "20"}} mb={10}>
          <Text fontWeight={"bold"} fontSize={32}>
            Recent Activites
          </Text>
          <Text>
            Stay up-to-date with the vibrant and dynamic life at our school. Explore our recent activities, events, and achievements that showcase the spirit of our learning community. From academic milestones to creative endeavors, athletic triumphs to community outreach, this is where you'll find a glimpse of the exciting happenings at our school.
          </Text>
        </Box>

        <Grid templateColumns={{base: "none", lg: "repeat(3, 1fr)"}}mx={{base: 5, lg: 20}} gap="10">
          <Box borderRadius={"lg"} boxShadow={"lg"} pb={5} px="5">
            <Box borderRadius={"lg"} >
              <img src={Gallery} alt="" />
            </Box>

            <Text fontWeight={"bold"} fontSize={24} lineHeight={7} my={3}>
              Practicals on making Doughnuts and Fish Pie
            </Text>
            <Text>
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </Text>

            <Flex mt={5}>
              <Avatar name="John Doe" src={Avatars} />
              <Box ml={5}>
                <Text fontWeight={"bold"}>Alec Whitten</Text>
                <Text>17 Jan 2022</Text>
              </Box>
            </Flex>
          </Box>

          <Box borderRadius={"lg"} boxShadow={"lg"} pb={5} px="5">
            <img src={Gallery} alt="" />

            <Text fontWeight={"bold"} fontSize={24} lineHeight={7} my={3}>
              Practicals on making Doughnuts and Fish Pie
            </Text>
            <Text>
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </Text>

            <Flex mt={5}>
              <Avatar name="John Doe" src={Avatars}/>
              <Box ml={5}>
                <Text fontWeight={"bold"}>Alec Whitten</Text>
                <Text>17 Jan 2022</Text>
              </Box>
            </Flex>
          </Box>

          <Box borderRadius={"lg"} boxShadow={"lg"} pb={5} px="5">
            <img src={Gallery} alt="" />

            <Text fontWeight={"bold"} fontSize={24} lineHeight={7} my={3}>
              Practicals on making Doughnuts and Fish Pie
            </Text>
            <Text>
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </Text>

            <Flex mt={5}>
              <Avatar name="John Doe" src={Avatars} />
              <Box ml={5}>
                <Text fontWeight={"bold"}>Alec Whitten</Text>
                <Text>17 Jan 2022</Text>
              </Box>
            </Flex>
          </Box>
        </Grid>

        <Box bg={"#F5FBFF"} mt={10} px={{base: 5, lg: 20}} pb={14}>
          <Text pt={5} pb={5} fontSize={24} fontWeight={"bold"}>
            What parents have to say
          </Text>

          <Flex direction={{base: "column", lg: "row"}} pl={{base: "none", lg: "10"}} bg={"white"} justify="space-between" borderRadius={"lg"} align={{base: "none", lg: "center"}}>
            <Box>
              <Text fontSize={{base: 16, lg: 18}} width={{base: "none", lg: "35pc"}} pl={{base: 5, lg: "none"}} py={{base: 10, lg: "none"}}>
                We are thrilled with the education and support our child receives at this school. The teachers are dedicated, and the curriculum is challenging yet engaging. Our son has not only excelled academically but has also developed strong character traits, thanks to the school's values-based education.
              </Text>
            </Box>

            <img src={mathildemobile} style={{
            width: '100%', // Use percentage for responsive behavior
            maxWidth: '400px', // Limit max width
            }} alt="" />           
          </Flex>
        </Box>

      {/* === Hero Section =  == */}
      {/* <Box
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
      </Box> */}

      {/* === Welcome Section === */}
      {/* <Box
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
      </Box> */}

      {/* === Why Choose Us Section === */}
      {/* <Box bg="blue.600" color="white" py={{ base: 12, md: 20 }} mt={16}>
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
      </Box> */}

      {/* === Recent Activities Section === */}
      {/* <Box bg="blue.50" py={{ base: 12, md: 20 }}>
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
      </Box> */}

      {/* === Testimonials Section === */}
      {/* <Box py={{ base: 16, md: 24 }} textAlign="center" bg="white">
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
      </Box> */}
    </Box>
  );
};

export default Home;
