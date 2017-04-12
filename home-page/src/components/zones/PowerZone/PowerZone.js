import React from "react";
import ReactDOM from "react-dom";
import style from './PowerZone.css';

class PowerZone extends React.Component {
	static get propTypes() {
		return {
			id: React.PropTypes.string,
			width: React.PropTypes.number,
			widthUnit: React.PropTypes.string,
			height: React.PropTypes.number,
			heightUnit: React.PropTypes.string,
			backgroundColor: React.PropTypes.string
		};
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this. props.heightUnit,
			backgroundColor: this.props.backgroundColor
		}
		return (
			<div id={this.props.id} style={zoneSize} className={style.mainZone}>
				{this.props.children}
			</div>
		);
	}
}

export default PowerZone;
