import {
  BoxProps,
  IconProps,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tooltip,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SiNextdotjs } from "react-icons/si";

type LinkTagProps = BoxProps & {
  content: string;
  icon?: ReactJSXElement;
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
        {icon ? icon : <TagLeftIcon as={undefined} />}
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
