import React from "react";

class SeasonDisplay extends React.Component {
	state = {
		reactName: "react-component-season-display"
	};

	getSeason(lat, month) {
		console.log(lat + " " + month);
		if (month > 2 && month < 9) {
			return lat > 0 ? "summer" : "winter";
		} else {
			return lat > 0 ? "winter" : "summer";
		}
	}

	render() {
		return (
			<div data-react-name={this.state.reactName}>
				<div>Latitude: {this.props.lat} </div>
				<div>
					Season: {this.getSeason(this.props.lat, new Date().getMonth())}{" "}
				</div>
			</div>
		);
	}
}

export default SeasonDisplay;
