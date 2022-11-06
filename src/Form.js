
function Form({formData}){
    function handleFormData(event){
        console.log(event.target.value)
    }
    return(
        <div>
            <div><h3>Add My Dream Trip</h3></div>
            <form>
                <input onChange={handleFormData} type="text" name="destination" placeholder="enter a destination"></input>
                <input onChange={handleFormData} type="text" name="imageURL" placeholder="add a image URL link"></input>
                <input onChange={handleFormData} type="number" name="budget" placeholder="enter a budget">
                </input>
                <input onChange={handleFormData} type="number" name="savings" placeholder="enter savings amount">
                </input>
                <input type="submit" value="Add a Trip"></input>
            </form>
        </div>
    )
}

export default Form