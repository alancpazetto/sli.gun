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
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAuthContextConsumer } from "../../providers/AuthProvider";
import { useState } from "react";

type SignUpForm = {
  username: string;
  password: string;
};

const SignUp = () => {
  const { setAuthPub } = useAuthContextConsumer();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleOnSubmit = async (values: SignUpForm) => {
    setIsLoading(true);

    try {
      const authPub = await Auth.getInstance().create({
        alias: values.username,
        pass: values.password,
      });
      setAuthPub(authPub);
      toast({
        title: "YEAH!!",
        description: "User created successfully",
        status: "success",
      });
    } catch (e) {
      if (e instanceof Error) {
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
              <FormLabel>Password</FormLabel>
              <Input type="password" {...field} />
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
            <Button size="xs" colorScheme="gray" variant="ghost" type="button">
              Already have account?
            </Button>
          </Link>
          <Button
            type="submit"
            colorScheme="teal"
            mr="16px"
            rightIcon={<FaChevronRight />}
            isLoading={isLoading}
          >
            Sign Up
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default SignUp;
