import React from "react";
import ReactDOM from "react-dom";
import style from './TravelMapZone.css';
import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle.json';
import FlipCard from '../../cards/FlipCard/FlipCard.js';

const fakeCities = [
	{
		titleWords: 'Japan',
		frontWords: 'First Place',
		backWords: 'Tokyo',
		show: false,
		lat: 25,
		lng: 121.5
	},
	{
		titleWords: 'China',
		frontWords: 'Second Place',
		backWords: 'Shanghai',
		show: false,
		lat: 25,
		lng: 121.5
	},
	{
		titleWords: 'Taiwan',
		frontWords: 'Third Place',
		backWords: 'Taipei',
		show: false,
		lat: 25,
		lng: 121.5
	},
	{
		titleWords: 'Taiwan',
		frontWords: 'Fourth Place',
		backWords: 'Taichung',
		show: false,
		lat: 25,
		lng: 121.5
	},
];

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
			showCard: false,
			cities: fakeCities
		};
		// this._moveCenter = this._moveCenter.bind(this);
		// setInterval( function () {
		// 	self._moveCenter();
		// }, 100);
	}
	_moveCenter() {
		this.setState({
			mapCenter: {lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng + 1}
		});
	}
	_onCardsMouseEnter(index, e) {
		this.state.cities[index].show = true;
		this.setState({
			cities: this.state.cities
		});
	}
	_onCardsMouseLeave(index, e) {
		this.state.cities[index].show = false;
		this.setState({
			cities: this.state.cities
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
				<div className={style.mapZone}>
					<GoogleMapReact
						bootstrapURLKeys={{key: 'AIzaSyCtDzC6MrTnBK-OE4yaVTKwuczLDIGyvk8'}}
						defaultCenter={{lat: 25, lng: 121.5}}
						defaultZoom={5}
						center={this.state.mapCenter}
						zoom={this.state.mapZoom}
						options={this.state.mapOptions}
					>
					</GoogleMapReact>
				</div>
				<div className={style.cardsZone}>
					<h1 className={style.cardsZoneTitle}>
						Favorite City Ranking
					</h1>
					{
						this.state.cities.map( (city, index) => {
							return (
								<FlipCard
									width={300}
									widthUnit={'px'}
									height={100}
									heightUnit={'px'}
									titleWords={city.titleWords}
									frontWords={city.frontWords}
									backWords={city.backWords}
									show={city.show}
									onMouseEnter={this._onCardsMouseEnter.bind(this, index)}
									onMouseLeave={this._onCardsMouseLeave.bind(this, index)}
								/>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default TravelMapZone;
