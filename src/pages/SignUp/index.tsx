import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

type SignUpForm = {
  username: string;
  password: string;
};

const SignUp = () => {
  const handleOnSubmit = (values: SignUpForm) => {};
  const handleSignUpClick = () => {};

  return (
    <Formik<SignUpForm>
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
          <Link to={ROUTES.LOGIN}>
            <Button
              size="xs"
              onClick={handleSignUpClick}
              colorScheme="gray"
              variant="ghost"
              type="button"
            >
              Already have account?
            </Button>
          </Link>
          <Button
            type="submit"
            colorScheme="green"
            mr="16px"
            rightIcon={<FaChevronRight />}
          >
            Sign Up
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default SignUp;
