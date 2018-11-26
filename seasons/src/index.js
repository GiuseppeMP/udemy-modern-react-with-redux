import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	constructor(props) {
		super(props);

		// init state
		this.state = { lat: null };
	}

	// React says we have to define render method!!
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position),
			(error) => console.log(error)
		);

		return (
			<div>
				<div>Latitude:</div>
				<div>Longitude:</div>
				<SeasonDisplay />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
