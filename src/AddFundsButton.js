
function AddFundsButton(){
    const valueOfFundsAdded = [5, 10, 25, 50]
    const buttonsToDisplay = valueOfFundsAdded.map((value, index) =>{
        return(
            
            <button key={index}>
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