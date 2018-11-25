// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getBtnText(){
    return "Click on Me!";
}

// Create react component
const App = () => {

    const buttonText = 'Click Me!';

    return (
    <div>
        <label for="name" className="label">Enter name</label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor:'blue', color:'white'}}>{getBtnText()}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>, document.querySelector('#root')
);