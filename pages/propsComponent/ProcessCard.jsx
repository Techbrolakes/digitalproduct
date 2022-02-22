import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function ProcessCard({ heading, text, image, icon }) {
  return (
    <div>
      <Flex
        width={"1170px"}
        height={"329px"}
        borderRadius={"15px"}
        backgroundColor={"#ffffff"}
        justify={"center"}
        align={"center"}
        shadow={"md"}
      >
        <img src={image} alt="" />
        <Box width={"530px"}>
          <img src={icon} alt="" />
          <Heading
            fontSize={"22px"}
            lineHeight={"30px"}
            fontWeight={700}
            color={"#3B3E43"}
          >
            {heading}
          </Heading>
          <Text
            fontSize={"16px"}
            lineHeight={"24px"}
            color={"#595E64"}
            py={"16px"}
          >
            {text}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default ProcessCard;
