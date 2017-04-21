import React from "react";
import ReactDOM from "react-dom";
import GhostFontZone from '../../zones/GhostFontZone/GhostFontZone.js';
import SocialIconsZone from '../../zones/SocialIconsZone/SocialIconsZone.js';
import TravelMapZone from '../../zones/TravelMapZone/TravelMapZone.js';
import BeepBeepZone from '../../zones/BeepBeepZone/BeepBeepZone.js';
import style from './HomePage.css';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.currentLockPageY = 0;
		this.tartgetLockPageY = 0;
	}
	componentDidMount() {
	}
	componentWillUnmount() {
	}
				// <GhostFontZone
				// 	ref={'firstZone'}
				// 	width={100}
				// 	widthUnit={'%'}
				// 	height={100}
				// 	heightUnit={'vh'}
				// 	backgroundColor={'#1f1f1f'}
				// />
	render() {
		return (
			<div className={style.mainZone}>
				<BeepBeepZone
					ref={'thirdZone'}
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
			</div>
		);
	}
}

export default HomePage;
