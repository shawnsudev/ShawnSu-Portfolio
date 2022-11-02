import {
  BoxProps,
  IconProps,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tooltip,
} from "@chakra-ui/react";
import React from "react"

export type LinkTagProps = BoxProps & {
  content: string;
  icon?: any;
  tooltip?: string;
  colorScheme?: string;
  variant?: string;
  href?: string;
};

const LinkTag = ({
  content,
  icon,
  tooltip = "tooltip",
  colorScheme = "blackAlpha",
  variant = "subtle",
  href = "https://reactjs.org/",
}: LinkTagProps) => {
  return (
    <Tooltip label={tooltip} hasArrow>
      <Tag variant={variant} colorScheme={colorScheme}>
        {icon ? React.createElement(icon) : <TagLeftIcon as={undefined} />}
        <TagLabel marginLeft={".5rem"}>
          <Link href={href} isExternal>
            {content}
          </Link>
        </TagLabel>
      </Tag>
    </Tooltip>
  );
};
export default LinkTag;
