import React, {useState} from "react"
import AddFundsButton from "./AddFundsButton"
import db from "../src/data/db.json"
import DestinationInfo from "../src/styles/DestinationInfo.css"

function DestionationInfo(){
    const [tripData, setTripData] = useState(db.destination)
    
    function onAddFunds(updatedTripData){
        const updatedTripsData = tripData.map(trip => {
            if(trip.id === updatedTripData.id){
                return updatedTripData
            } else{
                return trip
            }
        })
        setTripData(updatedTripsData)
    }

    const infoToDisplay = tripData.map(trip =>{
        return(
            <div className="card" key={trip.id} id={trip.id}>
                <h3 className="destination">
                    Destination: {trip.destinationName}
                </h3>
                <img className="destinationImage" src={trip.imgURL} alt={trip.destinationName}/>
                <h4 className="budget">
                    Budget: ${trip.budget}
                </h4>
                {trip.savings === 0 ? 
                    <p className="savings">Let's start saving for {trip.destinationName}!</p>
                    :
                    <div>
                    <h4 className="savings">
                        Savings:
                    </h4>
                    <span className="savings">${trip.savings}</span>
                    </div>
                }
                    <AddFundsButton trip={trip} onAddFunds={onAddFunds}/>
            </div>
        )
    })
    return(
        <div>
            {infoToDisplay}
        </div>
    )
}

export default DestionationInfo