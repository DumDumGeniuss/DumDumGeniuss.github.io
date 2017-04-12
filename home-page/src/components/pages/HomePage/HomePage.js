import React from "react";
import ReactDOM from "react-dom";
import I18nFont from '../../fonts/I18nFont/I18nFont.js';
import PowerZone from '../../zones/PowerZone/PowerZone.js';
import GhostFontZone from '../../zones/GhostFontZone/GhostFontZone.js';
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
					id={'HomePage-helloZone'}
					width={100}
					widthUnit={'%'}
					height={100}
					heightUnit={'vh'}
					backgroundColor={'black'}
				/>
				<PowerZone
					width={100}
					widthUnit={'vw'}
					height={100}
					heightUnit={'vh'}
					backgroundColor={'#DDDDDD'}
				>
					<I18nFont />
				</PowerZone>
			</div>
		);
	}
}

export default HomePage;
