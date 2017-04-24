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
		};
		this.currentLockPageY = 0;
		this.lockZone = this.lockZone.bind(this);
	}
	componentDidMount() {
		window.addEventListener("scroll", this.lockZone);
	}
	componentWillUnmount() {
	}
	changeZone(isDown) {
		const windowHeight = window.innerHeight;
		const mainZoneHeight = ReactDOM.findDOMNode(this.refs.mainZone).clientHeight;

		if (isDown) {
			this.currentLockPageY += windowHeight;
			if (this.currentLockPageY >= mainZoneHeight) {
				this.currentLockPageY = 0;
			}
		} else {
			this.currentLockPageY -= windowHeight;
			if (this.currentLockPageY < 0) {
				this.currentLockPageY = mainZoneHeight - windowHeight;
			}
		}
		scrollTo(0, this.currentLockPageY);
	}
	lockZone () {
		scrollTo(0, this.currentLockPageY);
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
					/>
					<SocialIconsZone />
					<TravelMapZone
						ref={'secondZone'}
						width={100}
						widthUnit={'%'}
						height={100}
						heightUnit={'vh'}
						backgroundColor={'white'}
					/>
					<BeepBeepZone
						ref={'thirdZone'}
						width={100}
						widthUnit={'%'}
						height={100}
						heightUnit={'vh'}
						backgroundColor={'black'}
					/>
				</div>
			</MainLayout>
		);
	}
}

export default HomePage;
