import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import { ROUTES } from "../../constants/routes";
import SignUp from "../SignUp";
import Logo from "../../components/Logo";
import { Box } from "@chakra-ui/react";

const Unauthenticated = () => (
  <Box
    w="100vw"
    h="100vh"
    d="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Box mb="150px">
      <Logo />
    </Box>

    <Box w="300px">
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGN_IN} component={SignUp} />

        <Redirect to={ROUTES.LOGIN} />
      </Switch>
    </Box>
  </Box>
);

export default Unauthenticated;
