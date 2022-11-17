import React, {useState, useEffect} from "react"
import AddFundsButton from "./AddFundsButton"

function DestionationInfo({updatedTripData, setUpdatedTripData}){

    // function onAddFunds(updatedFundsData){
    //     const updatedTripsData = updatedTripData.map(trip => {
    //         if(trip.id === updatedFundsData.id){
    //             return updatedFundsData
    //         } else{
    //             return updatedTripData
    //         }
    //     })
    //     // setUpdatedTripData(updatedTripsData)
    // }

    const infoToDisplay = updatedTripData.map(trip =>{
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
                    {/* <AddFundsButton trip={updatedTripData} onAddFunds={onAddFunds}/> */}
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