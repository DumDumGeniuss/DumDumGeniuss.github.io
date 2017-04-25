import React from "react";
import ReactDOM from "react-dom";
import './ElegantModal.css';


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
		const mainZoneClass = this.props.grow ? 'ElegantModal-mainZone' + ' ' + 'ElegantModal-mainZoneGrow' : 'ElegantModal-mainZone';
		const horizontalUpperLineClass = this.props.grow ? 'ElegantModal-horizontalLine' + ' ' + 'ElegantModal-horizontalUpperLineGrow' : 'ElegantModal-horizontalLine';
		const horizontalButtomLineClass = this.props.grow ? 'ElegantModal-horizontalLine' + ' ' + 'ElegantModal-horizontalButtomLineGrow' : 'ElegantModal-horizontalLine';
		const verticalLineClass = this.props.grow ? 'ElegantModal-verticalLine' + ' ' + 'ElegantModal-verticalLineGrow' : 'ElegantModal-verticalLine';
		const quarterLeftUpperCircleClass = this.props.grow ? 'ElegantModal-quarterCircle' + ' ' + 'ElegantModal-quarterLeftUpperCircleGrow' : 'ElegantModal-quarterCircle';
		const quarterRightUpperCircleClass = this.props.grow ? 'ElegantModal-quarterCircle' + ' ' + 'ElegantModal-quarterRightUpperCircleGrow' : 'ElegantModal-quarterCircle';
		const quarterLeftButtomCircleClass = this.props.grow ? 'ElegantModal-quarterCircle' + ' ' + 'ElegantModal-quarterLeftButtomCircleGrow' : 'ElegantModal-quarterCircle';
		const quartetRightButtomCircleClass = this.props.grow ? 'ElegantModal-quarterCircle' + ' ' + 'ElegantModal-quarterRightButtomCircleGrow' : 'ElegantModal-quarterCircle';
		const contentZoneClass = this.props.grow ? 'ElegantModal-contentZone' + ' ' + 'ElegantModal-contentZoneGrow' : 'ElegantModal-contentZone';

		return (
			<div onClick={this._onClick.bind(this)} className={mainZoneClass}>
				<div className={'ElegantModal-borderZone'}>
					<div style={ {...this.basicLineStyle, top: 0, right: '50%'} } className={horizontalUpperLineClass} />
					<div style={ {...this.basicLineStyle, top: 0, left: '50%',} } className={horizontalUpperLineClass} />
					<div style={ {...this.basicLineStyle, bottom: 0, right: '5%'} } className={horizontalButtomLineClass} />
					<div style={ {...this.basicLineStyle, bottom: 0, left: '5%',} } className={horizontalButtomLineClass} />
					<div style={ {...this.basicLineStyle, top: '5%', left: 0} } className={verticalLineClass} />
					<div style={ {...this.basicLineStyle, top: '5%', right: 0} } className={verticalLineClass} />
					<div style={ {left: 0, top: 0} } className={'ElegantModal-circularSection'}>
						<div style={ {...this.basicCircleStyle} } className={quarterLeftUpperCircleClass}></div>
					</div>
					<div style={ {left: 0, bottom: 0, transform: 'rotate(-90deg)'} } className={'ElegantModal-circularSection'}>
						<div style={ {...this.basicCircleStyle} } className={quarterLeftButtomCircleClass}></div>
					</div>
					<div style={ {right: 0, bottom: 0, transform: 'rotate(-180deg)'} } className={'ElegantModal-circularSection'}>
						<div style={ {...this.basicCircleStyle} } className={quartetRightButtomCircleClass}></div>
					</div>
					<div style={ {right: 0, top: 0, transform: 'rotate(-270deg)'} } className={'ElegantModal-circularSection'}>
						<div style={ {...this.basicCircleStyle} } className={quarterRightUpperCircleClass}></div>
					</div>
				</div>
				<div style={this.contentZoneStyle} className={contentZoneClass}>
					<h1 style={this.contentTitleStyle} className={'ElegantModal-contentTitle'}>
						<b>{this.props.title}</b>
					</h1>
					<p style={this.contentTitleStyle} className={'ElegantModal-contentWords'}>{this.props.content}</p>
				</div>
			</div>
		);
	}
}

export default ElegantModal;
