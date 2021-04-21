import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appnav from "./Components/Appnav";
import UserList from "./Components/UserList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appnav />
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/profile/:userId" component={UserProfile}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
