import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Authenticated from "./pages/Authenticated";
import Unauthenticated from "./pages/Unauthenticated";
import AuthProvider, { useAuthContextConsumer } from "./providers/AuthProvider";

const AppWrapped = () => {
  const { isLogged } = useAuthContextConsumer();

  if (isLogged) {
    return <Authenticated />;
  }

  return <Unauthenticated />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppWrapped />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
