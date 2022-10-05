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
} from "@chakra-ui/react";
import { truncateSync } from "fs";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { rubberband } from "../utils/animation";

const Contact: NextPage = () => {
  // May have to add message status (i.e. idle, pending, success, failure etc.)
  const initMessage = {
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  };
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(initMessage);
  const [messageDisplay, setMessageDisplay] = useState(<></>);
  const [submitted, setSubmitted] = useState(false);
  const errorMessage = (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Missing fields!</AlertTitle>
      <AlertDescription>
        Please fill in all required fields marked with '*'
      </AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
  const successMessage = (
    <Alert status="success">
      <AlertIcon />
      <AlertTitle mr={2}>Message sent successfully!</AlertTitle>
      <AlertDescription></AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );

  useEffect(() => {
    console.log("😅 useEffect running!");
    console.log(isError);
    // if (isError) console.log("something is wrong!");
    // else console.log("everything is in order");
    console.log(message);

    if (submitted) setMessageDisplay(isError ? errorMessage : successMessage);
    else setMessageDisplay(<></>)
  }, [isError, message, submitted]);

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
                value={message.name}
                onChange={(e) => {
                  const newMessage = { ...message };
                  newMessage.name = e.target.value;
                  setMessage(newMessage);
                }}
              />
            </InputGroup>

            <Input
              type="text"
              placeholder="Company"
              variant="filled"
              onChange={(e) => {
                const newMessage = { ...message };
                newMessage.company = e.target.value;
                setMessage(newMessage);
              }}
            />
          </SimpleGrid>

          <InputGroup>
            <InputLeftElement color="red.300" children="*" />
            <Input
              type="email"
              placeholder="Email"
              variant="filled"
              onChange={(e) => {
                const newMessage = { ...message };
                newMessage.email = e.target.value;
                setMessage(newMessage);
              }}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement color="red.300" children="*" />
            <Input
              type="text"
              placeholder="Subject"
              variant="filled"
              onChange={(e) => {
                const newMessage = { ...message };
                newMessage.subject = e.target.value;
                setMessage(newMessage);
              }}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement color="red.300" children="*" />
            <Input
              type="textarea"
              placeholder="Message"
              variant="filled"
              onChange={(e) => {
                const newMessage = { ...message };
                newMessage.message = e.target.value;
                setMessage(newMessage);
              }}
            />
          </InputGroup>

          <Button
            maxWidth="25vw"
            onClick={(e) => {
              const allRequiredFieldsAreValid =
                message.name &&
                message.email &&
                message.subject &&
                message.message;

              if (allRequiredFieldsAreValid) {
                setIsError(false);
              } else {
                setIsError(true);
                console.log("⛔️", "not all the fields are filled");
              }

              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 10000);
            }}
          >
            Submit
          </Button>

          {messageDisplay}
        </Stack>
      </FormControl>
    </div>
  );
};

export default Contact;
