import React from "react";
import ReactDOM from "react-dom";
import GhostFontZone from '../../zones/GhostFontZone/GhostFontZone.js';
import SocialIconsZone from '../../zones/SocialIconsZone/SocialIconsZone.js';
import TravelMapZone from '../../zones/TravelMapZone/TravelMapZone.js';
import BeepBeepZone from '../../zones/BeepBeepZone/BeepBeepZone.js';
import MainLayout from '../../layouts/MainLayout/MainLayout.js';
import ArrowUp from 'react-icons/lib/fa/arrow-up';
import ArrowDown from 'react-icons/lib/fa/arrow-down';
import style from './HomePage.css';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLockZone: 0
		};
		this.totalZone = 3;
	}
	componentDidMount() {
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
			<MainLayout>
				<div ref={'mainZone'} className={style.mainZone}>
					<div className={style.zoneControl}>
						<ArrowUp onClick={this.changeZone.bind(this, false)} className={style.arrow}/>
						<ArrowDown onClick={this.changeZone.bind(this, true)} className={style.arrow}/>
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
				</div>
			</MainLayout>
		);
	}
}

export default HomePage;
