import DestinationInfo from "./DestinationInfo"


function DestinationContainer({updatedTripData, setUpdatedTripData}){

    return(
        <div style={{textAlign: "center"}}>
            <h2>My Trips</h2>
            <DestinationInfo updatedTripData={updatedTripData} setUpdatedTripData={setUpdatedTripData}/>
        </div>
    )
}

export default DestinationContainer