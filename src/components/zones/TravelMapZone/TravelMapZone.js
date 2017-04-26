import React from "react";
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle.json';
import FlipCard from '../../cards/FlipCard/FlipCard.js';
import EmergeMarkerfrom from '../../markers/EmergeMarker/EmergeMarker.js';
import './TravelMapZone.css';

const fakeCities = [
	{
		_id: 'sadfdsafds',
		country: 'Japan',
		rank: '1st',
		name: 'Tokyo',
		show: false,
		lat: 35.652832,
		lng: 139.839478
	},
	{
		_id: 'zcxvewtds',
		country: 'China',
		rank: '2nd',
		name: 'Shanghai',
		show: false,
		lat: 31.267401,
		lng: 121.522179
	},
	{
		_id: 'dsasgxvdet',
		country: 'Singapore',
		rank: '3nd',
		name: 'Singapore',
		show: false,
		lat: 1.290270,
		lng: 103.851959
	},
	{
		_id: 'cxzvewtq',
		country: 'Taiwan',
		rank: '4th',
		name: 'Taipei',
		show: false,
		lat: 25.033671,
		lng: 121.564427
	},
	{
		_id: 'xzvczdsaf',
		country: 'Taiwan',
		rank: '5th',
		name: 'Taichung',
		show: false,
		lat: 24.1433333,
		lng: 120.6813889
	},
	{
		_id: 'ewrqsdaf',
		country: 'China',
		rank: '6th',
		name: 'Nanjing',
		show: false,
		lat: 32.0616667,
		lng: 118.7777778
	},
];

class TravelMapZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultMapCenter: {lat: 28.5, lng: 128},
			mapCenter: {lat: 28.5, lng: 128},
			mapOptions: {
				disableDoubleClickZoom: true,
				scrollwheel: false,
			    panControl: false,
			    zoomControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
			    streetViewControl: false,
			    overviewMapControl: false,
			    rotateControl: false,
				styles: mapStyle
			},
			showCard: false,
			cities: fakeCities
		};
		this.switchCity = this.switchCity.bind(this);
		this.changeMapCenter = this.changeMapCenter.bind(this);
		this.doChangeMapCentner = this.doChangeMapCentner.bind(this);
	}
	_moveCenter() {
		this.setState({
			mapCenter: {lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng + 1}
		});
	}
	_onCardsMouseEnter(index, city, e) {
		this.changeMapCenter( {lat: city.lat, lng: city.lng});
		this.switchCity(index, true);
	}
	_onCardsMouseLeave(index, city, e) {
		this.changeMapCenter( {lat: city.lat, lng: city.lng});
		this.switchCity(index, false);
	}
	_onMarkerMouseEnter(index, city, e) {
		this.switchCity(index, true);
	}
	_onMarkerMouseLeave(index, city, e) {
		this.switchCity(index, false);
	}
	switchCity(index, isOn) {
		this.setState( (state) => {
			state.cities[index].show = isOn
			return {
				cities: state.cities
			};
		});
	}
	changeMapCenter(newMapCenter) {
		const self = this;
		/* Clear old Interval */
		clearInterval(this.changeMapCenterInterval);
		this.changeMapCenterInterval = setInterval( () => {
			self.doChangeMapCentner(newMapCenter);
		}, 50);
	}
	doChangeMapCentner(newMapCenter) {
		const currentCenter = this.state.mapCenter;
		const latDistance = newMapCenter.lat - currentCenter.lat;
		const lngDistance = newMapCenter.lng - currentCenter.lng;
		let nextCenter = {
			lat: currentCenter.lat + latDistance * 0.1,
			lng: currentCenter.lng + lngDistance * 0.1,
		};
		if ( (latDistance > -0.1 && latDistance < 0.1 ) && (lngDistance > -0.1 && lngDistance < 0.1) ) {
			nextCenter = newMapCenter;
			clearInterval(this.changeMapCenterInterval);
		}
		this.setState({
			mapCenter: nextCenter,
		});
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
			backgroundColor: this.props.backgroundColor,
			position: this.props.position,
			top: this.props.top + this.props.topUnit,
		};
		return (
			<div style={zoneSize} className={'TravelMapZone-mainZone'}>
				<div className={'TravelMapZone-mapZone'}>
					<GoogleMapReact
						bootstrapURLKeys={{key: 'AIzaSyCtDzC6MrTnBK-OE4yaVTKwuczLDIGyvk8'}}
						defaultCenter={this.state.defaultMapCenter}
						defaultZoom={5}
						center={this.state.mapCenter}
						zoom={this.state.mapZoom}
						options={this.state.mapOptions}
					>
						{
							this.state.cities.map( (city, index) => {
								return (
									<EmergeMarkerfrom 
										key={city._id}
										lat={city.lat}
										lng={city.lng}
										show={city.show}
										text={city.name}
										onMouseEnter={this._onMarkerMouseEnter.bind(this, index, city)}
										onMouseLeave={this._onMarkerMouseLeave.bind(this, index, city)}
									/>
								);
							})
						}
					</GoogleMapReact>
				</div>
				<div className={'TravelMapZone-cardsRight'}>
					<h1 className={'TravelMapZone-cardsZoneTitle'}>
						Favorite City Ranking
					</h1>
					<div className={'TravelMapZone-cardsZone'}>
						{
							this.state.cities.map( (city, index) => {
								return (
									<FlipCard
										key={city._id}
										width={300}
										widthUnit={'px'}
										height={100}
										heightUnit={'px'}
										titleWords={city.country}
										frontWords={city.rank}
										backWords={city.name}
										show={city.show}
										onMouseEnter={this._onCardsMouseEnter.bind(this, index, city)}
										onMouseLeave={this._onCardsMouseLeave.bind(this, index, city)}
									/>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

TravelMapZone.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	position: PropTypes.string,
	top: PropTypes.number,
	topUnit: PropTypes.string,
};

export default TravelMapZone;
