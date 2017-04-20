import React from "react";
import ReactDOM from "react-dom";
import style from './ElegantModal.css';


class ElegantModal extends React.Component {
	static get propTypes() {
		return {
			grow: React.PropTypes.bool,
			borderColor: React.PropTypes.string,
			backgroundColor: React.PropTypes.string,
			onClick: React.PropTypes.func
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
		this.contentTitleStyle = {
			color: this.props.color
		}
	}
	componentDidMount() {
	}
	_onClick(e) {
		this.props.onClick(e);
	}
	render() {
		const mainZoneClass = this.props.grow ? style.mainZone + ' ' + style.mainZoneGrow : style.mainZone;
		const horizontalLineClass = this.props.grow ? style.horizontalLine + ' ' + style.horizontalLineGrow : style.horizontalLine;
		const verticalLineClass = this.props.grow ? style.verticalLine + ' ' + style.verticalLineGrow : style.verticalLine;
		const quarterCircleClass = this.props.grow ? style.quarterCircle + ' ' + style.quarterCircleGrow : style.quarterCircle;
		const contentZoneClass = this.props.grow ? style.contentZone + ' ' + style.contentZoneGrow : style.contentZone;

		return (
			<div onClick={this._onClick.bind(this)} className={mainZoneClass}>
				<div className={style.borderZone}>
					<div style={ {...this.basicLineStyle, top: 0, right: '50%'} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, top: 0, left: '50%',} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, bottom: 0, right: '50%'} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, bottom: 0, left: '50%',} } className={horizontalLineClass} />
					<div style={ {...this.basicLineStyle, top: '5%', left: 0} } className={verticalLineClass} />
					<div style={ {...this.basicLineStyle, top: '5%', right: 0} } className={verticalLineClass} />
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
					<h1 style={this.contentTitleStyle} className={style.contentTitle}>
						<b>{this.props.title}</b>
					</h1>
					<p style={this.contentTitleStyle} className={style.contentWords}>{this.props.content}</p>
				</div>
			</div>
		);
	}
}

export default ElegantModal;
