import AddFundsButton from "./AddFundsButton"

function DestionationInfo({tripData}){
    const infoToDisplay = tripData.map(data =>{
        return(
            <div key={data.id}>
                <h3>
                    Destination: {data.destinationName}
                </h3>
                <img src={data.imgURL} alt={data.destinationName}/>
                <h4>
                    Budget: ${data.budget}
                </h4>
                {data.savings === 0 ? `Let's start saving for ${data.destinationName}!`:<h4>
                    Savings: ${data.savings}
                </h4>}
                <div>
                    <AddFundsButton />
                </div>

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