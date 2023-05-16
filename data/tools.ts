import { FaReact, FaSass, FaApple, FaNodeJs, FaDocker } from "react-icons/fa";
//prettier-ignore
import { SiNextdotjs, SiFramer, SiChakraui, SiRedux, SiVisualstudio, SiInsomnia, SiAuth0, SiExpress, SiGithub, SiNetlify, SiHeroku, SiVercel, SiGooglemeet, SiSlack, SiNotion, SiMiro, SiPostman, SiStripe, SiTypescript, SiReactrouter, SiRender, SiJest } from "react-icons/si";
import { DiVim, DiGit, DiMongodb } from "react-icons/di";
import { HiMail } from "react-icons/hi";

export const tools = {
  nodemailer:{
    content: "NodeMailer",
    icon: HiMail,
    tooltip:
      "Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.",
    colorScheme: "blue",
    variant: "subtle",
    href: "https://nodemailer.com/about/",
  },
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
  typescript: {
    content: "Typescript",
    icon: SiTypescript,
    tooltip:
      "A free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
    colorScheme: "blue",
    variant: "subtle",
    href: "https://www.typescriptlang.org",
  },
  reactrouter: {
    content: "React Router",
    icon: SiReactrouter,
    tooltip:
      "A lightweight, fully-featured frontend routing library for the React JavaScript library.",
    colorScheme: "gray",
    variant: "subtle",
    href: "https://reactrouter.com/en/main",
  },
  render: {
    content: "Render",
    icon: SiRender,
    tooltip:
      "Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git.",
    colorScheme: "teal",
    variant: "subtle",
    href: "https://reactrouter.com/en/main",
  },
  jest: {
    content: "Jest",
    icon: SiJest,
    tooltip:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
    colorScheme: "red",
    variant: "subtle",
    href: "https://jestjs.io",
  },
};
