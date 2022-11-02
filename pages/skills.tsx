import {
  Box,
  Flex,
  // forwardRef,
  Grid,
  GridItem,
  Icon,
  Link,
  ListItem,
  Progress,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";
import { rubberband, runRubberbandIn } from "../utils/animation";
import styles from "../styles/Home.module.css";
import Continue from "../components/Continue";
import DecorativeTag from "../components/DecorativeTag";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";
import NextLink from "next/link";
import { FaReact, FaSass, FaApple, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiChakraui,
  SiRedux,
  SiVisualstudio,
  SiInsomnia,
  SiAuth0,
  SiExpress,
  SiGithub,
  SiNetlify,
  SiHeroku,
  SiVercel,
  SiGooglemeet,
  SiSlack,
  SiNotion,
  SiMiro,
  SiPostman,
} from "react-icons/si";
import { DiVim, DiGit } from "react-icons/di";
import { VscCircleFilled } from "react-icons/vsc";
import LinkTag, { LinkTagProps } from "../components/LinkTag";

type Stack = {
  name: string;
  tools: LinkTagProps[];
};

const stacks: Stack[] = [
  {
    name: "Frontend",
    tools: [
      {
        content: "React",
        icon: FaReact,
        tooltip:
          "The most popular front-end JS library for building user interfaces based on UI components.",
        colorScheme: "cyan",
        href: "https://reactjs.org",
      },
      {
        content: "Next",
        icon: SiNextdotjs,
        tooltip:
          "Open-source framework enabling React-based web apps with server-side rendering and static-site generation.",
        colorScheme: "blackAlpha",
        href: "https://nextjs.org/",
      },
      {
        content: "Sass",
        icon: FaSass,
        tooltip:
          "The most mature, stable, and powerful professional grade CSS extension language in the world.",
        colorScheme: "pink",
        href: "https://sass-lang.com/",
      },
      {
        content: "Framer-motion",
        icon: SiFramer,
        tooltip: "A powerful sproduction-ready motion library for React.",
        colorScheme: "blackAlpha",
        href: "https://www.framer.com/motion/",
      },
      {
        content: "Chakra UI",
        icon: SiChakraui,
        tooltip:
          "A simple, modular, responsive and accessible component library based on React and Emotion.",
        colorScheme: "cyan",
        href: "https://chakra-ui.com/",
      },
      {
        content: "Redux",
        icon: SiRedux,
        tooltip:
          "An open-source JS library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. ",
        colorScheme: "purple",
        href: "https://redux.js.org/",
      },
    ],
  },
  {
    name: "Backend",
    tools: [
      {
        content: "Node",
        icon: FaNodeJs,
        tooltip:
          "An open-source, cross-platform JS runtime environment that runs on high-performance V8 Engine. ",
        colorScheme: "green",
        href: "https://nodejs.org/",
      },
      {
        content: "Express",
        icon: SiExpress,
        tooltip:
          "A back end web application framework for building RESTful APIs with Node.js.",
        colorScheme: "blackAlpha",
        href: "https://expressjs.com/",
      },
      {
        content: "Docker",
        icon: FaDocker,
        tooltip:
          "A set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.",
        colorScheme: "blue",
        href: "https://www.docker.com/",
      },
      {
        content: "Auth0",
        icon: SiAuth0,
        tooltip:
          "A flexible, drop-in solution to add authentication and authorization services to web apps.",
        colorScheme: "blackAlpha",
        href: "https://auth0.com/",
      },
    ],
  },
  {
    name: "Cloud Services",
    tools: [
      {
        content: "Github",
        icon: SiGithub,
        tooltip:
          "Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. ",
        colorScheme: "blackAlpha",
        href: "https://github.com/",
      },
      {
        content: "Netlify",
        icon: SiNetlify,
        tooltip:
          "Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.",
        colorScheme: "cyan",
        href: "https://www.netlify.com/",
      },
      {
        content: "Heroku",
        icon: SiHeroku,
        tooltip:
          "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.",
        colorScheme: "purple",
        href: "http://www.heroku.com/",
      },
      {
        content: "Vercel",
        icon: SiVercel,
        tooltip:
          "Vercel (formerly known as ZEIT) is a cloud platform that enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision. ",
        colorScheme: "blackAlpha",
        href: "https://vercel.com/",
      },
    ],
  },
  {
    name: "DEV Tools",
    tools: [
      {
        content: "macOS",
        icon: FaApple,
        tooltip:
          "A Unix operating system developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apple's Mac computers.",
        colorScheme: "yellow",
        href: "https://www.apple.com/nz/macos/ventura/",
      },
      {
        content: "VS Code",
        icon: SiVisualstudio,
        tooltip:
          "A free, powerful, lightweight code editor for Windows, macOS and Linux.",
        colorScheme: "blue",
        href: "https://code.visualstudio.com/",
      },
      {
        content: "Vim",
        icon: DiVim,
        tooltip:
          "A highly configurable text editor built to make creating and changing any kind of text very efficient.",
        colorScheme: "green",
        href: "https://en.wikipedia.org/wiki/Vim_(text_editor)",
      },
      {
        content: "Git",
        icon: DiGit,
        tooltip:
          "Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. ",
        colorScheme: "orange",
        href: "https://git-scm.com/",
      },
      {
        content: "Insomnia",
        icon: SiInsomnia,
        tooltip:
          "Insomnia is an open-source, cross-platform API client for GraphQL, REST, WebSockets and gRPC. ",
        colorScheme: "purple",
        href: "https://insomnia.rest/",
      },
      {
        content: "Postman",
        icon: SiPostman,
        tooltip:
          "Postman is an API platform for developers to design, build, test and iterate their APIs. As of April 2022, Postman reports having more than 20 million registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub.",
        colorScheme: "orange",
        href: "https://www.postman.com/",
      },
    ],
  },
  {
    name: "Productivity Tools",
    tools: [
      {
        content: "Google Meet",
        icon: SiGooglemeet,
        tooltip:
          "Google Meet is a video-communication service developed by Google. ",
        colorScheme: "blackAlpha",
        href: "https://meet.google.com/",
      },
      {
        content: "Slack",
        icon: SiSlack,
        tooltip:
          "Slack is essentially a chat room for your whole company, designed to replace email as your primary method of communication and sharing. ",
        colorScheme: "purple",
        href: "https://slack.com/",
      },
      {
        content: "Notion",
        icon: SiNotion,
        tooltip:
          "Notion is a project management and note-taking software platform designed to help members of companies or organizations coordinate deadlines, objectives, and assignments for greater efficiency and productivity. ",
        colorScheme: "blackAlpha",
        href: "https://www.notion.so/",
      },
      {
        content: "Miro",
        icon: SiMiro,
        tooltip:
          "Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows.",
        colorScheme: "yellow",
        href: "https://miro.com/",
      },
    ],
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
              pageTitle={["Skills", "&", "Experiences"]}
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
                  <FadeInItem>
                    <UnorderedList>
                      {/* <ListItem></ListItem> */}
                      {stacks.map((stack, i) => (
                        <ListItem
                          key={i}
                          // marginBottom={".3rem"}
                        >
                          <Text as="b">{stack.name}: </Text>
                          <Text
                            // as="span"
                            key={i}
                            lineHeight={"1.75rem"}
                          >
                            {stack.tools.map(
                              (
                                {
                                  content,
                                  icon,
                                  tooltip,
                                  colorScheme,
                                  variant,
                                  href,
                                },
                                i
                              ) => (
                                // <span key={i}>
                                <>
                                  <LinkTag
                                    key={i}
                                    content={content}
                                    icon={icon}
                                    tooltip={tooltip}
                                    colorScheme={colorScheme}
                                    variant={variant}
                                    href={href}
                                  />{" "}
                                </>
                                // </span>
                              )
                            )}
                          </Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </FadeInItem>
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
