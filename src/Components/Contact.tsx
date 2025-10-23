// import { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Heading,
//   Input,
//   Textarea,
//   Button,
//   VStack,
//   HStack,
//   Text,
//   Divider,
//   Image,
// } from '@chakra-ui/react'

// const App = () => {

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <Flex align="center" justify="center" height="100vh" bg="white">
//         <Image
//           src="src/assets/45.svg"
//           alt="Loading..."
//           boxSize="50px"
//         />
//       </Flex>
//     );
//   }

//   return (
//     <Flex
//       bg="#f1f1f1"
//       minH="100vh"
//       align="center"
//       justify="center"
//       py={10}
//       px={4}
//     >
//       <Box
//         bg="white"
//         w={{ base: '100%', md: '700px' }}
//         p={{ base: 6, md: 10 }}
//         boxShadow="md"
//       >
//         {/* Heading */}
//         <Heading
//           size="lg"
//           textAlign="center"
//           fontFamily="'Playfair Display', serif"
//           mb={8}
//           fontWeight="medium"
//           color="gray.700"
//         >
//           Send us a message
//         </Heading>

//         <VStack align="stretch" spacing={0}>
//           {/* TELL US YOUR NAME */}
//           <Box mb={6}>
//             <Text
//               fontWeight="bold"
//               fontSize="md"
//               fontFamily="'Playfair Display', serif"
//               textTransform="uppercase"
//               color="gray.700"
//               mb={2}
//             >
//               Tell us your name
//             </Text>
//             <Divider mb={2} />
//             <HStack spacing={0}>
//               <Input
//                 placeholder="First Name"
//                 border="none"
//                 borderRight="1px solid #e2e2e2"
//                 borderRadius="0"
//                 py={6}
//                 fontSize="sm"
//                 _focus={{ borderColor: 'none', boxShadow: 'none' }}
//               />
//               <Input
//                 placeholder="Last Name"
//                 border="none"
//                 borderRadius="0"
//                 py={6}
//                 fontSize="sm"
//                 _focus={{ borderColor: 'none', boxShadow: 'none' }}
//               />
//             </HStack>
//             <Divider />
//           </Box>

//           {/* ENTER YOUR EMAIL */}
//           <Box mb={6}>
//             <Text
//               fontWeight="bold"
//               fontSize="md"
//               fontFamily="'Playfair Display', serif"
//               textTransform="uppercase"
//               color="gray.700"
//               mb={2}
//             >
//               Enter your email
//             </Text>
//             <Divider mb={2} />
//             <Input
//               placeholder="e.g example@email.com"
//               border="none"
//               borderRadius="0"
//               py={6}
//               fontSize="sm"
//               _focus={{ borderColor: 'none', boxShadow: 'none' }}
//             />
//             <Divider />
//           </Box>

//           {/* ENTER PHONE NUMBER */}
//           <Box mb={6}>
//             <Text
//               fontWeight="bold"
//               fontSize="md"
//               fontFamily="'Playfair Display', serif"
//               textTransform="uppercase"
//               color="gray.700"
//               mb={2}
//             >
//               Enter phone number
//             </Text>
//             <Divider mb={2} />
//             <Input
//               placeholder="e.g 07000012345"
//               border="none"
//               borderRadius="0"
//               py={6}
//               fontSize="sm"
//               _focus={{ borderColor: 'none', boxShadow: 'none' }}
//             />
//             <Divider />
//           </Box>

//           {/* MESSAGE */}
//           <Box mb={6}>
//             <Text
//               fontWeight="bold"
//               fontSize="md"
//               fontFamily="'Playfair Display', serif"
//               textTransform="uppercase"
//               color="gray.700"
//               mb={2}
//             >
//               Message
//             </Text>
//             <Divider mb={2} />
//             <Textarea
//               placeholder="Write us a message"
//               border="none"
//               borderRadius="0"
//               py={4}
//               fontSize="sm"
//               minH="100px"
//               _focus={{ borderColor: 'none', boxShadow: 'none' }}
//             />
//             <Divider />
//           </Box>

//           {/* SEND BUTTON */}
//           <Button
//             bg="#EAB308"
//             color="black"
//             size="lg"
//             py={6}
//             mx={10}
//             fontFamily="'Playfair Display', serif"
//             fontWeight="medium"
//             borderRadius="lg"
//             _hover={{ bg: '#d6a106' }}
//           >
//             Send Message
//           </Button>
//         </VStack>
//       </Box>
//     </Flex>
//   )
// }

// export default App
"use client"

import { Image, Flex, Box, Heading, Text, Input, FormControl, FormLabel, Stack, HStack, Button, Textarea } from "@chakra-ui/react"

const Contact = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      p={4}
    >
      {/* Form Container */}
      <Box w={{ base: "100%", md: "480px" }} mt={{ base: "1em", md: 0 }} h={{ base: "auto", md: "664px" }} mr={{ md: "2em" }}>
        <Box mb={4}>
          <Heading size="lg">Get in touch</Heading>
        </Box>
        <Box mb={8}>
          <Text color="rgba(102, 112, 133, 1)">
            Our friendly team would love to hear from you
          </Text>
        </Box>
        <Stack spacing={4} align="stretch">
          {/* First Name and Last Name side by side on larger screens, stacked on mobile */}
          <HStack spacing={4} flexWrap="wrap" justify="space-between" flexDir={{ base: "column", md: "row" }}>
            <FormControl id="firstName" flex={1}>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First name" height="44px" />
            </FormControl>
            <FormControl id="lastName" flex={1}>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last name" height="44px" />
            </FormControl>
          </HStack>

          {/* Email */}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input placeholder="you@company.com" height="44px" />
          </FormControl>

          {/* Phone number */}
          <FormControl id="phone">
            <FormLabel>Phone Number</FormLabel>
            <Input placeholder="NGN +234-000-0000" height="44px" />
          </FormControl>

          {/* Message textarea */}
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Leave us a message..." rows={4} height="134px" resize="none" />
          </FormControl>

          {/* Send message button */}
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            height="48px"
            mt={4}
          >
            Send message
          </Button>
        </Stack>
      </Box>

      {/* Image Container (hidden on mobile) */}
      <Box 
        w={{ base: "100%", md: "576px" }} 
        mt={{ base: "2em", md: 0 }} 
        display={{ base: "none", md: "block" }}
      >
        <Image src={"src/assets/Card (1).png"} w="100%" h="45em" objectFit="contain" />
      </Box>
    </Flex>
  );
}

export default Contact;