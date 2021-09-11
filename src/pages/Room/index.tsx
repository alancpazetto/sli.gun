import { Box, Button, Flex, Heading, Icon, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import Question from "../../components/Question";

const Room = () => (
  <Flex direction="column">
    <Box>
      <Heading>#RoomID</Heading>
    </Box>

    <Box mt="30px">
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Flex flexDirection="column" alignItems="flex-end">
            <Input placeholder="Type your question" as="textarea" h="100px" />
            <Button
              mt="16px"
              colorScheme="teal"
              rightIcon={<Icon as={FaPaperPlane} />}
            >
              Send
            </Button>
          </Flex>
        </Form>
      </Formik>
    </Box>
    <Box mt="100px">
      <Question />
    </Box>
  </Flex>
);

export default Room;
