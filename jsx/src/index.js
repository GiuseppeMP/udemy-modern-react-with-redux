// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component
const App = () => {
    return (
    <div>
        <label for="name" class="label">Enter name</label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor:'blue', color:'white'}}>Save</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>, document.querySelector('#root')
);