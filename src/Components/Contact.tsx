import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Text,
  Divider,
  Image,
} from '@chakra-ui/react'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="white">
        <Image
          src="src/assets/45.svg"
          alt="Loading..."
          boxSize="50px"
        />
      </Flex>
    );
  }

  return (
    <Flex
      bg="#f1f1f1"
      minH="100vh"
      align="center"
      justify="center"
      py={10}
      px={4}
    >
      <Box
        bg="white"
        w={{ base: '100%', md: '700px' }}
        p={{ base: 6, md: 10 }}
        boxShadow="md"
      >
        {/* Heading */}
        <Heading
          size="lg"
          textAlign="center"
          fontFamily="'Playfair Display', serif"
          mb={8}
          fontWeight="medium"
          color="gray.700"
        >
          Send us a message
        </Heading>

        <VStack align="stretch" spacing={0}>
          {/* TELL US YOUR NAME */}
          <Box mb={6}>
            <Text
              fontWeight="bold"
              fontSize="md"
              fontFamily="'Playfair Display', serif"
              textTransform="uppercase"
              color="gray.700"
              mb={2}
            >
              Tell us your name
            </Text>
            <Divider mb={2} />
            <HStack spacing={0}>
              <Input
                placeholder="First Name"
                border="none"
                borderRight="1px solid #e2e2e2"
                borderRadius="0"
                py={6}
                fontSize="sm"
                _focus={{ borderColor: 'none', boxShadow: 'none' }}
              />
              <Input
                placeholder="Last Name"
                border="none"
                borderRadius="0"
                py={6}
                fontSize="sm"
                _focus={{ borderColor: 'none', boxShadow: 'none' }}
              />
            </HStack>
            <Divider />
          </Box>

          {/* ENTER YOUR EMAIL */}
          <Box mb={6}>
            <Text
              fontWeight="bold"
              fontSize="md"
              fontFamily="'Playfair Display', serif"
              textTransform="uppercase"
              color="gray.700"
              mb={2}
            >
              Enter your email
            </Text>
            <Divider mb={2} />
            <Input
              placeholder="e.g example@email.com"
              border="none"
              borderRadius="0"
              py={6}
              fontSize="sm"
              _focus={{ borderColor: 'none', boxShadow: 'none' }}
            />
            <Divider />
          </Box>

          {/* ENTER PHONE NUMBER */}
          <Box mb={6}>
            <Text
              fontWeight="bold"
              fontSize="md"
              fontFamily="'Playfair Display', serif"
              textTransform="uppercase"
              color="gray.700"
              mb={2}
            >
              Enter phone number
            </Text>
            <Divider mb={2} />
            <Input
              placeholder="e.g 07000012345"
              border="none"
              borderRadius="0"
              py={6}
              fontSize="sm"
              _focus={{ borderColor: 'none', boxShadow: 'none' }}
            />
            <Divider />
          </Box>

          {/* MESSAGE */}
          <Box mb={6}>
            <Text
              fontWeight="bold"
              fontSize="md"
              fontFamily="'Playfair Display', serif"
              textTransform="uppercase"
              color="gray.700"
              mb={2}
            >
              Message
            </Text>
            <Divider mb={2} />
            <Textarea
              placeholder="Write us a message"
              border="none"
              borderRadius="0"
              py={4}
              fontSize="sm"
              minH="100px"
              _focus={{ borderColor: 'none', boxShadow: 'none' }}
            />
            <Divider />
          </Box>

          {/* SEND BUTTON */}
          <Button
            bg="#EAB308"
            color="black"
            size="lg"
            py={6}
            mx={10}
            fontFamily="'Playfair Display', serif"
            fontWeight="medium"
            borderRadius="lg"
            _hover={{ bg: '#d6a106' }}
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}

export default App
