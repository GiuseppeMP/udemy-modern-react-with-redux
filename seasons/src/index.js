import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	constructor(props) {
		super(props);

		// init state
		this.state = { lat: null, long: null, errorMessage: "" };

		// putting getCurrentPosition here, avoid multiples fetchs on comp render.
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// we called setState!!
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				});

				// we dit not!! this is bad!!
				// this.state.lat = position.coords.latitude;
			},
			(err) => {
				this.setState({
					errorMessage: err.message
				});
			}
		);
	}

	// React says we have to define render method!!
	render() {
		return (
			<div name="react-component-app">
				<div>Latitude: {this.state.lat} </div>
				<div>Longitude: {this.state.long} </div>
				<div>Error: {this.state.errorMessage} </div>
				<SeasonDisplay />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
