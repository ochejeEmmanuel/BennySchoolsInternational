import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Avatar,
  HStack,
  Divider,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin, FaLink } from "react-icons/fa";

interface ArticleHeader {
  publishDate: string;
  title: string;
}

const Practicals: React.FC = () => {
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const sectionBg = useColorModeValue("gray.50", "gray.800");

  const articleHeader: ArticleHeader = {
    publishDate: "20 Jan 2022",
    title: "Practicals on making Doughnuts and Fish Pie"
  };

  return (
    <Box bg={bg} minH="100vh" py={{ base: 8, md: 16 }}>
      <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }}>
        {/* ===== Header Section ===== */}
        <VStack spacing={{ base: 3, md: 4 }} textAlign="center" mb={{ base: 4, md: 6 }}>
          <Text 
            fontSize={{ base: "xs", md: "sm" }} 
            color="blue.500" 
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Published {articleHeader.publishDate}
          </Text>
          <Heading 
            as="h1" 
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            maxW={{ base: "70%", md: "70%" }}
            mx="auto"
          >
            {articleHeader.title}
          </Heading>
        </VStack>

        <Divider my={{ base: 3, md: 4 }} />

        {/* ===== Author Section ===== */}
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align={{ base: "center", md: "center" }}
          gap={4}
          mb={6}
        >
          <HStack spacing={3}>
            <Avatar size="md" name="Olivia Rhye" src="src/assets/Avatar (1).png" />
            <VStack align="start" spacing={0}>
              <Text fontWeight="medium">Olivia Rhye</Text>
              <Text fontSize="sm" color="gray.500">
                20 Jan 2022
              </Text>
            </VStack>
          </HStack>

          <Flex 
            wrap="wrap" 
            gap={2}
            display={{ base: "none", md: "flex" }}
          >
            <Button
              leftIcon={<FaLink />}
              size="sm"
              variant="outline"
              aria-label="Copy link"
            >
              Copy link
            </Button>
            <IconButton
              aria-label="Share on Twitter"
              icon={<FaTwitter />}
              size="sm"
              variant="outline"
            />
            <IconButton
              aria-label="Share on Facebook"
              icon={<FaFacebook />}
              size="sm"
              variant="outline"
            />
            <IconButton
              aria-label="Share on LinkedIn"
              icon={<FaLinkedin />}
              size="sm"
              variant="outline"
            />
          </Flex>
        </Flex>

        
        <Box
          position="relative"
          w="100%"
          mb={{ base: 6, md: 10 }}
          mx="auto"
        >
          <Image
            src="src/assets/Image.png"
            alt="Doughnuts and Fish Pie Preparation"
            borderRadius="lg"
            w="100%"
            h={{ base: "200px", sm: "300px", md: "400px" }}
            objectFit="cover"
            objectPosition="center"
            boxShadow="lg"
          />
        </Box>

        {/* ===== Introduction ===== */}
        <VStack align="start" spacing={4} mb={10}>
          <Heading as="h2" fontSize="2xl">
            Introduction
          </Heading>
          <Text color={textColor}>
           Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          </Text>
          <Text color={textColor}>
            get quis mi enim, leo lacinia pharetra, semper. Eget in <u>volutpat mollis</u> at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit <u>tristique risus,</u> at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
          </Text>

          <Image
            src="src/assets/Image (1).png"
            alt="Office workspace"
            borderRadius="lg"
            w="100%"
            h="auto"
            objectFit="cover"
            my={4}
          />

          <Text color={textColor}>
           olor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          </Text>
          <Text color={textColor}>
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
          </Text>
          <Text color={textColor}>
            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
          </Text>
        </VStack>

        
        <VStack align="start" spacing={4} mb={10}>
          <Heading as="h2" fontSize="2xl">
            Other resources
          </Heading>
          <Text color={textColor}>
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
          </Text>

          <Box as="ol" pl={6} color={textColor}>
            <li>
              Lectus id duis vitae porttitor <u>enim gravida morbi</u>
            </li>
            <li>
              Eu turpis <u>posuere semper feugiat</u> volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat. 
            </li>
            <li>
             Suspendisse maecenas ac <u>donec scelerisque</u> diam sed est duis purus.
            </li>
          </Box>

          <Text color={textColor} mb={4}>
            Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
            </Text>
            <Text color={textColor}>
Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
          </Text>
        </VStack>

        {/* ===== Conclusion Section ===== */}
        <Box bg={sectionBg} p={8} borderRadius="lg" mb={10}>
          <Heading as="h2" fontSize="2xl" mb={4}>
            Conclusion
          </Heading>
          <Text color={textColor} mb={4}>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
          </Text>
          <Text color={textColor} mb={4}>
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
          </Text>
          <Text color={textColor} mb={4}>
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor
          </Text>
          <Text color={textColor}>
           Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
          </Text>
        </Box>

        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align={{ base: "start", md: "center" }}
          gap={4}
        >
          <HStack spacing={3}>
            <Avatar size="md" name="Olivia Rhye" src="src/assets/Avatar (1).png" />
            <VStack align="start" spacing={0}>
              <Text fontWeight="medium">Olivia Rhye</Text>
              <Text fontSize="sm" color="gray.500">
                Head Teacher, Home Economics
              </Text>
            </VStack>
          </HStack>

          <Flex 
            wrap="wrap" 
            gap={2}
          >
            <Button
              leftIcon={<FaLink />}
              size="sm"
              variant="outline"
              aria-label="Copy link"
            >
              Copy link
            </Button>
            <IconButton
              aria-label="Share on Twitter"
              icon={<FaTwitter />}
              size="sm"
              variant="outline"
            />
            <IconButton
              aria-label="Share on Facebook"
              icon={<FaFacebook />}
              size="sm"
              variant="outline"
            />
            <IconButton
              aria-label="Share on LinkedIn"
              icon={<FaLinkedin />}
              size="sm"
              variant="outline"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Practicals;
