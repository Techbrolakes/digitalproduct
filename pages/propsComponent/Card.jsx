import React from "react";
import { Heading, Text, Box, Image, Container } from "@chakra-ui/react";

function Card({ heading, text, logo, color }) {
  return (
    <div>
      <Box
        height={335}
        width={370}
        background={"#fff"}
        borderRadius={"15px"}
        shadow={"md"}
        padding={"30px"}
      >
        <Box
          background={color}
          width={"18%"}
          height={"20%"}
          borderRadius={"15px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={logo} width={10} height={10} alt="" />
        </Box>
        <Heading
          fontSize={"26px"}
          fontWeight={"700"}
          lineHeight={"30px"}
          py={"12px"}
        >
          {heading}
        </Heading>
        <Text lineHeight={"24px"} fontSize={"16px"} height={"96px"}>
          {text}
        </Text>
      </Box>
    </div>
  );
}

export default Card;
