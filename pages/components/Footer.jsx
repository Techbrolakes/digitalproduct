import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box py={"50px"} backgroundColor={"#000000"}>
      <Flex
        justify={"space-between"}
        mx={"auto"}
        align={"center"}
        width={"1070px"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Image src="/Cf.svg" alt="" width={"71px"} />
          <Image src="/Group.svg" alt="" />
        </Box>
        <UnorderedList
          color={"#cfcfcf"}
          fontSize={"16px"}
          fontWeight={"700"}
          lineHeight={"16px"}
          display={"flex"}
          textTransform={"capitalize"}
          gap={"20px"}
        >
          <ListItem>Home</ListItem>
          <ListItem>Your Benefits</ListItem>
          <ListItem>Our process</ListItem>
          <ListItem>Our works</ListItem>
          <ListItem>Testimonials</ListItem>
          <ListItem>Start a project</ListItem>
        </UnorderedList>
        <Flex gap={"20px"} mx={"10px"}>
          <Image src="/facebook.svg" />
          <Image src="/Instagram.svg" />
          <Image src="/Twitter.svg" />
        </Flex>
      </Flex>
      <Box width={"1070px"} mx={"auto"} my={"25px"}>
        <Image src="/Divider.svg" />
      </Box>
      <Box
        width={"1070px"}
        mx={"auto"}
        my={"10px"}
        color={"#CFCFCF"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Text> &copy; 2021, Company</Text>
        <UnorderedList display={"flex"} gap={"10px"}>
          <ListItem>Privacy policy</ListItem>
          <ListItem>Term of service</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default Footer;
