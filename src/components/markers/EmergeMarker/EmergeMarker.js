import React from "react";
import ReactDOM from "react-dom";
import './EmergeMarker.css';

class EmergeMarker extends React.Component {
	static get propTypes() {
		return {
			show: React.PropTypes.bool,
			onMouseEnter: React.PropTypes.func,
			onMouseLeave: React.PropTypes.func,
		};
	}
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
		const locationCircleClass = this.props.show ? 'EmergeMarker-locationCircle' + ' ' + 'EmergeMarker-locationCircleShow' : 'EmergeMarker-locationCircle';
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

export default EmergeMarker;
