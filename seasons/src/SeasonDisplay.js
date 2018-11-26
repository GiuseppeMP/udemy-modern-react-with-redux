import React from "react";

class SeasonDisplay extends React.Component {
	state = {
		reactName: "react-component-season-display"
	};

	render() {
		return (
			<div data-react-name={this.state.reactName}>
				<div>Latitude: {this.props.lat} </div>
			</div>
		);
	}
}

export default SeasonDisplay;
