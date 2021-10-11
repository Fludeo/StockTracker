
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from "../components/home-page/home-page";
import { LoginPage } from "../components/login-page/loginPage";





function App(props) {
  return (
  <>
  <Router>
    <Route exact path = "/login" component={LoginPage}>
    </Route>
    <Route path = "/logged" component={HomePage}>
    </Route>
  </Router>
    
  </>
  );
}

export default App;
