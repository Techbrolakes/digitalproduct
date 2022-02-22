import { Heading, Text, Box, Image, Container } from "@chakra-ui/react";
import React from "react";
import Card from "../propsComponent/Card";

function Features() {
  return (
    <Box
      background={"url(/shape.png), url(/shapeblue.png)"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"top right, bottom left"}
      padding={30}
      height={"843px"}
    >
      {/* MAIN box container */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Container>
          <Text
            color={"#00A077"}
            fontWeight={700}
            fontSize={"12px"}
            lineHeight={"14.64px"}
            textTransform={"uppercase"}
          >
            Features
          </Text>
          <Heading
            lineHeight={"58.56px"}
            fontSize={"48px"}
            fontWeight={"500"}
            width={"528px"}
            color={"#3B3E43"}
          >
            We are here to help you with
          </Heading>
        </Container>

        {/* CARD BOX */}
        <Box display={"flex"} gap={"30px"} justifyContent={"center"}>
          {/* CARD */}
          <Card
            heading="Grow Your Business"
            color="#FFE7DB"
            logo="/chart.svg"
            text="The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity."
          />
          {/* CARD */}
          <Card
            heading="Drive more sales"
            color={"#E7F2EF"}
            logo={"/Discount.svg"}
            text="A potential customer, once lost, is hard to retain back. But keeping some critical factors in mind, we can, for sure, use these loyalty programs as customer retention tools."
          />
          {/* CARD */}
          <Card
            heading="Handle by Expert"
            color={"#FAF3D8"}
            logo={"/User.svg"}
            text="We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively"
          />
        </Box>
        {/* CARD BOX */}
      </Box>
      {/* MAIN box container */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"20px"}
      >
        {/* CARD BOX */}
        <Box display={"flex"} gap={"30px"} justifyContent={"center"}>
          {/* CARD */}
          <Card
            heading="UX Research"
            color={"#C0F2EF"}
            logo={"/Search.svg"}
            text="UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes."
          />
          {/* CARD */}
          <Card
            heading="Business Audit"
            color={"#EDE7F2"}
            logo={"/Graph.svg"}
            text="An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. "
          />
          {/* CARD */}
          <Card
            heading="Data tracking"
            color={"#D8F0FA"}
            logo={"/Bag.svg"}
            text="The hardware and software, which when used together allows you to know where something is at any point in time"
          />
        </Box>
        {/* CARD BOX */}
      </Box>
    </Box>
  );
}

export default Features;
