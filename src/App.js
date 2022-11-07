import {Route,Switch} from "react-router-dom"
import Nav from "./Nav"
import DestinationContainer from "./DestinationContainer";
import Form from "./Form";

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}> Welcome to TripSave</h1>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route exact path="/">
          <header>
            <h3 style={{textAlign: "center"}}>Start Planning My Dream Trip</h3>
          </header>
        </Route>
        <Route path="/destination">
          <DestinationContainer />
        </Route>
        <Route path="/add-a-trip">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
