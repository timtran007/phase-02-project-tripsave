import React, {useState} from "react"
import DestinationImage from "./DestinationImage"
import DestinationInfo from "./DestinationInfo"
import db from "../src/data/db.json"

function DestinationContainer(){
    const [data, setData] = useState(db)

    return(
        <div>
            <DestinationImage tripData={data}/>
            <DestinationInfo tripData={data}/>
        </div>
    )
}

export default DestinationContainer