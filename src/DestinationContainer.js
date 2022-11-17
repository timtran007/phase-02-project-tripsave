import DestinationInfo from "./DestinationInfo"
import AddFundsButton from "./AddFundsButton"

function DestinationContainer({updatedTripData, setUpdatedTripData}){
   
   
    function onAddFunds(updatedFundsData){
        const updatedTripsData = updatedTripData.map(trip => {
            if(trip.id === updatedFundsData.id){
                return updatedFundsData
            } else{
                return trip
            }
        })
        setUpdatedTripData(updatedTripsData)
    }

   
    const infoToDisplay = updatedTripData.map(trip =>{
        return(
            <div>
            <DestinationInfo trip={trip}/>
            <AddFundsButton trip={trip} onAddFunds={onAddFunds}/>
            </div>
        )
    })
    return(
        <div style={{textAlign: "center"}}>
            <h2>My Trips</h2>
            {infoToDisplay}
        </div>
    )
}

export default DestinationContainer