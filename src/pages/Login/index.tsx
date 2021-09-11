import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

type LoginForm = {
  username: string;
  password: string;
};

const Login = () => {
  const handleOnSubmit = (values: LoginForm) => {};
  const handleSignUpClick = () => {};

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
              <Input type="text" {...field} />
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
            <Button
              size="xs"
              onClick={handleSignUpClick}
              colorScheme="gray"
              variant="ghost"
              type="button"
            >
              Sign up
            </Button>
          </Link>
          <Button
            type="submit"
            colorScheme="green"
            mr="16px"
            rightIcon={<FaChevronRight />}
          >
            Login
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default Login;
