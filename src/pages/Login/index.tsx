import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";

import { Auth } from "../../models/Auth";
import { FaChevronRight } from "react-icons/fa";
import Gun from "gun/gun";
import { IGunCryptoKeyPair } from "gun/types/types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAuthContextConsumer } from "../../providers/AuthProvider";
import { useState } from "react";

type LoginForm = {
  username: string;
  password: string;
};

const Login = () => {
  const { setAuthPub } = useAuthContextConsumer();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleOnSubmit = async (values: LoginForm) => {
    setIsLoading(true);

    try {
      const authPub = await Auth.getInstance().login({
        alias: values.username,
        pass: values.password,
      });

      setAuthPub(authPub);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        toast({
          title: "Ops",
          description: e.message,
          status: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik<LoginForm>
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <Field name="username">
          {({ field }: FieldProps<string>) => (
            <FormControl id="username" mb="24px">
              <FormLabel>Username</FormLabel>
              <Input type="text" {...field} />
            </FormControl>
          )}
        </Field>
        <Field name="password">
          {({ field }: FieldProps<string>) => (
            <FormControl id="password" mb="24px">
              <FormLabel>Username</FormLabel>
              <Input type="password" autoComplete="" {...field} />
            </FormControl>
          )}
        </Field>
        <Box
          mt="24px"
          d="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to={ROUTES.SIGN_IN}>
            <Button size="xs" colorScheme="gray" variant="ghost" type="button">
              Sign up
            </Button>
          </Link>
          <Button
            type="submit"
            colorScheme="teal"
            mr="16px"
            rightIcon={<FaChevronRight />}
            isLoading={isLoading}
          >
            Login
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default Login;
