import React from 'react';
import {Box, Heading, Text, SimpleGrid, Image, VStack} from '@chakra-ui/react';

interface GalleryItem {
  title: string;
  description: string;
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Best graduating student",
    description: "Photos capturing proud moments of academic excellence, award ceremonies, and noteworthy achievements by our students.",
    imageUrl: ("src/assets/Image (2).png"),
  },
  {
    title: "Best graduating student",
    description: "Photos capturing proud moments of academic excellence, award ceremonies, and noteworthy achievements by our students.",
    imageUrl: "src/assets/Image (3).png",
  },
  {
    title: "Best graduating student",
    description: "Photos capturing proud moments of academic excellence, award ceremonies, and noteworthy achievements by our students.",
    imageUrl: "src/assets/Image (4).png",
  },
  {
    title: "Best graduating student",
    description: "Photos capturing proud moments of academic excellence, award ceremonies, and noteworthy achievements by our students.",
    imageUrl: "src/assets/Image (5).png",
  },
];

const GalleryCard: React.FC<GalleryItem> = ({ title, description, imageUrl }) => (
  <Box
    bg="white"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
    transition="transform 0.3s, box-shadow 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
  >
    {/* Image section */}
    <Image
      src={imageUrl}
      alt={title}
      objectFit="cover"
      h={{ base: "200px", md: "250px" }}
      w="full"
      borderTopRadius="lg"
    />
    
    {/* Content section */}
    <Box p={6}>
      <Heading as="h3" size="lg" fontWeight="semibold" mb={2} color="gray.800">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Box>
  </Box>
);


const App: React.FC = () => {
  return (
    <Box py={{ base: 10, lg: 10 }}>

      <VStack align="start" spacing={2} mb={10} mx={{base: 5, lg: 20}}> 
        <Text fontSize="md" color="blue.500" fontWeight="semibold" mb={4}>
          Gallery
        </Text>

        {/* Main Heading */}
        <Heading 
          as="h1" 
          fontSize={{ base: "3xl", md: "4xl" }} 
          fontWeight="extrabold" 
          color="gray.800"
        >
          Academic Achievements
        </Heading>
        
        {/* Description */}
        <Text 
          fontSize={{ base: "md", md: "lg" }} 
          color="gray.600" 
          maxW="3xl" 
        >
         Photos capturing proud moments of academic excellence, award ceremonies, and noteworthy achievements by our students.
        </Text>
      </VStack>

      {/* Gallery Grid */}
      <SimpleGrid 
        columns={{ base: 1, lg: 2 }}
        spacing={8} mx={{base: 5, lg: 20}}
      >
        {galleryItems.map((item, index) => (
          <GalleryCard 
            key={index} 
            title={item.title} 
            description={item.description} 
            imageUrl={item.imageUrl} 
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default App;
