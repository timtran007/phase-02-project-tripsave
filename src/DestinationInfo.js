import React, {useState, useEffect} from "react"


function DestionationInfo({trip}){
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
        </div>
    )
}

export default DestionationInfo