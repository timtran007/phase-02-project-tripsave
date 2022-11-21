import React, {useState, useEffect} from "react"
import {Route,Switch} from "react-router-dom"
import Nav from "./Nav"
import DestinationContainer from "./DestinationContainer";
import Form from "./Form";

function App() {
  //define state that adds the response from the post request
  const [trips, setUpdatedTripData] = useState([])

  useEffect(() =>{
      fetch('http://localhost:3500/destination')
      .then(resp => resp.json())
      .then(data =>{
        setUpdatedTripData(data)
      })
  },[])

  function onHandleSubmit(newData){
    setUpdatedTripData([...trips, newData])
  }


  return (
    <div>
      <h1 style={{textAlign: "center"}}> Welcome to TripSave</h1>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route exact path="/">
          <header>
            <h3 style={{textAlign: "center", marginTop: 50}}>Start Planning My Dream Trip</h3>
          </header>
        </Route>
        <Route path="/destination">
          <DestinationContainer updatedTripData={trips} setUpdatedTripData={setUpdatedTripData}/>
        </Route>
        <Route path="/add-a-trip">
          <Form onHandleSubmit={onHandleSubmit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
