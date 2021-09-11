import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import SignUp from "./pages/SignUp";
import Authenticated from "./pages/Authenticated";
import Unauthenticated from "./pages/Unauthenticated";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.BASE} component={Unauthenticated} />
        <Route path={ROUTES.SIGN_IN} component={SignUp} />
        <Route path={ROUTES.LOGGED} component={Authenticated} />

        <Redirect to={ROUTES.LOGIN} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
