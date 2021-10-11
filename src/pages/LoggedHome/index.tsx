import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Input,
} from "@chakra-ui/react";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { Form, Formik } from "formik";
import { generatePath, useHistory } from "react-router";

import { Database } from "../../models/Database";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const LoggedHome = () => {
  const history = useHistory();

  const handleCreateRoom = () => {
    const id = Math.round(Math.random() * 1000);

    history.push(
      generatePath(ROUTES.LOGGED_ROOM, {
        roomId: id,
      })
    );
  };

  return (
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
              <Button
                colorScheme="teal"
                rightIcon={<Icon as={FaPlus} />}
                onClick={handleCreateRoom}
              >
                Create one
              </Button>
            </Box>
          </Flex>
        </Center>
      </Form>
    </Formik>
  );
};

export default LoggedHome;
