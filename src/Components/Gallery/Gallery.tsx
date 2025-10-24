// import { Box, Image, Text, SimpleGrid, Stack, Flex } from "@chakra-ui/react";
// import { useState, useEffect } from "react";

// const Gallery = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const galleryItems = [
//     {
//       img: "http://res.cloudinary.com/die983xja/image/upload/v1638548316/Benny/gallery/45412420-7ae3-42d1-839f-50bdeb0e5fce.jpg",
//       title: "Food and Nutrition Practical",
//       caption:
//         "Students of SS2 Art and Science having food and Nutrition Practicals",
//     },
//     {
//       img: "https://res.cloudinary.com/die983xja/image/upload/v1638548672/Benny/gallery/423b5050-dcb4-4e62-9cca-31fbf84df12f.jpg",
//       title: "Food & Nut",
//       caption: "Food and nutrition practicals",
//     },
//     {
//       img: "https://res.cloudinary.com/die983xja/image/upload/v1638548776/Benny/gallery/b70816b6-47ec-41fc-b042-7cee88c4e55e.jpg",
//       title: "Food & Nut Practical",
//       caption: "SS2 art and Science Food and Nutrition Practical",
//     },
//     {
//       img: "http://res.cloudinary.com/die983xja/image/upload/v1638548898/Benny/gallery/b7ab6628-8169-4fa5-a24e-8337650838ca.jpg",
//       title: "Food % Nut",
//       caption: "Food and Nutrition Practical",
//     },
//     {
//       img: "https://res.cloudinary.com/die983xja/image/upload/v1711871054/BENNY_PROD/gallery/5fc4205a-722c-40a6-8e5c-00ca3e5d0c10.png",
//       title: "Bayelsa State Mathematics Quiz 2023",
//       caption:
//         "Winners of the Bayelsa State Mathematics quiz 2023. Winner taking a photo shoot with the Honorable commissioner of Education, her parents, and her teacher.",
//     },
//     {
//       img: "http://res.cloudinary.com/die983xja/image/upload/v1711871235/BENNY_PROD/gallery/7816630d-5ad8-451f-a548-6b1d059c8d27.png",
//       title: "Bayelsa Mathematics Quiz 2023",
//       caption:
//         "The winner with the Commissioner of Education, her parents, and her teachers.",
//     },
//     {
//       img: "http://res.cloudinary.com/die983xja/image/upload/v1711871343/BENNY_PROD/gallery/d4afc99d-4d58-4d86-8b2d-74732d1402d5.png",
//       title: "Bayelsa Mathematics Quiz 2023",
//       caption:
//         "The winner getting set for her semifinals CBT test where she came out as the overall best with 91% score.",
//     },
//     {
//       img: "http://res.cloudinary.com/die983xja/image/upload/v1742843594/BENNY_PROD/gallery/2026709e-c941-4c71-893c-1fe80e122326.jpg",
//       title: "NCDMB Prize for Benny International High School",
//       caption:
//         "Grand finale and prize-giving ceremony of the Science Quiz Competition organized by NTA Yenagoa and sponsored by NCDMB.",
//     },
//     {
//       img: "https://res.cloudinary.com/die983xja/image/upload/v1743225998/BENNY_PROD/gallery/28ed7c9c-f622-4461-bc8d-5b404b733e50.jpg",
//       title: "NCDMB Prize Giving",
//       caption:
//         "NTA Science Quiz Competition — Benny School came up as runner-up.",
//     },
//     {
//       img: "https://res.cloudinary.com/die983xja/image/upload/v1743226343/BENNY_PROD/gallery/e58fb67b-2b81-4ae7-ae8b-7c9167abf54b.jpg",
//       title: "NTA/NCDMB Prize",
//       caption: "Okuata Divine and Ayim Thankgod receiving their gifts.",
//     },
//     {
//       img: "http://res.cloudinary.com/die983xja/image/upload/v1743226467/BENNY_PROD/gallery/ae46d8c6-8db7-43ba-afbc-dd2522c8ed98.jpg",
//       title: "NTA/NCDMB",
//       caption: "Benny School Prize Presentation Ceremony.",
//     },
//   ];

