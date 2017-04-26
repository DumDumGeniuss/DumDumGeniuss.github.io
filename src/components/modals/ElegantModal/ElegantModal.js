import React from "react";
import PropTypes from 'prop-types';
import './ElegantModal.css';


class ElegantModal extends React.Component {
	_onClick(e) {
		this.props.onClick(e);
	}
	render() {
		const basicLineStyle = {
			border: '1px solid ' + this.props.borderColor
		};
		const basicCircleStyle = {
			borderLeft: '2px solid ' + this.props.borderColor,
			borderTop: '2px solid ' + this.props.borderColor
		};
		const contentZoneStyle = {
			backgroundColor: this.props.backgroundColor
		};
		const contentTitleStyle = {
			color: this.props.color
		};
		const mainZoneClass = this.props.grow ? 'ElegantModal-mainZone ElegantModal-mainZoneGrow' : 'ElegantModal-mainZone';
		const horizontalUpperLineClass = this.props.grow ? 'ElegantModal-horizontalLine ElegantModal-horizontalUpperLineGrow' : 'ElegantModal-horizontalLine';
		const horizontalButtomLineClass = this.props.grow ? 'ElegantModal-horizontalLine ElegantModal-horizontalButtomLineGrow' : 'ElegantModal-horizontalLine';
		const verticalLineClass = this.props.grow ? 'ElegantModal-verticalLine ElegantModal-verticalLineGrow' : 'ElegantModal-verticalLine';
		const quarterLeftUpperCircleClass = this.props.grow ? 'ElegantModal-quarterCircle ElegantModal-quarterLeftUpperCircleGrow' : 'ElegantModal-quarterCircle';
		const quarterRightUpperCircleClass = this.props.grow ? 'ElegantModal-quarterCircle ElegantModal-quarterRightUpperCircleGrow' : 'ElegantModal-quarterCircle';
		const quarterLeftButtomCircleClass = this.props.grow ? 'ElegantModal-quarterCircle ElegantModal-quarterLeftButtomCircleGrow' : 'ElegantModal-quarterCircle';
		const quartetRightButtomCircleClass = this.props.grow ? 'ElegantModal-quarterCircle ElegantModal-quarterRightButtomCircleGrow' : 'ElegantModal-quarterCircle';
		const contentZoneClass = this.props.grow ? 'ElegantModal-contentZone ElegantModal-contentZoneGrow' : 'ElegantModal-contentZone';

		return (
			<div onClick={this._onClick.bind(this)} className={mainZoneClass}>
				<div className={'ElegantModal-borderZone'}>
					<div style={ {...basicLineStyle, top: 0, right: '50%'} } className={horizontalUpperLineClass} />
					<div style={ {...basicLineStyle, top: 0, left: '50%',} } className={horizontalUpperLineClass} />
					<div style={ {...basicLineStyle, bottom: 0, right: '5%'} } className={horizontalButtomLineClass} />
					<div style={ {...basicLineStyle, bottom: 0, left: '5%',} } className={horizontalButtomLineClass} />
					<div style={ {...basicLineStyle, top: '5%', left: 0} } className={verticalLineClass} />
					<div style={ {...basicLineStyle, top: '5%', right: 0} } className={verticalLineClass} />
					<div style={{left: 0, top: 0}} className={'ElegantModal-circularSection'}>
						<div style={basicCircleStyle} className={quarterLeftUpperCircleClass}></div>
					</div>
					<div style={{left: 0, bottom: 0, transform: 'rotate(-90deg)'}} className={'ElegantModal-circularSection'}>
						<div style={basicCircleStyle} className={quarterLeftButtomCircleClass}></div>
					</div>
					<div style={{right: 0, bottom: 0, transform: 'rotate(-180deg)'}} className={'ElegantModal-circularSection'}>
						<div style={basicCircleStyle} className={quartetRightButtomCircleClass}></div>
					</div>
					<div style={{right: 0, top: 0, transform: 'rotate(-270deg)'}} className={'ElegantModal-circularSection'}>
						<div style={ basicCircleStyle } className={quarterRightUpperCircleClass}></div>
					</div>
				</div>
				<div style={contentZoneStyle} className={contentZoneClass}>
					<h1 style={contentTitleStyle} className={'ElegantModal-contentTitle'}>
						<b>{this.props.title}</b>
					</h1>
					<p style={contentTitleStyle} className={'ElegantModal-contentWords'}>{this.props.content}</p>
				</div>
			</div>
		);
	}
}

ElegantModal.propTypes = {
	grow: PropTypes.bool,
	borderColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	onClick: PropTypes.func
};

export default ElegantModal;
