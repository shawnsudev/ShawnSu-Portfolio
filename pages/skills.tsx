import {
  Box,
  Grid,
  GridItem,
  ListItem,
  Progress,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { NextPage } from "next";
import React, { useRef, useState } from "react";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";
import Continue from "../components/Continue";
import DecorativeTag from "../components/DecorativeTag";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";
import ToolStack, { ToolNames } from "../components/ToolStack";

type Stack = {
  name: string;
  tools: string[];
};

const stacks: Stack[] = [
  {
    name: "Frontend",
    tools: ["react", "next", "sass", "framer-motion", "chakra-ui", "redux"],
  },
  {
    name: "Backend",
    tools: ["node", "express", "mongodb","docker", "auth0"],
  },
  {
    name: "Cloud Services",
    tools: ["github", "netlify", "heroku", "vercel"],
  },
  {
    name: "DEV Tools",
    tools: ["macos", "vscode", "vim", "git", "insomnia", "postman"],
  },
  {
    name: "Productivity Tools",
    tools: ["google-meet", "slack", "notion", "miro"],
  },
];

const Skills: NextPage = (props) => {
  const [skills, setSkills] = useState([
    { name: "Frontend", value: 80, colorScheme: "purple" },
    { name: "Backend", value: 60, colorScheme: "cyan" },
    { name: "React.js", value: 70, colorScheme: "green" },
    { name: "Express", value: 50, colorScheme: "messenger" },
    { name: "Next.js", value: 40, colorScheme: "yellow" },
    { name: "Typescript", value: 30, colorScheme: "red" },
  ]);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <Box id="skills" className={styles.main}>
      <DecorativeTag content="section" hExpand="2.5rem" vExpand="7rem">
        <Box>
          {/* Title */}
          <DecorativeTag content="h2">
            <PageTitle
              ref={ref}
              isInView={isInView}
              titleTexts={["Skills", "&", "Experiences"]}
            />
          </DecorativeTag>

          <FadeInContainer>
            <SimpleGrid columns={2} spacing={10}>
              <DecorativeTag content="p">
                <Box>
                  <FadeInItem>
                    <Text as="p">
                      My main skills include Frontend (React-based) & Backend
                      development. Some of the libraries, frameworks, cloud
                      services I frequently use for both personal and school
                      projects include:
                      <br />
                      <br />
                    </Text>
                  </FadeInItem>
                  <DecorativeTag content="ul" hExpand="-.3rem">
                    <FadeInItem>
                      <UnorderedList>
                        {stacks.map((stack, i) => (
                          <ListItem
                            key={i}
                            // marginBottom={".3rem"}
                          >
                            <Text as="b">{stack.name}: </Text>
                            <ToolStack toolNames={stack.tools as ToolNames[]} />
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </FadeInItem>
                  </DecorativeTag>
                </Box>
              </DecorativeTag>

              {/* Progress Bars */}
              <DecorativeTag content="data">
                <FadeInItem>
                  <Grid>
                    {skills.map((skill, i) => (
                      <GridItem key={"gr" + i}>
                        <label>{skill.name}</label>
                        <Progress
                          id="frontends"
                          colorScheme={skill.colorScheme}
                          value={skill.value}
                          hasStripe={true}
                          isAnimated={true}
                          size="xs"
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </FadeInItem>
              </DecorativeTag>
            </SimpleGrid>
          </FadeInContainer>
        </Box>
      </DecorativeTag>
      <Continue />
    </Box>
  );
};
export default Skills;
