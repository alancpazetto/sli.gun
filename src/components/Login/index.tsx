import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { User } from "../../models/User";

const Login = () => {
  const toast = useToast();

  const handleLoginClick = () => {};

  const handleSignUpClick = () => {
    if (User.instance.auth) {
      User.instance.auth("test", "test123test", (a) => {
        toast({
          title: a,
        });
      });
    } else {
      console.log("user not initialized");
    }
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="300px">
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="password" mt="24px">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Box mt="24px" d="flex" justifyContent="flex-end">
          <Button onClick={handleLoginClick} colorScheme="red" mr="16px">
            Login
          </Button>
          <Button onClick={handleSignUpClick} colorScheme="red">
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
