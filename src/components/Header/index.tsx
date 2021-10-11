import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Suspense, useMemo } from "react";

import Logo from "../Logo";
import { User } from "../../models/User";
import { useAtom } from "jotai";
import { useAuthContextConsumer } from "../../providers/AuthProvider";
import { userName } from "../../models/Database";

const WrapperHeader = () => {
  const { logout } = useAuthContextConsumer();
  // const [username] = useAtom(userAtom);
  // const username = useMemo(() => User.username, []);
  // const [username] = useAtom(userAtom);

  const handleLogoutClick = () => {
    logout();
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
        <Text>Hi! {userName}.</Text>
        <Button size="sm" variant="ghost" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

const Header = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <WrapperHeader />
  </Suspense>
);

export default Header;
