import { ColorHues, Flex, Text, TextProps } from "@chakra-ui/react";
import React from "react";
import LinkTag, { LinkTagProps } from "./LinkTag";
import { IconType } from "react-icons";
import { tools } from "../data/tools";

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

// Use keyof to extract all keys from tools object to form a new type - this type is more narrowed than a simple string[], which can help to prevent users choosing tool names that do not exist in the tools data.
export type ToolNames = keyof typeof tools;
// I've come to realise that best way to prevent type issue with Next.js component/page is to choose the prop type for the highest level of element being returned. E.g. here the top level element being returned is <Text /> (Chakra), so use Chakra TextProps type for forming the base for the parameter type.
type ToolStackProps = TextProps & { toolNames: ToolNames[] };

const ToolStack = ({ toolNames }: ToolStackProps) => {
  const stack = toolNames.map((tool) => tools[tool]);

  // I used {" "} to create a gap between each <LinkTag/> which was a terrible mistake that caused key prop issue in the .map().
  //  Takeaway: leave format to format components like <Flex>
  return (
    <Flex gap="0.25rem" flexWrap="wrap">
      {stack.map(
        ({ content, icon, tooltip, colorScheme, variant, href }, i) => (
          <LinkTag
            key={i}
            content={content}
            icon={icon}
            tooltip={tooltip}
            colorScheme={colorScheme}
            variant={variant}
            href={href}
          />
        )
      )}
    </Flex>
  );
};
export default ToolStack;
