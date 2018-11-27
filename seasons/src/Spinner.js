import React from "react";

const Spinner = props => {
	return (
		<div className="ui active dimmer inverted">
			<div className="ui big text loader">Loading...</div>
		</div>
	);
};

export default Spinner;
