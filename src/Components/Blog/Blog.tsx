import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Grid,
  Image,
  VStack,
  HStack,
  Avatar,
  Select,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}


const blogPosts: BlogPost[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: "Practicals on making Doughnuts and Fish Pie",
  description:
    "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  image: "/src/assets/Image.png",
  author: "Alec Whitten",
  date: "17 Jan 2022",
}));


const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const navigate = useNavigate();

  
  const handleImageClick = () => {
    if (post.id === 1) {
      navigate("/practicals");
    }
  };

  return (
    <Box
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      transition="all 0.2s ease"
      _hover={{ transform: "translateY(-3px)", boxShadow: "md" }}
    >
      <Image
        src={post.image}
        alt={post.title}
        w="100%"
        h="180px"
        objectFit="cover"
        cursor={post.id === 1 ? "pointer" : "default"}
        onClick={handleImageClick}
      />

      <Box p={5}>
        <Heading as="h3" fontSize="lg" mb={2}>
          {post.title}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {post.description}
        </Text>

        <HStack spacing={3}>
          <Avatar size="sm" name={post.author} src="/src/assets/Avatar.png" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="medium" fontSize="sm">
              {post.author}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {post.date}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};


const Blog: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box bg={bgColor} minH="100vh" py={16}>
      {/* ===== Header Section ===== */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} mb={{ base: 10, md: 16 }}>
        <Flex direction="column" align={{ base: "stretch", md: "flex-start" }} gap={3}>
          <Heading 
            as="h1" 
            fontSize={{ base: "3xl", md: "4xl" }} 
            fontWeight="bold"
            lineHeight="shorter"
          >
            Recent Articles
          </Heading>

          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
            Keep yourself always in the loop
          </Text>

          <Flex
            mt={{ base: 3, md: 4 }}
            gap={3}
            align="stretch"
            direction={{ base: "column", sm: "row" }}
            w="100%"
          >
            <Input
              placeholder="Enter your email"
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              maxW={{ base: "100%", sm: "300px" }}
              _focus={{ borderColor: "gray.400", boxShadow: "sm" }}
              h={{ base: "40px", md: "44px" }}
              fontSize={{ base: "sm", md: "md" }}
            />
            <Button
              colorScheme="blue"
              borderRadius="md"
              px={6}
              h={{ base: "40px", md: "44px" }}
              flexShrink={0}
              w={{ base: "100%", sm: "auto" }}
            >
              Get started
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* ===== Search and Filter Bar ===== */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Flex
          justify="space-between"
          align="stretch"
          mb={10}
          direction={{ base: "column", md: "row" }}
          gap={4}
          w="100%"
        >
          {/* Search Bar */}
          <InputGroup maxW={{ base: "100%", md: "320px" }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search articles..."
              bg="white"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.200"
              _focus={{ borderColor: "gray.400", boxShadow: "sm" }}
              fontSize={{ base: "sm", md: "md" }}
            />
          </InputGroup>

          {/* Filter Dropdown */}
          <Select
            maxW={{ base: "100%", md: "200px" }}
            icon={<ChevronDownIcon />}
            defaultValue="newest"
            bg="white"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            _focus={{ borderColor: "gray.400", boxShadow: "sm" }}
            fontSize={{ base: "sm", md: "md" }}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </Select>
        </Flex>

        {/* ===== Blog Grid ===== */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Grid>

        <Flex 
          justify="center"
          align="center" 
          mt={12}
          gap={4}
        >
          <Button
            leftIcon={<ChevronLeftIcon />}
            variant="outline"
            borderColor="gray.300"
            borderRadius="lg"
            size={{ base: "sm", md: "md" }}
          >
            Previous
          </Button>

          <Text 
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            fontWeight="medium"
          >
            1 of 10
          </Text>

          <Button
            rightIcon={<ChevronRightIcon />}
            variant="outline"
            borderColor="gray.300"
            borderRadius="lg"
            size={{ base: "sm", md: "md" }}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Blog;
