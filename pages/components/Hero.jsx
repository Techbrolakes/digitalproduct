import { Box, Heading, Text, Flex } from "@chakra-ui/react";

import React from "react";

function Hero() {
  return (
    <Flex
      flexDirection={"column"}
      align={"center"}
      justify={"center"}
      textColor={"#fff"}
      textAlign={"center"}
    >
      <Box py={"50px"}>
        <Heading
          py={"10px"}
          lineHeight={"81.6px"}
          fontSize={["26px", "30px", "48px", "58px"]}
          fontWeight={"500"}
        >
          A Digital Product Design Agency
        </Heading>
        <Text py={"10px"}>We are Creative and Professional Digital Agency</Text>
        <Box
          mx={"auto"}
          width={"194px"}
          background={"#fff"}
          borderRadius={"60px"}
          px={"20px"}
          py={"12px"}
          textColor={"#57B3FE"}
        >
          <Text lineHeight={"20.72px"} fontSize={"14px"} fontWeight={"700"}>
            Get Started
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default Hero;
