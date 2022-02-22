import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ProcessCard from "../propsComponent/ProcessCard";

function Process() {
  return (
    <Box
      backgroundImage={"/processbg.png"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"30px"}
      height={"1639px"}
    >
      <Container>
        <Box width={"718px"} textAlign={"center"}>
          <Text
            color={"#FFFFFF"}
            fontSize={"12px"}
            lineHeight={"14.64px"}
            fontWeight={"700"}
            opacity={"50%"}
            textTransform={"uppercase"}
          >
            how it works
          </Text>
          <Heading
            lineHeight={"58.56px"}
            fontSize={"48px"}
            fontWeight={"500"}
            color={"#FFFFFF"}
          >
            Our Process
          </Heading>
          <Text
            fontSize={"20px"}
            lineHeight={"34px"}
            fontWeight={"400"}
            color={"#fff"}
            fontStyle={"normal"}
          >
            We know the best solution for all of your business ideas and we can
            help you solve all business problems
          </Text>
        </Box>
      </Container>
      {/* DETAILS */}
      <ProcessCard
        icon="/scope.svg"
        image="/GP1.png"
        heading="Business Audit"
        text="An audit examines your business&rsquo;s financial records to verify they
            are accurate. This is done through a systematic review of your
            transactions."
      />
      <ProcessCard
        icon="/icon2.png"
        image="/GP2.png"
        heading="Data tracking"
        text="The hardware and software, which when used together allows you to know where something is at any point in time"
      />
      <ProcessCard
        icon="/icon3.png"
        image="/GP2.png"
        heading="Results"
        text="An audit examines your business&rsquo;s financial records to verify they are accurate. This is done through a systematic review of your transactions."
      />
    </Box>
  );
}

export default Process;
