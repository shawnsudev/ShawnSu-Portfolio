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
  TextProps,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import PageTitle from "./PageTitle";
import { rubberband, runRubberbandIn } from "../utils/animation";
import styles from "../styles/Home.module.css";
import Continue from "./Continue";
import DecorativeTag from "./DecorativeTag";
import { FadeInContainer, FadeInItem } from "./FadeInTransition";
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
import LinkTag, { LinkTagProps } from "./LinkTag";
import { IconType } from "react-icons";
import { AppPropsType } from "next/dist/shared/lib/utils";

type Tool = LinkTagProps & {
  content: string;
  icon: IconType;
  tooltip: string;
  colorScheme: string;
  href: string;
};
// ** Problem **
type Tools = {
  [name: string]: Tool;
};

const tools: Tools = {
  react: {
    content: "React",
    icon: FaReact,
    tooltip:
      "The most popular front-end JS library for building user interfaces based on UI components.",
    colorScheme: "cyan",
    href: "https://reactjs.org",
  },
  next: {
    content: "Next",
    icon: SiNextdotjs,
    tooltip:
      "Open-source framework enabling React-based web apps with server-side rendering and static-site generation.",
    colorScheme: "gray",
    href: "https://nextjs.org/",
  },
  sass: {
    content: "Sass",
    icon: FaSass,
    tooltip:
      "The most mature, stable, and powerful professional grade CSS extension language in the world.",
    colorScheme: "pink",
    href: "https://sass-lang.com/",
  },
  "framer-motion": {
    content: "Framer-motion",
    icon: SiFramer,
    tooltip: "A powerful sproduction-ready motion library for React.",
    colorScheme: "gray",
    href: "https://www.framer.com/motion/",
  },
  "chakra-ui": {
    content: "Chakra UI",
    icon: SiChakraui,
    tooltip:
      "A simple, modular, responsive and accessible component library based on React and Emotion.",
    colorScheme: "cyan",
    href: "https://chakra-ui.com/",
  },
  redux: {
    content: "Redux",
    icon: SiRedux,
    tooltip:
      "An open-source JS library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. ",
    colorScheme: "purple",
    href: "https://redux.js.org/",
  },
  node: {
    content: "Node",
    icon: FaNodeJs,
    tooltip:
      "An open-source, cross-platform JS runtime environment that runs on high-performance V8 Engine. ",
    colorScheme: "green",
    href: "https://nodejs.org/",
  },
  express: {
    content: "Express",
    icon: SiExpress,
    tooltip:
      "A back end web application framework for building RESTful APIs with Node.js.",
    colorScheme: "gray",
    href: "https://expressjs.com/",
  },
  docker: {
    content: "Docker",
    icon: FaDocker,
    tooltip:
      "A set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.",
    colorScheme: "blue",
    href: "https://www.docker.com/",
  },
  auth0: {
    content: "Auth0",
    icon: SiAuth0,
    tooltip:
      "A flexible, drop-in solution to add authentication and authorization services to web apps.",
    colorScheme: "gray",
    href: "https://auth0.com/",
  },
  github: {
    content: "Github",
    icon: SiGithub,
    tooltip:
      "Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. ",
    colorScheme: "gray",
    href: "https://github.com/",
  },
  netlify: {
    content: "Netlify",
    icon: SiNetlify,
    tooltip:
      "Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.",
    colorScheme: "cyan",
    href: "https://www.netlify.com/",
  },
  heroku: {
    content: "Heroku",
    icon: SiHeroku,
    tooltip:
      "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.",
    colorScheme: "purple",
    href: "http://www.heroku.com/",
  },
  vercel: {
    content: "Vercel",
    icon: SiVercel,
    tooltip:
      "Vercel (formerly known as ZEIT) is a cloud platform that enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision. ",
    colorScheme: "gray",
    href: "https://vercel.com/",
  },
  macos: {
    content: "macOS",
    icon: FaApple,
    tooltip:
      "A Unix operating system developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apple's Mac computers.",
    colorScheme: "yellow",
    href: "https://www.apple.com/nz/macos/ventura/",
  },
  vscode: {
    content: "VS Code",
    icon: SiVisualstudio,
    tooltip:
      "A free, powerful, lightweight code editor for Windows, macOS and Linux.",
    colorScheme: "blue",
    href: "https://code.visualstudio.com/",
  },
  vim: {
    content: "Vim",
    icon: DiVim,
    tooltip:
      "A highly configurable text editor built to make creating and changing any kind of text very efficient.",
    colorScheme: "green",
    href: "https://en.wikipedia.org/wiki/Vim_(text_editor)",
  },
  git: {
    content: "Git",
    icon: DiGit,
    tooltip:
      "Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. ",
    colorScheme: "orange",
    href: "https://git-scm.com/",
  },
  insomnia: {
    content: "Insomnia",
    icon: SiInsomnia,
    tooltip:
      "Insomnia is an open-source, cross-platform API client for GraphQL, REST, WebSockets and gRPC. ",
    colorScheme: "purple",
    href: "https://insomnia.rest/",
  },
  postman: {
    content: "Postman",
    icon: SiPostman,
    tooltip:
      "Postman is an API platform for developers to design, build, test and iterate their APIs. As of April 2022, Postman reports having more than 20 million registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub.",
    colorScheme: "orange",
    href: "https://www.postman.com/",
  },
  "google-meet": {
    content: "Google Meet",
    icon: SiGooglemeet,
    tooltip:
      "Google Meet is a video-communication service developed by Google. ",
    colorScheme: "gray",
    href: "https://meet.google.com/",
  },
  slack: {
    content: "Slack",
    icon: SiSlack,
    tooltip:
      "Slack is essentially a chat room for your whole company, designed to replace email as your primary method of communication and sharing. ",
    colorScheme: "purple",
    href: "https://slack.com/",
  },
  notion: {
    content: "Notion",
    icon: SiNotion,
    tooltip:
      "Notion is a project management and note-taking software platform designed to help members of companies or organizations coordinate deadlines, objectives, and assignments for greater efficiency and productivity. ",
    colorScheme: "gray",
    href: "https://www.notion.so/",
  },
  miro: {
    content: "Miro",
    icon: SiMiro,
    tooltip:
      "Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows.",
    colorScheme: "yellow",
    href: "https://miro.com/",
  },
};

type ToolNames = keyof typeof tools;
type ToolStackProps = TextProps & { toolNames: ToolNames[] };

const ToolStack = ({ toolNames }: ToolStackProps) => {
  const stack = toolNames.map((tool) => tools[tool]);
  console.log(stack);

  return (
    <Text
      // as="span"
      key={Math.random()}
      lineHeight={"1.75rem"}
    >
      {stack.map(({ content, icon, tooltip, colorScheme, variant, href }, i) => (
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
      ))}
    </Text>
  );
};
export default ToolStack;
