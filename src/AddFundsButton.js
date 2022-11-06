import React, {useState} from "react"

function AddFundsButton({tripData, setTripData}){

    const valueOfFundsAdded = [5, 10, 25, 50]
    function handleClick(event){
        console.log(event.target.value)
    }


    const buttonsToDisplay = valueOfFundsAdded.map((value, index) =>{
        return(
            <button onClick={handleClick} key={index} value={value}>
                ${value}
            </button>
        )
    })
    return(
        <div>
            <h4>Let's Add Some Funds!</h4>
            {buttonsToDisplay}
        </div>
    )
}

export default AddFundsButton