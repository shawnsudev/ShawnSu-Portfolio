import { Box, Link, StackDivider, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import Logo from "./Logo";

const Navbar: NextPage = () => {
  return (
    <Box width="100%" position="sticky" left="0" top="0">
      <VStack width="100%">
        <Logo />
        <VStack divider={<StackDivider />} spacing={4} width="100%">
          <Text></Text>
          <NextLink href="/#landing" passHref>
            <Link color="teal.400">Home</Link>
          </NextLink>
          <NextLink href="/#about" passHref>
            <Link>About</Link>
          </NextLink>
          <NextLink href="/#projects" passHref>
            <Link>Projects</Link>
          </NextLink>
          <NextLink href="/#skills" passHref>
            <Link>Skills</Link>
          </NextLink>
          <NextLink href="/#contact" passHref>
            <Link>Contact</Link>
          </NextLink>
          <Text></Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Navbar;
