import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {

    return (
        <div>        
            <div>Hello There!</div>
            <SeasonDisplay/>
        </div>
    );

};

ReactDOM.render(
    <App/>, document.querySelector("#root")
);