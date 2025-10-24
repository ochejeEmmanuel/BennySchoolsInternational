import { Box, Grid, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const cards = [
  {
    title: "Academic Achievements",
    desc: "Photos capturing proud moments of academic excellence, award ceremonies, and noteworthy achievements by our students.",
  },
  {
    title: "Creative Expressions",
    desc: "A showcase of artwork, performances, and creative projects from our talented students, reflecting their artistic prowess.",
  },
  {
    title: "Sports and Athletics",
    desc: "Action shots and team spirit moments from various sports and athletic events. Celebrate the dedication and sportsmanship of our student athletes.",
  },
  {
    title: "Cultural Celebrations",
    desc: "Immersive images from cultural events, festivals, and celebrations that highlight the diversity and unity within our school community.",
  },
  {
    title: "Community Outreach",
    desc: "Engaging photos that capture the spirit of community service, charity events, and initiatives where our students contribute.",
  },
  {
    title: "Special Events",
    desc: "Highlights from special events such as school fairs, graduation ceremonies, and other memorable occasions that make our school unique.",
  },
];

export default function Gallery() {
  return (
    <Box py={{ base: 10, lg: 10 }}>
      
      <Box mx={{base: 5, lg: 20}}>
        <Text fontSize="md" color="blue.500" fontWeight="semibold" mb={4}>
          Gallery
        </Text>

        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="flex-start" mb={12} gap={{ base: 4, md: 8 }}>
          <Box>
            <Heading fontSize={{ base: "4xl", lg: "4xl" }} width={{base: "350px", lg: "500px"}} mb={4}>
              Unleashing Brilliance, Inspiring Futures: Benny's Extraordinary Journey
            </Heading>
          </Box>
          <Text maxW={{ base: "100%", md: "40%" }} color="gray.600" fontSize="md">
            Journey through the heart of BIS with our carefully curated gallery. Each image tells a story of achievement, creativity, and community spirit. From the joy of academic success to the exhilaration of a winning goal, our gallery encapsulates the essence of our school life.
          </Text>
        </Flex>

        <Grid templateColumns={{base: "none", lg: "repeat(3, 1fr)"}} gap="10">
          {cards.map((card, index) => (
            <Box key={index}>
              {index === 0 ? (
                <Link to="/gallery/achievements" style={{ textDecoration: "none" }}>
                  <Box
                    boxShadow="0px 4px 20px rgba(0,0,0,0.05)"
                    borderRadius="xl"
                    overflow="hidden"
                    bg="white"
                    cursor="pointer"
                    py={5} px="5"
                  >
                    <Box position="relative" w="100%" pb="56.25%">
                      <Image
                        src="src/assets/Image.png"
                        alt={card.title}
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius={"lg"}
                      />
                    </Box>
                    <Box pt={5}>
                      <Heading fontSize="24" mb={2} fontWeight="bold">
                        {card.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        {card.desc}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              ) : (
                <Box
                  boxShadow="0px 4px 20px rgba(0,0,0,0.05)"
                  borderRadius="xl"
                  overflow="hidden"
                  bg="white"
                  py={5} px="5"
                >
                  <Box position="relative" w="100%" pb="56.25%">
                    <Image
                      src="/src/assets/Image.png"
                      alt={card.title}
                      position="absolute"
                      top={0}
                      left={0}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      borderRadius="xl"
                    />
                  </Box>
                  <Box pt={5}>
                    <Heading fontSize="24" mb={2} fontWeight="bold">
                      {card.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                      {card.desc}
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Grid>


        
        <Image
          src="src/assets/Group 1.png"
          alt="Decorative group"
          display={{ base: "none", lg: "block" }}
          position="absolute"
          right={0}
          top="100vh"
          h={{ base: 0, lg: "220px" }}
          w="auto"
          objectFit="contain"
          pointerEvents="none"
          zIndex={0}
        />
      </Box>
    </Box>
  );
}
