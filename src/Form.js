import React, {useState} from "react"
import {useHistory} from "react-router-dom"

function Form({ onHandleSubmit }){
    const history = useHistory()
    const [formData, setFormData] = useState({
        destinationName: "",
        imgURL: "",
        budget: 0,
        savings: 0,
      })

    function handleFormData(event){
        const key = event.target.name
        const value = event.target.value
        console.log(formData)
        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("HandleSubmit: ", formData)
        fetch('http://localhost:3500/destination',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            onHandleSubmit(data)})


        setFormData({
            
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
                            name="destinationName"
                            value={formData.destinationName}
                            placeholder="enter a destination"
                        />
                </p>
                <p>
                    <label htmlFor="imageURL">Image URL:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="text" 
                            name="imgURL"
                            value={formData.imgURL}
                            placeholder="add a image URL link"
                        />
                </p>
                <p>
                    <label htmlFor="budget">Budget:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="number"
                            name="budget" 
                            value={formData.budget}
                            placeholder="enter a budget"
                        />
                </p> 
                <p>
                    <label htmlFor="savings">Savings:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="number" 
                            name="savings"
                            value={formData.savings}
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