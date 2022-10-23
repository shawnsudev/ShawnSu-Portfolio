import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import { useRef } from "react";
import PageTitle from "../components/PageTitle";
import { rubberband } from "../utils/animation";
import styles from "../styles/Home.module.css";
import Continue from "../components/Continue";
import BoxWithTags from "../components/BoxWithTags";

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
    <Box className={styles.main}>
      <BoxWithTags content="h2">
        <PageTitle ref={ref} pageTitle={pageTitle} isInView={isInView} />
      </BoxWithTags>

      {/* Personal Projects */}
      <BoxWithTags content="grid">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box>
            <Heading as="h3">Personal Projects</Heading>
            <Flex justify="space-around">
              <motion.div variants={item}>
                <Heading as="h4">Sudoku</Heading>
              </motion.div>
              <motion.div variants={item}>
                <Heading as="h4">Game of Life</Heading>
              </motion.div>
            </Flex>
          </Box>

          <Box>
            <Heading as="h3">Group Projects</Heading>
            <Flex justify="space-around">
              <motion.div variants={item}>
                <Heading as="h4">Sudoku</Heading>
              </motion.div>
              <motion.div variants={item}>
                <Heading as="h4">Game of Life</Heading>
              </motion.div>
            </Flex>
          </Box>
        </motion.div>
      </BoxWithTags>

      <Continue />
    </Box>
  );
};

export default Projects;
