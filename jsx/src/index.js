// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create react component
const App = () => {

    const button = {text:'Click me'};
    const labbelText = "Enter Name";

    return (
    <div>
        <label for="name" className="label">{labbelText}</label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor:'blue', color:'white'}}>{button.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>, document.querySelector('#root')
);


