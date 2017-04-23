import React from "react";
import ReactDOM from "react-dom";
import style from './TravelMapZone.css';
import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle.json';
import FlipCard from '../../cards/FlipCard/FlipCard.js';
import EmergeMarkerfrom from '../../markers/EmergeMarker/EmergeMarker.js';

const fakeCities = [
	{
		country: 'Japan',
		rank: '1st',
		name: 'Tokyo',
		show: false,
		lat: 35.652832,
		lng: 139.839478
	},
	{
		country: 'China',
		rank: '2nd',
		name: 'Shanghai',
		show: false,
		lat: 31.267401,
		lng: 121.522179
	},
	{
		country: 'Singapore',
		rank: '3nd',
		name: 'Singapore',
		show: false,
		lat: 1.290270,
		lng: 103.851959
	},
	{
		country: 'Taiwan',
		rank: '4th',
		name: 'Taipei',
		show: false,
		lat: 25.033671,
		lng: 121.564427
	},
	{
		country: 'Taiwan',
		rank: '5th',
		name: 'Taichung',
		show: false,
		lat: 24.1433333,
		lng: 120.6813889
	},
	{
		country: 'China',
		rank: '6th',
		name: 'Nanjing',
		show: false,
		lat: 32.0616667,
		lng: 118.7777778
	},
];

class TravelMapZone extends React.Component {
	static get propTypes() {
		return {
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
			height: this.props.height + this. props.heightUnit,
			backgroundColor: this.props.backgroundColor
		}
		return (
			<div style={zoneSize} className={style.mainZone}>
				<div className={style.mapZone}>
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
				<div className={style.cardsRight}>
					<h1 className={style.cardsZoneTitle}>
						Favorite City Ranking
					</h1>
					<div className={style.cardsZone}>
						{
							this.state.cities.map( (city, index) => {
								return (
									<FlipCard
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

export default TravelMapZone;
