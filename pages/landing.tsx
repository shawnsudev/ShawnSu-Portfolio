import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Skills from "./skills";
import animation from "../styles/animation.module.scss";
import { createRef, MouseEvent, useEffect, useRef } from "react";
import { rubberband, runRubberbandIn } from "../utils/animation";
import Projects from "./projects";
import Contact from "./contact";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "./about";
import PageTitle from "../components/PageTitle";
import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  textDecoration,
  withDefaultVariant,
} from "@chakra-ui/react";
import DecorativeTag from "../components/DecorativeTag";
import Continue from "../components/Continue";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";

const title = ["Hello", "I'm Shawn,", "new web developer"];

const Landing: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const rubberbandContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: isInView ? 1 : 0,
      transition: isInView
        ? {
            delayChildren: 0.5,
            staggerChildren: 0.08,
          }
        : {},
    },
  };
  const rubberbandItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 1.2,
      // scale: isInView ? 1.2 : 1,
      display: "inline-block",
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 600,
      },
    },
  };

  return (
    <Box
      id="landing"
      // px={{ base: "1rem", sm: "2rem", md: "4rem" }}
    >
      <Box>
        <motion.div
          ref={ref}
          variants={rubberbandContainer}
          initial="hidden"
          animate="show"
        >
          <DecorativeTag content="h1" right="1.5rem">
            <Heading as="h1" size={{ base: "2xl", sm: "3xl", md: "4xl" }}>
              {title.map((line, idx) => (
                <p key={"line" + idx}>
                  {line.split("").map((L, i) =>
                    L === " " ? (
                      " "
                    ) : L === "S" ? (
                      <motion.span key={"hello" + i} variants={rubberbandItem}>
                        <Text
                          // className={styles.logo2}
                          as="span"
                          fontSize="6rem"
                          fontWeight="bold"
                          color="purple.300"
                          textShadow=".85rem 0 #F6E05E"
                          onMouseEnter={rubberband}
                        >
                          {L}
                        </Text>
                      </motion.span>
                    ) : (
                      <motion.span key={"hello" + i} variants={rubberbandItem}>
                        <span onMouseEnter={rubberband}>{L}</span>
                      </motion.span>
                    )
                  )}
                </p>
              ))}
            </Heading>
          </DecorativeTag>
        </motion.div>

        <FadeInContainer once={false}>
          <DecorativeTag content="p">
            <FadeInItem>
              <Text
                as="p"
                color="blackAlpha.600"
                size="sm"
                letterSpacing={"0.3rem"}
              >
                New Frontend / React.JS Developer
              </Text>
            </FadeInItem>
          </DecorativeTag>

          <DecorativeTag content="button">
            <FadeInItem>
              <Box>
                <Button
                  variant="solid"
                  colorScheme="yellow"
                  letterSpacing={"0.2rem"}
                  fontFamily={"Darumadrop One, cursive"}
                  fontSize={"2xl"}
                  verticalAlign={"top"}
                  p="2rem"
                  _hover={{ color: "white" }}
                >
                  <Link href="/#projects" _hover={{ textDecoration: "none" }}>
                    My Portfolio
                  </Link>
                </Button>
              </Box>
            </FadeInItem>
          </DecorativeTag>
        </FadeInContainer>
      </Box>

      <Continue />
    </Box>
  );
};

export default Landing;
