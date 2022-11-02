import {
  Box,
  Flex,
  // forwardRef,
  Grid,
  GridItem,
  ListItem,
  Progress,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import { forwardRef, useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";
import { rubberband, runRubberbandIn } from "../utils/animation";
import styles from "../styles/Home.module.css";
import Continue from "../components/Continue";
import DecorativeTag from "../components/DecorativeTag";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";

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
              pageTitle={["Skills", "&", "Experiences"]}
            />
          </DecorativeTag>

          <FadeInContainer>
            <SimpleGrid columns={2} spacing={5}>
              <DecorativeTag content="p">
                <FadeInItem>
                  <Text>
                    My main skills include Frontend (React-based) & Backend
                    development. Some of the libraries, frameworks, cloud
                    services I frequently use for both personal and school
                    projects include:
                    <UnorderedList>
                      <ListItem>
                        <Text as="b">Frontend</Text>: React, Next, Vanilla CSS, Vanilla JS, Sass,
                        Framer-motion, Chakra UI, Ramda, Redux
                      </ListItem>
                      <ListItem>
                        <Text as="b">Backend</Text>: Node, Express, Docker,
                        Auth0
                      </ListItem>
                      <ListItem>
                        <Text as="b">Cloud services</Text>: Github, Netlify,
                        Heroku, Vercel,
                      </ListItem>
                      <ListItem>
                        <Text as="b">DEV Tools</Text>: MacOS, VSCode, Vim, Git, Insomnia, Postman
                      </ListItem>
                      <ListItem>
                        <Text as="b">Productivity Tools</Text>: Google Meet, Slack, Notion, Miro, 
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </FadeInItem>
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
