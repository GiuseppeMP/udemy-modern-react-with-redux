import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	constructor(props) {
		super(props);

		// init state
		this.state = {
			reactName: "react-component-app",
			lat: null,
			long: null,
			errorMessage: ""
		};

		// putting getCurrentPosition here, avoid multiples fetchs on comp render.
		window.navigator.geolocation.getCurrentPosition(
			position => {
				// we called setState!!
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				});

				// we dit not!! this is bad!!
				// this.state.lat = position.coords.latitude;
			},
			err => {
				this.setState({
					errorMessage: err.message
				});
			}
		);
	}

	// React says we have to define render method!!
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return (
				<div data-react-name={this.state.reactName}>
					<div>Error: {this.state.errorMessage} </div>
				</div>
			);
		} else if (!this.state.errorMessage && this.state.lat) {
			return (
				<div data-react-name={this.state.reactName}>
					<div>Latitude: {this.state.lat} </div>
				</div>
			);
		} else {
			return (
				<div data-react-name={this.state.reactName}>
					<div>Loading!</div>
				</div>
			);
		}
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