//   if (loading) {
//     return (
//       <Flex align="center" justify="center" height="100vh" bg="white">
//         <Image src="src/assets/45.svg" alt="Loading..." boxSize="70px" />
//       </Flex>
//     );
//   }

//   return (
//     <Box py={{ base: 10, md: 16 }} bg="gray.50" minH="100vh">
//       {/* Header */}
//       <Box textAlign="center" mb={10}>
//         <Text
//           fontSize={{ base: "3xl", md: "4xl" }}
//           fontWeight="bold"
//           color="black"
//           textTransform="uppercase"
//         >
//           Our Gallery
//         </Text>
//       </Box>

//       {/* Gallery Grid */}
//       <SimpleGrid
//         columns={{ base: 1, md: 3 }}
//         spacing={{ base: 10, md: 16 }}
//         w="90%"
//         mx="auto"
//       >
//         {galleryItems.map((item, i) => (
//           <Box
//             key={i}
//             borderRadius="md"
//             overflow="hidden"
//             bg="white"
//             boxShadow="md"
//             transition="all 0.3s ease"
//             _hover={{
//               transform: "scale(1.05)",
//               boxShadow: "xl",
//             }}
//           >
//             <Box position="relative">
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 w="100%"
//                 h={{ base: "300px", md: "400px" }}
//                 objectFit="cover"
//               />
//               {/* Overlay */}
//               <Box
//                 position="absolute"
//                 bottom="0"
//                 left="0"
//                 w="100%"
//                 bg="white"
//                 color="gray.700"
//                 py={3}
//                 px={4}
//               >
//                 <Stack spacing={1}>
//                   <Text fontWeight="medium" fontSize="xl">
//                     {item.title}
//                   </Text>
//                   <Text fontSize="md" color="gray.600">
//                     {item.caption}
//                   </Text>
//                 </Stack>
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default Gallery;




// import React from "react";
import { Box, Container, SimpleGrid, Image, Heading, Text, Flex } from "@chakra-ui/react";
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
    desc: "Engaging photos that capture the spirit of community service, charity events, and initiatives where our students contribute to the well-being of others.",
  },
  {
    title: "Special Events",
    desc: "Highlights from special events such as school fairs, graduation ceremonies, and other memorable occasions that make our school unique.",
  },
];

export default function Gallery() {
  return (
    <Box py={{ base: 10, md: 20 }}>
      <Container maxW="7xl">
        <Text fontSize="md" color="blue.500" fontWeight="semibold" mb={4}>
          Gallery
        </Text>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="flex-start" mb={12} gap={{ base: 4, md: 8 }}>
          <Box maxW={{ base: "100%", md: "40%" }}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={4}>
              Unleashing Brilliance, Inspiring Futures: Benny's Extraordinary Journey
            </Heading>
          </Box>
          <Text maxW={{ base: "100%", md: "40%" }} color="gray.600" fontSize="md">
            Journey through the heart of BIS with our carefully curated gallery. Each image tells a story of achievement, creativity, and community spirit. From the joy of academic success to the exhilaration of a winning goal, our gallery encapsulates the essence of our school life.
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8, lg: 12 }}>
          {cards.map((card, index) => (
            <Box key={index}>
              {index === 0 ? (
                <Link to="/achievements" style={{ textDecoration: "none" }}>
                  <Box
                    boxShadow="0px 4px 20px rgba(0,0,0,0.05)"
                    borderRadius="xl"
                    overflow="hidden"
                    bg="white"
                    cursor="pointer"
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
                      />
                    </Box>
                    <Box p={6}>
                      <Heading fontSize="lg" mb={2} fontWeight="bold">
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
                    />
                  </Box>
                  <Box p={6}>
                    <Heading fontSize="lg" mb={2} fontWeight="bold">
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
        </SimpleGrid>


        
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
      </Container>
    </Box>
  );
}
