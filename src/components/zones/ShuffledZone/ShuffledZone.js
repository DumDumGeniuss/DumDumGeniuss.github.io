import React from "react";
import PropTypes from 'prop-types';
import './ShuffledZone.css';

class ShuffledZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
			backgroundColor: this.props.backgroundColor,
			position: this.props.position,
			top: this.props.top + this.props.topUnit,
		};

		return (
			<div style={zoneSize}>
			</div>
		);
	}
}

ShuffledZone.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	position: PropTypes.string,
	top: PropTypes.number,
	topUnit: PropTypes.string,
};

export default ShuffledZone;
