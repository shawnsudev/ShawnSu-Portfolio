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
import Card, { CardData } from "../components/Card/Card";
import projects from "../data/projects.json";
import { randomUUID } from "crypto";
import { v4 as uuidv4 } from "uuid";

const { personalProjects, schoolProjects } = projects;

const Projects: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const pageTitle = ["Portfolio / My Projects"];
  const cardWidth = { md: "30rem", lg: "35rem", xl: "30rem" };

  return (
    <Box id="projects">
      <DecorativeTag content="section" hExpand="1.5rem" vExpand="3rem">
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
                <Flex
                  justify={"space-around"}
                  wrap="wrap"
                  rowGap="3rem"
                  columnGap="0"
                >
                  {personalProjects.map((project, i) => (
                    <Box key={i}>
                      <FadeInItem
                      // key={i}
                      >
                        <Card card={project as CardData} w={cardWidth} />
                      </FadeInItem>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </FadeInContainer>

            <FadeInContainer>
              {/* School Projects */}
              <Box>
                <Heading as="h3" size="lg">School Projects</Heading>
                <Flex
                  justify="space-around"
                  wrap="wrap"
                  rowGap="3rem"
                  columnGap="0"
                >
                  {schoolProjects.map((project, i) => (
                    <FadeInItem key={i}>
                      <Card card={project as CardData} w={cardWidth} />
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
