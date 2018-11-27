import React from "react";
import "./SeasonDisplay.css";

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
			<div
				className={`season-display ${this.state.season}`}
				data-react-name={this.state.reactName}
			>
				<i className={`${this.state.seasonIcon} icon icon-left massive`} />
				<h1>{this.state.seasonTxt}</h1>
				<i className={`${this.state.seasonIcon} icon icon-right massive`} />
			</div>
		);
	}
}

export default SeasonDisplay;
