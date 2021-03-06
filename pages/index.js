import { Flex, Box, Image } from "@chakra-ui/react";
import Head from "next/head";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import Process from "./components/Process";
import Brands from "./components/Brands";
import Working from "./components/Working";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Product Design Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          height={["100%", "100%", "150vh", "150vh"]}
          backgroundImage={"url(/background.png)"}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center center"}
        >
          <Navbar />
          <Hero />
          <Image
            objectFit={"cover"}
            src="/img.png"
            alt=""
            width={"900px"}
            mx={"auto"}
          />
        </Box>

        <Box mt={200}>
          <Features />
        </Box>
        <Box mt={200}>
          <Process />
        </Box>
        <Box>
          <Brands />
        </Box>
        <Box>
          <Working />
        </Box>
        <Box>
          <Footer />
        </Box>
      </main>
    </div>
  );
}
