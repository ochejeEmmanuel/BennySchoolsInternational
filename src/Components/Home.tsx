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
    </Box>
  );
};

export default Home;
