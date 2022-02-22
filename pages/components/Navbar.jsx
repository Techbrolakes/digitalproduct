import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Drawer,
  Box,
  Button,
  Input,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  ListItem,
  ListIcon,
  Fade,
  UnorderedList,
  Image,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  });
  return (
    <div>
      {color ? (
        <Box
          textColor={"#fff"}
          py={"10px"}
          px={"50px"}
          width={["100%", "100%", "100%", "100%"]}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"fixed"}
          backgroundColor={"#719BFE"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Image src="/frame.svg" alt="frame" />
          </Box>
          {/* 2ND COLUMN CONTAINING THE LINKS */}
          <Box display={["none", "none", "block", "block"]}>
            <UnorderedList display={"flex"} gap={"20px"} fontWeight={"500"}>
              <ListItem>Home</ListItem>
              <ListItem>Your Benefit</ListItem>
              <ListItem>Our Process</ListItem>
              <ListItem>Testimonial</ListItem>
              <ListItem>Start A Project</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Box
              background={"#fff"}
              display={["none", "none", "block", "block"]}
              borderRadius={"60px"}
              px={"25px"}
              py={"10px"}
              textColor={"#57B3FE"}
            >
              <Text lineHeight={"20.72px"} fontSize={"14px"} fontWeight={"700"}>
                Get Started
              </Text>
            </Box>
            <Button
              display={["block", "block", "none", "none"]}
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
            >
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      ) : (
        <Box
          textColor={"#fff"}
          width={["100%", "100%", "92vw", "92vw"]}
          mx={"auto"}
          py={"10px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Image src="/frame.svg" alt="divider" />
          </Box>
          {/* 2ND COLUMN CONTAINING THE LINKS */}
          <Box display={["none", "none", "block", "block"]}>
            <UnorderedList display={"flex"} gap={"20px"} fontWeight={"500"}>
              <ListItem>Home</ListItem>
              <ListItem>Your Benefit</ListItem>
              <ListItem>Our Process</ListItem>
              <ListItem>Testimonial</ListItem>
              <ListItem>Start A Project</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Box
              background={"#fff"}
              display={["none", "none", "block", "block"]}
              borderRadius={"60px"}
              px={"25px"}
              py={"10px"}
              textColor={"#57B3FE"}
            >
              <Text lineHeight={"20.72px"} fontSize={"14px"} fontWeight={"700"}>
                Get Started
              </Text>
            </Box>
            <Button
              display={["block", "block", "none", "none"]}
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
            >
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Navbar;
