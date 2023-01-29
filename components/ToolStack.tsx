import { ColorHues, Text, TextProps } from "@chakra-ui/react";
import React from "react";
import { FaReact, FaSass, FaApple, FaNodeJs, FaDocker } from "react-icons/fa";
//prettier-ignore
import { SiNextdotjs, SiFramer, SiChakraui, SiRedux, SiVisualstudio, SiInsomnia, SiAuth0, SiExpress, SiGithub, SiNetlify, SiHeroku, SiVercel, SiGooglemeet, SiSlack, SiNotion, SiMiro, SiPostman, SiStripe } from "react-icons/si";
import { DiVim, DiGit, DiMongodb } from "react-icons/di";
import LinkTag, { LinkTagProps } from "./LinkTag";
import { IconType } from "react-icons";
import { Url } from "url";

type Tool = LinkTagProps & {
  content: string;
  icon: IconType;
  tooltip: string;
  colorScheme: string;
  variant: "subtle" | "solid" | "outline";
  href: string;
};
type Tools = {
  [name: string]: Tool;
};

// I would prefer to store tools data separately as json file but there's a problem with the icon property storing an imported IconType data from React Icon. I don't know yet how to store that in JSON file.
// Solution: only declare tools type as Tools (i.e. by appending `:Tools` to `const tools`) ad hoc, but remove it after adding new data is complete. This can help address the problem of ToolNames type being too general - as in, type becomes string[] instead of a tuple (a set of prefefined tool names).
const tools = {
  mongodb: {
    content: "MongoDB",
    icon: DiMongodb,
    tooltip:
      "A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    colorScheme: "green",
    variant: "subtle",
    href: "https://www.mongodb.com/",
  },
  react: {
    content: "React",
    icon: FaReact,
    tooltip:
      "The most popular front-end JS library for building user interfaces based on UI components.",
    colorScheme: "cyan",
    variant: "subtle",
    href: "https://reactjs.org",
  },
  next: {
    content: "Next",
    icon: SiNextdotjs,
    tooltip:
      "Open-source framework enabling React-based web apps with server-side rendering and static-site generation.",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://nextjs.org/",
  },
  sass: {
    content: "Sass",
    icon: FaSass,
    tooltip:
      "The most mature, stable, and powerful professional grade CSS extension language in the world.",
    colorScheme: "pink",
    variant: "subtle",
    href: "https://sass-lang.com/",
  },
  "framer-motion": {
    content: "Framer-motion",
    icon: SiFramer,
    tooltip: "A powerful production-ready motion library for React.",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://www.framer.com/motion/",
  },
  "chakra-ui": {
    content: "Chakra UI",
    icon: SiChakraui,
    tooltip:
      "A simple, modular, responsive and accessible component library based on React and Emotion.",
    colorScheme: "cyan",
    variant: "subtle",
    href: "https://chakra-ui.com/",
  },
  redux: {
    content: "Redux",
    icon: SiRedux,
    tooltip:
      "An open-source JS library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. ",
    colorScheme: "purple",
    variant: "subtle",
    href: "https://redux.js.org/",
  },
  node: {
    content: "Node",
    icon: FaNodeJs,
    tooltip:
      "An open-source, cross-platform JS runtime environment that runs on high-performance V8 Engine. ",
    colorScheme: "green",
    variant: "subtle",
    href: "https://nodejs.org/",
  },
  express: {
    content: "Express",
    icon: SiExpress,
    tooltip:
      "A back end web application framework for building RESTful APIs with Node.js.",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://expressjs.com/",
  },
  docker: {
    content: "Docker",
    icon: FaDocker,
    tooltip:
      "A set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.",
    colorScheme: "blue",
    variant: "subtle",
    href: "https://www.docker.com/",
  },
  auth0: {
    content: "Auth0",
    icon: SiAuth0,
    tooltip:
      "A flexible, drop-in solution to add authentication and authorization services to web apps.",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://auth0.com/",
  },
  github: {
    content: "Github",
    icon: SiGithub,
    tooltip:
      "Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. ",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://github.com/",
  },
  netlify: {
    content: "Netlify",
    icon: SiNetlify,
    tooltip:
      "Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.",
    colorScheme: "cyan",
    variant: "subtle",
    href: "https://www.netlify.com/",
  },
  heroku: {
    content: "Heroku",
    icon: SiHeroku,
    tooltip:
      "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.",
    colorScheme: "purple",
    variant: "subtle",
    href: "http://www.heroku.com/",
  },
  vercel: {
    content: "Vercel",
    icon: SiVercel,
    tooltip:
      "Vercel (formerly known as ZEIT) is a cloud platform that enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision. ",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://vercel.com/",
  },
  macos: {
    content: "macOS",
    icon: FaApple,
    tooltip:
      "A Unix operating system developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apple's Mac computers.",
    colorScheme: "yellow",
    variant: "subtle",
    href: "https://www.apple.com/nz/macos/ventura/",
  },
  vscode: {
    content: "VS Code",
    icon: SiVisualstudio,
    tooltip:
      "A free, powerful, lightweight code editor for Windows, macOS and Linux.",
    colorScheme: "blue",
    variant: "subtle",
    href: "https://code.visualstudio.com/",
  },
  vim: {
    content: "Vim",
    icon: DiVim,
    tooltip:
      "A highly configurable text editor built to make creating and changing any kind of text very efficient.",
    colorScheme: "green",
    variant: "subtle",
    href: "https://en.wikipedia.org/wiki/Vim_(text_editor)",
  },
  git: {
    content: "Git",
    icon: DiGit,
    tooltip:
      "Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. ",
    colorScheme: "orange",
    variant: "subtle",
    href: "https://git-scm.com/",
  },
  insomnia: {
    content: "Insomnia",
    icon: SiInsomnia,
    tooltip:
      "Insomnia is an open-source, cross-platform API client for GraphQL, REST, WebSockets and gRPC. ",
    colorScheme: "purple",
    variant: "subtle",
    href: "https://insomnia.rest/",
  },
  postman: {
    content: "Postman",
    icon: SiPostman,
    tooltip:
      "Postman is an API platform for developers to design, build, test and iterate their APIs. As of April 2022, Postman reports having more than 20 million registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub.",
    colorScheme: "orange",
    variant: "subtle",
    href: "https://www.postman.com/",
  },
  "google-meet": {
    content: "Google Meet",
    icon: SiGooglemeet,
    tooltip:
      "Google Meet is a video-communication service developed by Google. ",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://meet.google.com/",
  },
  slack: {
    content: "Slack",
    icon: SiSlack,
    tooltip:
      "Slack is essentially a chat room for your whole company, designed to replace email as your primary method of communication and sharing. ",
    colorScheme: "purple",
    variant: "subtle",
    href: "https://slack.com/",
  },
  notion: {
    content: "Notion",
    icon: SiNotion,
    tooltip:
      "Notion is a project management and note-taking software platform designed to help members of companies or organizations coordinate deadlines, objectives, and assignments for greater efficiency and productivity. ",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://www.notion.so/",
  },
  miro: {
    content: "Miro",
    icon: SiMiro,
    tooltip:
      "Miro is the online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows.",
    colorScheme: "yellow",
    variant: "subtle",
    href: "https://miro.com/",
  },
  stripe: {
    content: "Stripe",
    icon: SiStripe,
    tooltip:
      "Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.",
    colorScheme: "purple",
    variant: "subtle",
    href: "https://stripe.com/en-nz",
  },
};

// Use keyof to extract all keys from tools object to form a new type - this type is more narrowed than a simple string[], which can help to prevent users choosing tool names that do not exist in the tools data.
export type ToolNames = keyof typeof tools;
// I've come to realise that best way to prevent type issue with Next.js component/page is to choose the prop type for the highest level of element being returned. E.g. here the top level element being returned is <Text /> (Chakra), so use Chakra TextProps type for forming the base for the parameter type.
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
      {stack.map(
        ({ content, icon, tooltip, colorScheme, variant, href }, i) => (
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
  );
};
export default ToolStack;
