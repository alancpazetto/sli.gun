import { Container } from "@chakra-ui/react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import { ROUTES } from "../../constants/routes";
import LoggedHome from "../LoggedHome";
import Room from "../Room";

const Authenticated = () => (
  <>
    <div>
      <Header />
    </div>
    <Container maxW="container.xl" mt="30px">
      <Switch>
        <Route exact path={ROUTES.LOGGED_HOME} component={LoggedHome} />
        <Route exact path={ROUTES.LOGGED_ROOM} component={Room} />

        <Redirect to={ROUTES.LOGGED_HOME} />
      </Switch>
    </Container>
  </>
);

export default Authenticated;
