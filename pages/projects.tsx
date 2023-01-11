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
import { randomUUID } from "crypto";
import { v4 as uuidv4 } from "uuid";

const { personalProjects, schoolProjects } = projects;

const Projects: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const pageTitle = ["Portfolio / My Projects",];

  return (
    <Box id="projects" className={styles.main}>
      <DecorativeTag content="section" hExpand="2.5rem" vExpand="0rem">
        <Box>
          <DecorativeTag content="h2">
            <PageTitle ref={ref} titleTexts={pageTitle} isInView={isInView} />
          </DecorativeTag>

          <DecorativeTag content="grid">
            <FadeInContainer>
              {/* Personal Projects */}
              <Box>
                <Heading as="h3" size="lg">
                  Personal Projects
                </Heading>
                <Flex justify={"space-around"}>
                  {personalProjects.map((project, i) => (
                    <FadeInItem key={i}>
                      <Card card={project} w="20rem" />
                    </FadeInItem>
                  ))}
                </Flex>
              </Box>

              {/* School Projects */}
              <Box>
                <Heading as="h3">School Projects</Heading>
                <Flex justify="space-around">
                  {schoolProjects.map((project, i) => (
                    <FadeInItem key={i}>
                      <Card card={project} w="20rem" />
                    </FadeInItem>
                  ))}
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
