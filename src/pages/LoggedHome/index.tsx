import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Input,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const LoggedHome = () => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <Center mt="100px">
        <Flex flexDirection="column" w="40vw">
          <Flex>
            <Input placeholder="# sli.GUN Room ID" />
            <Button colorScheme="teal" ml="16px">
              <Icon as={FaChevronRight} />
            </Button>
          </Flex>
          <Divider
            my="30px"
            position="relative"
            _after={{
              content: "'OR'",
              position: "absolute",
              left: "50%",
              top: "-50%",
              transform: "translate(-50%, -45%)",
              zIndex: 1,
              background: "#fff",
              padding: "0 10px",
            }}
          />
          <Box alignSelf="center">
            <Link to={ROUTES.LOGGED_ROOM}>
              <Button colorScheme="teal" rightIcon={<Icon as={FaPlus} />}>
                Create one
              </Button>
            </Link>
          </Box>
        </Flex>
      </Center>
    </Form>
  </Formik>
);

export default LoggedHome;
