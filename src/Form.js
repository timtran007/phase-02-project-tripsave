import React, {useState} from "react"
import {useHistory} from "react-router-dom"

function Form({updatedTripData, onHandleSubmit, setUpdatedTripData}){
    const history = useHistory()
    // const [formData, setFormData] = useState({
    //     destinationName: "",
    //     imgURL: "",
    //     budget: 0,
    //     savings: 0,
    //   })

    function handleFormData(event){
        const key = event.target.id
        const value = event.target.value
        setUpdatedTripData({
            ...updatedTripData,
            [key]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(updatedTripData)
        fetch('http://localhost:3500/destination',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTripData),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        debugger
        onHandleSubmit({
            destinationName: "",
            imgURL: "",
            budget: 0,
            savings: 0,
        })
        history.push('/destination')
    }

    return(
        <div style={{textAlign: "center"}}>
            <form id="addATripForm" onSubmit={handleSubmit}>
                <h2 id="addATripHeader">Add My Dream Trip</h2>
                <p>
                    <label htmlFor="destination">Destination's Name:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="text" 
                            id="destinationName"
                            value={updatedTripData.destinationName}
                            placeholder="enter a destination"
                        />
                </p>
                <p>
                    <label htmlFor="imageURL">Image URL:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="text" 
                            id="imgURL"
                            value={updatedTripData.imgURL}
                            placeholder="add a image URL link"
                        />
                </p>
                <p>
                    <label htmlFor="budget">Budget:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="number"
                            id="budget" 
                            value={updatedTripData.budget}
                            placeholder="enter a budget"
                        />
                </p> 
                <p>
                    <label htmlFor="savings">Savings:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="number" 
                            id="savings"
                            value={updatedTripData.savings}
                            placeholder="enter savings amount"
                        />
                </p>
                <p>
                    <input type="submit" value="Add a Trip" />
                </p>
            </form>
        </div>
    )
}

export default Form