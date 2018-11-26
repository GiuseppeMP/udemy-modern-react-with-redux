import React from "react";

class SeasonDisplay extends React.Component {
	state = {
		reactName: "react-component-season-display",
		season: null,
		seasonTxt: null
	};

	getSeason(lat, month) {
		console.log(lat + " " + month);
		if (month > 2 && month < 9) {
			return lat > 0 ? "summer" : "winter";
		} else {
			return lat > 0 ? "winter" : "summer";
		}
	}

	componentDidMount() {
		this.setState({
			season: this.getSeason(this.props.lat, new Date().getMonth()),
			seasonTxt:
				this.season === "winter" ? "Burr, its chilly" : "Lets hit the Beach!"
		});
	}

	render() {
		return (
			<div data-react-name={this.state.reactName}>
				<div>Latitude: {this.props.lat} </div>
				<div>Season: {this.state.season}</div>
				<h1>{this.state.seasonTxt}</h1>
			</div>
		);
	}
}

export default SeasonDisplay;
