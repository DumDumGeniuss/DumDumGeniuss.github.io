import React from "react";
import ReactDOM from "react-dom";
import style from './EmergeMarker.css';

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
		const locationCircleClass = this.props.show ? style.locationCircle + ' ' + style.locationCircleShow : style.locationCircle;
		const squareZoneClass = this.props.show ? style.squareZone : style.invisible;
		return (
			<div className={style.mainZone}>
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
