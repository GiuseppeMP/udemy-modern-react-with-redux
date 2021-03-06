import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	// equivalent to constructor function thank the babeljs
	state = {
		reactName: "react-component-app",
		lat: null,
		long: null,
		errorMessage: ""
	};

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

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return (
				<div data-react-name={this.state.reactName}>
					<div>Error: {this.state.errorMessage} </div>
				</div>
			);
		} else if (!this.state.errorMessage && this.state.lat) {
			return (
				<div data-react-name={this.state.reactName}>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		}

		return <Spinner />;
	}

	// React says we have to define render method!!
	render() {
		return (
			<div data-react-name={this.state.reactName}>{this.renderContent()}</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
