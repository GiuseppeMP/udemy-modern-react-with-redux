import React from "react";

class SeasonDisplay extends React.Component {
	state = {
		reactName: "react-component-season-display",
		season: null,
		seasonTxt: null,
		seasonIcon: null
	};

	// Pattern to avoid ternaries
	seasonConfig = {
		summer: {
			name: "summer",
			text: "Let's hit the Beach!",
			iconName: "sun"
		},
		winter: {
			name: "winter",
			text: "Burr, its chilly",
			iconName: "snowflake"
		}
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
		let seasonTmp = this.seasonConfig[
			this.getSeason(this.props.lat, new Date().getMonth())
		];
		this.setState({
			season: seasonTmp.name,
			seasonTxt: seasonTmp.text,
			seasonIcon: seasonTmp.iconName
		});
	}

	render() {
		return (
			<div data-react-name={this.state.reactName}>
				<div>Latitude: {this.props.lat} </div>
				<div>Season: {this.state.season}</div>
				<h1>
					{this.state.seasonTxt}{" "}
					<i className={`${this.state.seasonIcon} icon`} />
				</h1>
			</div>
		);
	}
}

export default SeasonDisplay;
