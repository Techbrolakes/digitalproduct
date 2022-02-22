import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Brands() {
  return (
    <Box padding={"100px"} background={"#F2F2F2"}>
      <Flex
        textAlign={"center"}
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
      >
        <Text
          color={"#00A077"}
          fontWeight={700}
          fontSize={"12px"}
          lineHeight={"14.64px"}
          textTransform={"uppercase"}
        >
          Brands
        </Text>
        <Heading
          color={"#3B3E43"}
          lineHeight={"58.56px"}
          fontSize={"48px"}
          fontWeight={"500"}
          width={"897px"}
        >
          We work with thousands of the world’s leading brands
        </Heading>
      </Flex>
      <Flex align={"center"} justify={"center"} gap={"40px"}>
        <Image src="/Mazda.svg" alt="Mazda.png" />
        <Image src="/Atlassian.svg" alt="Atlassian.png" />
        <Image src="/Smashing.svg" alt="Smashing.png" />
        <Image src="/Qantus.svg" alt="Qantas.png" />
        <Image src="/Buysellads.svg" alt="Buysellads.png" />
      </Flex>
      <Flex align={"center"} justify={"center"} gap={"40px"}>
        <Image src="/nitro.svg" alt="Mazda.png" />
        <Image src="/cssmania.svg" alt="Atlassian.png" />
        <Image src="/popsugar.svg" alt="Smashing.png" />
        <Image src="/talentbin.svg" alt="Qantas.png" />
        <Image src="/civicrm.svg" alt="Buysellads.png" />
      </Flex>
      <Text
        width={"381px"}
        mx={"auto"}
        textAlign={"center"}
        lineHeight={"23.68px"}
        fontSize={"16px"}
        color={"#424A4D"}
      >
        You're going to be in good company. We work with world's leading brands.
      </Text>
    </Box>
  );
}

export default Brands;
