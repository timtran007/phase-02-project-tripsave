import React, {useState} from "react"
import DestinationInfo from "./DestinationInfo"
import db from "../src/data/db.json"

function DestinationContainer(){
    const [data, setData] = useState(db)

    return(
        <div>
            <h2>My Trips</h2>
            <DestinationInfo tripData={data.destination}/>
        </div>
    )
}

export default DestinationContainer