import React from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <Box my={10} mx={{base: 5, lg: 20}} >

      <Box my={{base: 10, lg: 20}}>
        <Flex justify="space-between" direction={{base: "column", lg: "row"}}>
          <Box>
            Benny Int’l Schools

            <Box as="ul" listStyleType={"none"} display={{base: "flex", lg: "row"}} justifyContent={"space-between"}>
              <Box display={{base: "row", lg: "flex"}} gap={5}>
                <li><a href=""> Home </a></li>
                <li><a href=""> About </a></li>
                <li><a href=""> Contact </a></li>
              </Box>
              <Box display={{base: "row", lg: "flex"}} gap={5} ml={5}>
                <li><a href=""> Gallery </a></li>
                <li><a href=""> Blog </a></li>
              </Box>
            </Box>

          </Box>
          <Box mt={{base: 5, lg: 0}} alignItems={"center"}>
            <Text fontWeight={"bold"} >
              Stay up to date
            </Text>

            <Flex direction={{base: "column", lg: "row"}}>
              <Input placeholder="Enter your Email" />

              <Button bg={"blue.500"}>
                Subscribe
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Text mx={5}>
        © 2023 Benny International Schools. All rights reserved.
      </Text>
    </Box>
  );
};
export default Footer;