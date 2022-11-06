import React, {useState} from "react"
import AddFundsButton from "./AddFundsButton"
import db from "../src/data/db.json"

function DestionationInfo(){
    const [tripData, setTripData] = useState(db.destination)
    
    function onAddFunds(updatedTripData){
        const updatedTripsData = tripData.map(trip => {
            if(trip.id === updatedTripData.id){
                return updatedTripData
            } else{
                return tripData
            }
        })
        setTripData(updatedTripsData)
    }

    const infoToDisplay = tripData.map(trip =>{
        return(
            <div key={trip.id} id={trip.id}>
                <h3>
                    Destination: {trip.destinationName}
                </h3>
                <img src={trip.imgURL} alt={trip.destinationName}/>
                <h4>
                    Budget: ${trip.budget}
                </h4>
                {trip.savings === 0 ? 
                    `Let's start saving for ${trip.destinationName}!`
                    :
                    <h4>
                        Savings: ${trip.savings}
                    </h4>
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