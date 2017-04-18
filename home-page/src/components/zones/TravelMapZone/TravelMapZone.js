import React from "react";
import ReactDOM from "react-dom";
import style from './TravelMapZone.css';
import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle.json';

class TravelMapZone extends React.Component {
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
	constructor(props) {
		super(props);
		const self = this;
		this.state = {
			mapCenter: {lat: 25, lng: 121.5},
			mapOptions: {
				scrollwheel: false,
			    panControl: false,
			    zoomControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
			    streetViewControl: false,
			    overviewMapControl: false,
			    rotateControl: false,
				styles: mapStyle
			    // backgroundColor: 'yellow'
			},
		};
		this._moveCenter = this._moveCenter.bind(this);
		// setInterval( function () {
		// 	self._moveCenter();
		// }, 100);
	}
	_moveCenter() {
		this.setState({
			mapCenter: {lat: this.state.mapCenter.lat + 0.01, lng: this.state.mapCenter.lng}
		});
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this. props.heightUnit,
			backgroundColor: this.props.backgroundColor
		}
		return (
			<div id={this.props.id} style={zoneSize} className={style.mainZone}>
					<GoogleMapReact
						bootstrapURLKeys={{key: 'AIzaSyCtDzC6MrTnBK-OE4yaVTKwuczLDIGyvk8'}}
						defaultCenter={{lat: 25, lng: 121.5}}
						defaultZoom={4}
						center={this.state.mapCenter}
						zoom={this.state.mapZoom}
						options={this.state.mapOptions}
					>
					</GoogleMapReact>
			</div>
		);
	}
}

export default TravelMapZone;
