import {
  Box,
  BoxProps,
  Link,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import Logo from "./Logo";

// const buttonPadding =

type NavbarProps = BoxProps & { buttonPadding?: string };

const Navbar = ({ buttonPadding = "1rem 3rem", onClick }: NavbarProps) => {
  return (
    <Box width="100%" position="sticky" left="0" top="0" onClick={onClick}>
      <VStack width="100%">
        <Logo />
        <VStack divider={<StackDivider />} spacing={0} width="100%">
          <Text></Text>
          <NextLink href="/" passHref>
            <Link color="teal.400" p={buttonPadding}>
              Home
            </Link>
          </NextLink>
          <NextLink href="/#about" passHref>
            <Link p={buttonPadding}>About</Link>
          </NextLink>
          <NextLink href="/#projects" passHref>
            <Link p={buttonPadding}>Projects</Link>
          </NextLink>
          <NextLink href="/#skills" passHref>
            <Link p={buttonPadding}>Skills</Link>
          </NextLink>
          <NextLink href="/#contact" passHref>
            <Link p={buttonPadding}>Contact</Link>
          </NextLink>
          <Text></Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Navbar;
