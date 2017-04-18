import React from "react";
import ReactDOM from "react-dom";
import PowerZone from '../../zones/PowerZone/PowerZone.js';
import GhostFontZone from '../../zones/GhostFontZone/GhostFontZone.js';
import SocialIconsZone from '../../zones/SocialIconsZone/SocialIconsZone.js';
import TravelMapZone from '../../zones/TravelMapZone/TravelMapZone.js';
import style from './HomePage.css';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
	}
	componentWillUnmount() {
	}
	render() {
		return (
			<div className={style.mainZone}>
				<GhostFontZone
					id={'HomePage-GhostFontZone'}
					width={100}
					widthUnit={'%'}
					height={100}
					heightUnit={'vh'}
					backgroundColor={'black'}
				/>
				<SocialIconsZone />
				<TravelMapZone
					id={'HomePage-TravelMapZone'}
					width={100}
					widthUnit={'%'}
					height={100}
					heightUnit={'vh'}
					backgroundColor={'blue'}
				/>
			</div>
		);
	}
}

export default HomePage;
