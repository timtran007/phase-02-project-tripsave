# TripSave MVP

TripSave is a React application utilizing a json-server to run a RESTful API of destinations you want budget and save for while being able to add more destinations. In addition, TripSave is using React Router for client-side routing and performs a PATCH fetch request to update savings amount.

## TripSave Project Description

Do you have a bucket list destination, but have a hard time saving money for it? Next time you grab a coffee, stop what you are doing and quickly add that money to your dream destination. 

TripSave is an app that allows users to add their dream destination, create a budget, and add money towards that special trip you’ve been dying to go on.

## Usage
Client-Side Routing for a NavBar using NavLink
```
        <nav >
                <NavLink exact className="nav" activeClassName="active" to="/">
                    Home
                </NavLink>
                <NavLink className="nav" to="/destination">
                    Trips
                </NavLink> 
                <NavLink className="nav" to="add-a-trip">
                    Add a Trip
                </NavLink>
        </nav>
```

Handle Submitting Controlled Form
```
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        fetch('http://localhost:3500/destination',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        setFormData({
            destinationName: "",
            imgURL: "",
            budget: 0,
            savings: 0,
        })
    }
```

# Getting Started with TripSave

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
Use npm install to install the dependencies

Use npm install react-router-dom@5 to download version 5 of React Router

## Available Script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `json-server -p 3500 --watch ./src/data/db.json`

Runs the server.\
Open [http://localhost:3500/destination](http://localhost:3500/destination) to view the server in your browser.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credit
Thank you to the team at Planetware.com for the images used for our db.json file.

## License
[MIT](https://choosealicense.com/licenses/mit/)