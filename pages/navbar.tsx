import { Link } from "@chakra-ui/react";
import { NextPage } from "next";
import * as NextLink from "next/link";
import Logo from "./logo";

const Navbar: NextPage = () => {
  return (
    <>
      <Logo />
      <NextLink href="/home" passHref>
        <Link color="teal.400">Home</Link>
      </NextLink>
      <NextLink href="/about" passHref>
        <Link>About</Link>
      </NextLink>
      <NextLink href="/projects" passHref>
        <Link>Projects</Link>
      </NextLink>
      <NextLink href="/skills" passHref>
        <Link>Skills</Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link>Contact</Link>
      </NextLink>
    </>
  );
};

export default Navbar;