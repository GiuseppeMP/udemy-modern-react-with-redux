import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	constructor(props) {
		super(props);

		// The constructor only job is initialite the state.
		this.state = {
			reactName: "react-component-app",
			lat: null,
			long: null,
			errorMessage: ""
		};
	}

	componentDidMount() {
		console.log("My season component just rendered.");

		// putting getCurrentPosition here, avoid multiples fetchs on comp render.
		window.navigator.geolocation.getCurrentPosition(
			position =>
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				}),
			err =>
				this.setState({
					errorMessage: err.message
				})
		);
	}

	componentDidUpdate() {
		console.log("My component just updated.");
	}

	componentWillUnMount() {
		console.log("My component gonna be unmount.");
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
