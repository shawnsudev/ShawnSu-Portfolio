//prettier-ignore
import {
  Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, FormControl, FormErrorMessage, Input, InputElementProps, InputGroup, InputLeftElement, NumberInputFieldProps, SimpleGrid, Stack, StylesProvider, Text, Textarea, UsePinInputFieldProps,
} from "@chakra-ui/react";
import { NextPage } from "next";
import {
  ChangeEvent,
  EventHandler,
  InputHTMLAttributes,
  SyntheticEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "framer-motion";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";
import DecorativeTag from "../components/DecorativeTag";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";
import { sendContactForm } from "../utils/api";
import { contactFormData } from "../utils/types";
import { InputType } from "zlib";

const errorMessage = (
  <Alert status="error">
    <AlertIcon />
    <AlertTitle mr={2}>Some wrong!</AlertTitle>
    <AlertDescription>
      Please make sure all required fields are correctly filled and try send
      again later.
    </AlertDescription>
    {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
  </Alert>
);
const successMessage = (
  <Alert status="success">
    <AlertIcon />
    <AlertTitle mr={2}>Message sent successfully!</AlertTitle>
    <AlertDescription></AlertDescription>
    {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
  </Alert>
);

const Contact: NextPage = (props) => {
  // May have to add message status (i.e. idle, pending, success, failure etc.)
  const testMessage: contactFormData = {
    name: "test name",
    company: "test company",
    email: "test@email.com",
    subject: "test subject",
    message: "testing testing message",
  };
  const emptyMessage: contactFormData = {
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  };
  // const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(emptyMessage);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [messageDisplay, setMessageDisplay] = useState(<></>);
  const [messageState, setMessageState] = useState("idle");

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // The type of the event seems wrong, hence the error on target.name and .value, but I don't know which one to use.
  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    // if (target) {
    setMessage((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
    // }
  };

  // Handler for onBlur property, triggered when input field is out of focus
  const handleBlur = ({
    target,
  }: SyntheticEvent & { target: { name: string } }) => {
    setTouched((prev) => ({
      ...prev,
      [target!.name]: true,
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setMessageState("pending");
    // Eventually handle form Validation here
    // let isValidForm = handleValidation();

    const res = await sendContactForm(message);
    const result = await res.json();

    if (res.status === 200) {
      setMessageState("success");
    }
    if (result.error) {
      setMessageState("error");
      console.log(result.error);
      return;
    }
    console.log("📦", res.ok, res.status);
  };

  useEffect(() => {
    if (messageState === "success") {
      setMessageDisplay(successMessage);
      setTimeout(() => setMessageState("idle"), 5000);
    } else if (messageState === "error") {
      setMessageDisplay(errorMessage);
      setTimeout(() => setMessageState("idle"), 5000);
    } else setMessageDisplay(<></>);
  }, [messageState]);

  return (
    <Box id="contact">
      <DecorativeTag content="section" hExpand="1.5rem" vExpand="3rem">
        <Box>
          <DecorativeTag content="h2">
            <PageTitle
              ref={ref}
              titleTexts={["Contact me"]}
              isInView={isInView}
            />
          </DecorativeTag>

          <DecorativeTag content="p">
            <Text as="p" w={{ lg: "45rem" }} margin="0 auto">
              Please leave me a message using this contact form if you want to
              get in touch regarding a job offer, or if you have any questions.
              Cheers 😊
            </Text>
          </DecorativeTag>

          <DecorativeTag content="form">
            <FadeInContainer>
              <Stack spacing={2} w={{ lg: "45rem" }} margin="0 auto">
                <SimpleGrid columns={2} spacing={2}>
                  <FadeInItem>
                    <FormControl
                      isRequired
                      isInvalid={touched.name && !message.name}
                    >
                      <InputGroup>
                        <InputLeftElement color="red.300">*</InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Name"
                          variant="filled"
                          value={message.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </InputGroup>
                      <FormErrorMessage>Name is required.</FormErrorMessage>
                    </FormControl>
                  </FadeInItem>
                  <FadeInItem>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company"
                      variant="filled"
                      value={message.company}
                      onChange={handleChange}
                    />
                  </FadeInItem>
                </SimpleGrid>

                <FadeInItem>
                  <FormControl
                    isRequired
                    isInvalid={touched.email && !message.email}
                  >
                    <InputGroup>
                      <InputLeftElement color="red.300">*</InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        variant="filled"
                        value={message.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  </FormControl>
                </FadeInItem>

                <FadeInItem>
                  <FormControl
                    isRequired
                    isInvalid={touched.subject && !message.subject}
                  >
                    <InputGroup>
                      <InputLeftElement color="red.300">*</InputLeftElement>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        variant="filled"
                        value={message.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    <FormErrorMessage>Subject is required.</FormErrorMessage>
                  </FormControl>
                </FadeInItem>

                <FadeInItem>
                  <FormControl
                    isRequired
                    isInvalid={touched.message && !message.message}
                  >
                    <InputGroup>
                      <InputLeftElement color="red.300">*</InputLeftElement>
                      <Textarea
                        // type="textarea"
                        h="8rem"
                        name="message"
                        placeholder="Message"
                        pl="2.5rem"
                        variant="filled"
                        value={message.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    <FormErrorMessage>Message is required.</FormErrorMessage>
                  </FormControl>
                </FadeInItem>

                <FadeInItem>
                  <Button
                    variant="solid"
                    colorScheme="yellow"
                    letterSpacing={"0.2rem"}
                    fontFamily={"Darumadrop One, cursive"}
                    fontSize={"2xl"}
                    verticalAlign={"top"}
                    px="2rem"
                    py="1.5rem"
                    mt="2rem"
                    _hover={{ color: "white"}}
                    onClick={handleSubmit}
                    disabled={
                      !message.name ||
                      !message.email ||
                      !message.subject ||
                      !message.message ||
                      messageState !== "idle"
                    }
                    isLoading={messageState === "pending" ? true : false}
                  >
                    ✉️ Send
                  </Button>
                </FadeInItem>
                {/* <FadeInItem>{messageDisplay}</FadeInItem> */}
                <FadeInItem>{messageDisplay}</FadeInItem>
              </Stack>
            </FadeInContainer>
          </DecorativeTag>
        </Box>
      </DecorativeTag>
    </Box>
  );
};

export default Contact;
