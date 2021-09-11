import { Box, Button, Flex } from "@chakra-ui/react";
import { useAuthContextConsumer } from "../../providers/AuthProvider";
import Logo from "../Logo";

const Header = () => {
  const { setIsLogged } = useAuthContextConsumer();

  const handleLogoutClick = () => {
    setIsLogged(false);
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="56px"
      px="20px"
      backgroundColor="gray.200"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
    >
      <Logo />
      <Box>
        <Button size="sm" variant="ghost" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
