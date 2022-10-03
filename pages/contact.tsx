import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  SimpleGrid,
  Stack,
  useEditable,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { rubberband } from "../utils/animation";

const Contact: NextPage = () => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    console.log(isError);
    if (isError) console.log("something is wrong!");
    else console.log("everything is in order");

    console.log(message);
  });

  return (
    <div>
      <Heading
        as="h2"
        className="rubberband-group"
        fontSize="50px"
        fontWeight="900"
      >
        {"Contact".split("").map((L) => (
          <span onMouseEnter={rubberband}>{L}</span>
        ))}{" "}
        {"me".split("").map((L) => (
          <span onMouseEnter={rubberband}>{L}</span>
        ))}
      </Heading>

      <FormControl>
        <Stack spacing={2}>
          <SimpleGrid columns={2} spacing={2}>
            <InputGroup>
              <InputLeftElement color="red.300" children="*" />
              <Input
                type="text"
                placeholder="Name"
                variant="filled"
                onChange={(e) => (message.name = e.target.value)}
              />
            </InputGroup>

            <Input
              type="text"
              placeholder="Company"
              variant="filled"
              onChange={(e) => (message.company = e.target.value)}
            />
          </SimpleGrid>

          <InputGroup>
            <InputLeftElement color="red.300" children="*" />
            <Input
              type="email"
              placeholder="Email"
              variant="filled"
              onChange={(e) => (message.email = e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement color="red.300" children="*" />
            <Input
              type="text"
              placeholder="Subject"
              variant="filled"
              onChange={(e) => (message.subject = e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement color="red.300" children="*" />
            <Input
              type="textarea"
              placeholder="Message"
              variant="filled"
              onChange={(e) => (message.message = e.target.value)}
            />
          </InputGroup>

          <Button
            maxWidth="25vw"
            onClick={(e) => {
              if (
                message.name &&
                message.email &&
                message.subject &&
                message.message
              ) {
                setIsError(false);
              } else {
                setIsError(true);
                console.log("⛔️", "not all the fields are filled");
              }
            }}
          >
            Submit
          </Button>

          {isError ? (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Missing fields!</AlertTitle>
              <AlertDescription>
                Please fill in all required fields marked with '*'
              </AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          ) : (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle mr={2}>Message sent successfully!</AlertTitle>
              <AlertDescription></AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          )}
        </Stack>
      </FormControl>
    </div>
  );
};

export default Contact;
