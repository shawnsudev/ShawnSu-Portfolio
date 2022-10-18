import { StackDivider, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

const Logo: NextPage = () => {
  return (
    <>
      <Text
        as="p"
        position="relative"
        right="0.4rem"
        fontSize="6rem"
        fontWeight="bold"
        paddingEnd="0"
        color="purple.400"
        textShadow=".85rem 0 lime"
      >
        S
      </Text>
      <Text
        as="p"
        position="relative"
        top="-2.5rem"
        fontSize="1.5rem"
        fontWeight="bold"
        padding="0"
      >
        Shawn
      </Text>
      <Text as="p" position="relative" top="-2.5rem" fontSize=".7rem">
        Web Developer
      </Text>
    </>
  );
};

export default Logo;
