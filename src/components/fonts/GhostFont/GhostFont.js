import React from "react";
import ReactDOM from "react-dom";
import style from './GhostFont.css';


class GhostFont extends React.Component {
	static get propTypes() {
		return {
			words: React.PropTypes.string,
			fontSize: React.PropTypes.string,
			color: React.PropTypes.string,
			left: React.PropTypes.number,
			leftUnit: React.PropTypes.string,
			top: React.PropTypes.number,
			topUnit: React.PropTypes.string,
			direction: React.PropTypes.number
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		this.changeShowState = this.changeShowState.bind(this);
	}
	changeShowState() {
		const self = this;
		this.setState({
			show: !this.state.show
		});
		setTimeout(function() {
			self.setState({
				show: !self.state.show
			});			
		}, 3000);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.words !== this.props.words) {
			this.changeShowState();
		}
	}
	getDirectionClass(direction, style) {
		switch (direction) {
			case 0:
				return style.ghostFontTopShow;
				break;
			case 1:
				return style.ghostFontLeftShow;
				break;
			case 2:
				return style.ghostFontDownShow;
				break;
			case 3:
				return style.ghostFontRightShow;
				break;
			default:
				return style.ghostFontTopShow;
		}
	}
	render() {
		const mainZoneStyle = {
			left: this.props.left + this.props.leftUnit,
			top: this.props.top + this.props.topUnit
		};
		const ghostFontStyle = {
			fontSize: this.props.fontSize,
			color: this.props.color
		};

		const ghostFontClass = this.state.show ? style.ghostFont + ' ' + this.getDirectionClass(this.props.direction, style) : style.ghostFont;
		return (
			<div style={mainZoneStyle} className={style.mainZone}>
				<span style={ghostFontStyle} className={ghostFontClass}>
					<b>
						{this.props.words}
					</b>
				</span>
			</div>
		);
	}
}

export default GhostFont;
