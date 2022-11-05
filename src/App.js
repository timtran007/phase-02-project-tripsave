import {Route} from "react-router-dom"
import Nav from "./Nav"
import DestinationContainer from "./DestinationContainer";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/destination">
        <DestinationContainer />
      </Route>
    </div>
  );
}

export default App;
