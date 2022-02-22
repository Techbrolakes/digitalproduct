import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Working() {
  return (
    <Box backgroundImage={"/base.png"} py={"100px"}>
      <Flex align={"center"} justify={"center"}>
        <Box width={"417px"}>
          <Text
            pb={"20px"}
            fontSize={"20px"}
            lineHeight={"14.64px"}
            color={"#fff"}
            opacity={"50%"}
          >
            start with us
          </Text>
          <Heading
            color={"#ffffff"}
            fontSize={"48px"}
            lineHeight={"58.56px"}
            fontWeight={"500"}
            pb={"20px"}
          >
            Start working faster today
          </Heading>
          <Text
            fontWeight={"400"}
            fontSize={"20px"}
            lineHeight={"34px"}
            color={"#FFFFFF"}
            pb={"20px"}
          >
            We know the best solution for all of your business ideas and we can
            help you solve all business problems
          </Text>
          <Button backgroundColor={"#ffffff"} textColor={"57B3FE"}>
            Get Started
          </Button>
        </Box>
        <Box>
          <Image src="/working.png" height={"523px"} width={"624px"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Working;
