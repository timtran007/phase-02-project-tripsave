
function Form({formData}){
    function handleFormData(event){
        console.log(formData)
        console.log(event.target.value)
    }
    return(
        <div>
            <div><h2>Add My Dream Trip</h2></div>
            <form>
                <p>
                    <label htmlFor="destination">Destination:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="text" 
                            name="destination" 
                            placeholder="enter a destination"
                        />
                </p>
                <p>
                    <label htmlFor="imageURL">Image URL:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="text" name="imageURL" 
                            placeholder="add a image URL link"
                        />
                </p>
                <p>
                    <label htmlFor="budget">Budget:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="number" 
                            name="budget" 
                            placeholder="enter a budget"
                        />
                </p> 
                <p>
                    <label htmlFor="savings">Savings:  </label>
                        <input 
                            onChange={handleFormData} 
                            type="number" 
                            name="savings"
                            placeholder="enter savings amount"
                        />
                </p>
                <p>
                    <input type="submit" value="Add a Trip"/>
                </p>
            </form>
        </div>
    )
}

export default Form