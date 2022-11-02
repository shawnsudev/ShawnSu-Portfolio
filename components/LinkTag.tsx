import {
  BoxProps,
  IconProps,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tooltip,
} from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

export type LinkTagProps = BoxProps & {
  content: string;
  icon?: any;
  tooltip?: string;
  colorScheme?: string;
  variant?: string;
  href?: string;
  key?: string | number;
};

const spanVariant = {
  initial: {
    filter: "drop-shadow(0px 0px 0px gray)",
  },
  hover: {
    y: -3,
    display: "inline-block",
    // scale: 1.05,
    filter: "drop-shadow(2px 2px 2px gray)",
    // filter: "drop-shadow(3px 3px 3px gray)",
    transition: {
      inherit: "none",
    },
    // filter: "saturate(200%)",
  },
};

const LinkTag = ({
  content,
  icon,
  tooltip = "tooltip",
  colorScheme = "gray",
  variant = "subtle",
  href = "https://reactjs.org/",
  key,
}: LinkTagProps) => {
  return (
    <Tooltip key={key} label={tooltip} hasArrow openDelay={1000}>
      <motion.span initial="initial" whileHover="hover" variants={spanVariant}>
        <Tag variant={variant} colorScheme={colorScheme}>
          {icon
            ? React.createElement(icon)
            : // <TagLeftIcon as={undefined} />
              null}
          <TagLabel marginLeft={".5rem"}>
            <Link href={href} isExternal>
              {content}
            </Link>
          </TagLabel>
        </Tag>
      </motion.span>
    </Tooltip>
  );
};
export default LinkTag;
