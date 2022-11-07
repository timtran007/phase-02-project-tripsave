import AddFundButton from "../src/styles/AddFundButton.css"

function AddFundsButton({trip, onAddFunds}){
    const valueOfFundsAdded = [5, 10, 25, 50]
    
    function handleClick(event){
        const eventId = event.target.parentElement.parentElement.id
        if(trip.id === parseInt(eventId)){
            fetch(`http://localhost:3500/destination/${trip.id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    savings: parseInt(trip.savings + parseInt(event.target.value, 10), 10)
                })
            })
            .then(resp => resp.json())
            .then(updatedTripData => onAddFunds(updatedTripData)) 
        }
    }

    const buttonsToDisplay = valueOfFundsAdded.map((value, index) =>{
        return(
            <button className="addFundsButton"onClick={handleClick} key={index} value={value}>
                ${value}
            </button>
        )
    })
    

    return(
        <div>
            <h4 id="addFunds">Add Funds:</h4>
            {buttonsToDisplay}
        </div>
    )
}

export default AddFundsButton