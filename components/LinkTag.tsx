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
  hover: {
    y: -3,
    display: "inline-block",
    // scale: 1.05,
    filter: "drop-shadow(3px 3px 3px gray)",
    // filter: "saturate(200%)",
    TransitionEnd: {
      filter: "drop-shadow(0px 0px 0px gray)",
    },
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
    <Tooltip key={key} label={tooltip} hasArrow>
      <motion.span whileHover="hover" variants={spanVariant}>
        <Tag variant={variant} colorScheme={colorScheme}>
          {icon ? React.createElement(icon) : 
          // <TagLeftIcon as={undefined} />
          null
          }
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
