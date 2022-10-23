import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import { useRef } from "react";
import PageTitle from "../components/PageTitle";
import { rubberband } from "../utils/animation";
import styles from "../styles/Home.module.css";
import Continue from "../components/Continue";
import BoxWithTags from "../components/BoxWithTags";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";

const Projects: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const container = {
    show: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  };
  // const item = {
  //   hidden: { y: 100, opacity: 0 },
  //   show: {
  //     y: isInView ? 0 : 100,
  //     opacity: isInView ? 1 : 0,
  //     transition: {
  //       ease: "easeOut",
  //       duration: 1,
  //     },
  //   },
  // };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  const pageTitle = ["My Projects"];

  return (
    <Box id="projects" className={styles.main}>
      <BoxWithTags content="h2">
        <PageTitle ref={ref} pageTitle={pageTitle} isInView={isInView} />
      </BoxWithTags>

      {/* Personal Projects */}
      <BoxWithTags content="grid">
        <FadeInContainer>
          <Box>
            <Heading as="h3">Personal Projects</Heading>
            <Flex justify="space-around">
              <FadeInItem>
                <Heading as="h4">Sudoku</Heading>
              </FadeInItem>
              <FadeInItem>
                <Heading as="h4">Game of Life</Heading>
              </FadeInItem>
            </Flex>
          </Box>

          <Box>
            <Heading as="h3">Group Projects</Heading>
            <Flex justify="space-around">
              <FadeInItem>
                <Heading as="h4">project 1</Heading>
              </FadeInItem>
              <FadeInItem>
                <Heading as="h4">project 2</Heading>
              </FadeInItem>
              <FadeInItem>
                <Heading as="h4">project 3</Heading>
              </FadeInItem>
              <FadeInItem>
                <Heading as="h4">project 4</Heading>
              </FadeInItem>
            </Flex>
          </Box>
        </FadeInContainer>
      </BoxWithTags>

      <Continue />
    </Box>
  );
};

export default Projects;
