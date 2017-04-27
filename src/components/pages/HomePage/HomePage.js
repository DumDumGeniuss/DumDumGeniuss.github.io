import React from "react";
import SocialIconsZone from '../../zones/SocialIconsZone/SocialIconsZone.js';
import TravelMapZone from '../../zones/TravelMapZone/TravelMapZone.js';
import BeepBeepZone from '../../zones/BeepBeepZone/BeepBeepZone.js';
import StarWarsZone from '../../zones/StarWarsZone/StarWarsZone.js';
import ArrowUp from 'react-icons/lib/fa/arrow-up';
import ArrowDown from 'react-icons/lib/fa/arrow-down';
import './HomePage.css';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLockZone: 0
		};
		this.totalZone = 3;
	}
	componentDidMount() {
		const queryParams = new URLSearchParams(this.props.location.search);
		console.log(queryParams.get('zone'));
		if (queryParams.get('zone')) {
			this.setState ({
				currentLockZone: parseInt(queryParams.get('zone'), 10)
			});
		}
	}
	componentWillUnmount() {
	}
	changeZone(isDown) {
		let nextZone;

		if (isDown) {
			nextZone = this.state.currentLockZone + 1
			if (nextZone === this.totalZone) {
				nextZone = 0;
			}
		} else {
			nextZone = this.state.currentLockZone - 1
			if (nextZone < 0) {
				nextZone = this.totalZone - 1;
			}
		}
		this.setState({
			currentLockZone: nextZone
		});
	}
	render() {
		return (
			<div ref={'mainZone'} className={'HomePage-mainZone'}>
				<div className={'HomePage-zoneControl'}>
					<ArrowUp onClick={this.changeZone.bind(this, false)} className={'HomePage-arrow'}/>
					<ArrowDown onClick={this.changeZone.bind(this, true)} className={'HomePage-arrow'}/>
				</div>
				<BeepBeepZone
					ref={'firstZone'}
					width={100}
					widthUnit={'%'}
					height={100}
					heightUnit={'vh'}
					backgroundColor={'black'}
					position={'absolute'}
					top={this.state.currentLockZone === 0 ? 0 : 100}
					topUnit={'%'}
				/>
				<SocialIconsZone />
				<TravelMapZone
					ref={'secondZone'}
					width={100}
					widthUnit={'%'}
					height={100}
					heightUnit={'vh'}
					backgroundColor={'white'}
					position={'absolute'}
					top={this.state.currentLockZone === 1 ? 0 : 100}
					topUnit={'%'}
				/>
				<StarWarsZone
					ref={'firstZone'}
					width={100}
					widthUnit={'%'}
					height={100}
					heightUnit={'vh'}
					backgroundColor={'black'}
					position={'absolute'}
					top={this.state.currentLockZone === 2 ? 0 : 100}
					topUnit={'%'}
					playVideo={this.state.currentLockZone === 2}
				/>
			</div>
		);
	}
}

HomePage.propTypes = {};

export default HomePage;
