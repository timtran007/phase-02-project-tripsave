import {Route} from "react-router-dom"
import Nav from "./Nav"
import DestinationContainer from "./DestinationContainer";
import Form from "./Form";

function App() {
  return (
    <div>
      <Nav />
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
