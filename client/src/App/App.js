
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from "../components/home-page/home-page";






function App(props) {
  return (
  <>
  <Router>
    <Route  path = "/home" component={HomePage}>
    </Route>
  </Router>
    
  </>
  );
}

export default App;
