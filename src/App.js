import {Route} from "react-router-dom"
import Nav from "./Nav"
import DestinationContainer from "./DestinationContainer";
import Form from "./Form";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <header>
        <h1> Welcome to TripSave</h1>
        <p>Start Planning Your Dream Trip</p>
      </header>
      <Route path="/destination">
        <DestinationContainer />
      </Route>
      <Route path="add-a-trip">
        <Form />
      </Route>
    </div>
  );
}

export default App;
