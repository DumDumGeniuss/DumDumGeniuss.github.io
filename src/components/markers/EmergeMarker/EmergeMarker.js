import React from "react";
import PropTypes from 'prop-types';
import './EmergeMarker.css';

class EmergeMarker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
	}
	componentWillUnmount() {
	}
	_onMouseEnter(e) {
		this.props.onMouseEnter();
	}
	_onMouseLeave(e) {
		this.props.onMouseLeave();
	}
	render() {
		const locationCircleClass = this.props.show ? 'EmergeMarker-locationCircle EmergeMarker-locationCircleShow' : 'EmergeMarker-locationCircle';
		const squareZoneClass = this.props.show ? 'EmergeMarker-squareZone' : 'EmergeMarker-invisible';
		return (
			<div className={'EmergeMarker-mainZone'}>
				<div
					onMouseEnter={this._onMouseEnter.bind(this)}
					onMouseLeave={this._onMouseLeave.bind(this)}
					className={locationCircleClass}
				/>
				<div
					className={squareZoneClass}
				>
					<span>{this.props.text}</span>
				</div>
			</div>
		);
	}
}

EmergeMarker.propTypes = {
	show: PropTypes.bool,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
};

export default EmergeMarker;
