import React from "react";
import ReactDOM from "react-dom";
import style from './ElegantModal.css';


class ElegantModal extends React.Component {
	static get propTypes() {
		return {
			grow: React.PropTypes.bool,
			borderColor: React.PropTypes.string,
			backgroundColor: React.PropTypes.string,
		};
	}
	constructor(props) {
		super(props)
		this.basicLineStyle = {
			border: '1px solid ' + this.props.borderColor
		};
		this.basicCircleStyle = {
			borderLeft: '2px solid ' + this.props.borderColor,
			borderTop: '2px solid ' + this.props.borderColor
		};
		this.contentZoneStyle = {
			backgroundColor: this.props.backgroundColor
		};
	}
	componentDidMount() {
	}
	render() {
		const mainZoneClass = this.props.grow ? style.mainZone + ' ' + style.mainZoneGrow : style.mainZone;
		const horizontalLineClass = this.props.grow ? style.horizontalLine + ' ' + style.horizontalLineGrow : style.horizontalLine;
		const verticalLineClass = this.props.grow ? style.verticalLine + ' ' + style.verticalLineGrow : style.verticalLine;
		const quarterCircleClass = this.props.grow ? style.quarterCircle + ' ' + style.quarterCircleGrow : style.quarterCircle;
		const contentZoneClass = this.props.grow ? style.contentZone + ' ' + style.contentZoneGrow : style.contentZone;

		return (
			<div className={mainZoneClass}>
				<div className={style.borderZone}>
					<div style={ {...this.basicLineStyle, top: 0, right: '200px'} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, top: 0, left: '200px',} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, bottom: 0, right: '20px'} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, bottom: 0, left: '20px',} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, top: '20px', left: 0} } className={verticalLineClass} />
					<div style={ {...this.basicLineStyle, top: '20px', right: 0} } className={verticalLineClass} />
					<div style={ {left: 0, top: 0} } className={style.circularSection}>
						<div style={ {...this.basicCircleStyle} } className={quarterCircleClass}></div>
					</div>
					<div style={ {left: 0, bottom: 0, transform: 'rotate(-90deg)'} } className={style.circularSection}>
						<div style={ {...this.basicCircleStyle} } className={quarterCircleClass}></div>
					</div>
					<div style={ {right: 0, bottom: 0, transform: 'rotate(-180deg)'} } className={style.circularSection}>
						<div style={ {...this.basicCircleStyle} } className={quarterCircleClass}></div>
					</div>
					<div style={ {right: 0, top: 0, transform: 'rotate(-270deg)'} } className={style.circularSection}>
						<div style={ {...this.basicCircleStyle} } className={quarterCircleClass}></div>
					</div>
				</div>
				<div style={this.contentZoneStyle} className={contentZoneClass}>
				</div>
			</div>
		);
	}
}

export default ElegantModal;
