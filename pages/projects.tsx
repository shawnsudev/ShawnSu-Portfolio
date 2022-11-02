import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import { useRef } from "react";
import PageTitle from "../components/PageTitle";
import { rubberband } from "../utils/animation";
import styles from "../styles/Home.module.css";
import Continue from "../components/Continue";
import DecorativeTag from "../components/DecorativeTag";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";
import Card from "../components/Card";
import projects from "../data/projects.json";

const { personalProjects } = projects;

const Projects: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const pageTitle = ["My Projects"];

  return (
    <Box id="projects" className={styles.main}>
      <DecorativeTag content="section" hExpand="2.5rem" vExpand="0rem">
        <Box>
          <DecorativeTag content="h2">
            <PageTitle ref={ref} pageTitle={pageTitle} isInView={isInView} />
          </DecorativeTag>

          <DecorativeTag content="grid">
            <FadeInContainer>
              {/* Personal Projects */}
              <Box>
                <Heading as="h3" size="lg">
                  New Personal Projects
                </Heading>
                <Flex justify={"space-around"}>
                  {personalProjects.map((project) => (
                    <FadeInItem>
                      <Card card={project} w="20rem" />
                    </FadeInItem>
                  ))}
                </Flex>
              </Box>

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

              {/* Class Projects */}
              <Box>
                <Heading as="h3">Class Projects</Heading>
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
          </DecorativeTag>
        </Box>
      </DecorativeTag>
      <Continue />
    </Box>
  );
};

export default Projects;
