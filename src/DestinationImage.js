
function DestinationImage({tripData}){
    const imageToDisplay = tripData.map(data =>{
        return(
            <img key={data.id} src={data.imgURL} alt={data.name}/>
        )
    })
    return(
        <div>
            <h2>My Trips</h2>
            {imageToDisplay}
        </div>
    )
}

export default DestinationImage