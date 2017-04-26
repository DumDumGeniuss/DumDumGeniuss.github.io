import React from "react";
import PropTypes from 'prop-types';
import './BeepBeepZone.css';

class BeepBeepZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showHelloEng: false,
			showHelloSpan: false,
			showHelloJpn: false,
			showHelloChi: false,
			showMyNameIsEng: false,
			showMyNameIsSpan: false,
			showMyNameIsJpn: false,
			showMyNameIsChi: false,
			showMyName: false,
			showAka: false,
			showNickName: false,
			showSpecialty: false,
			showSpecialtyOne: false,
			showSpecialtyTwo: false,
			showSpecialtyThree: false,
			showSpecialtyFour: false,
		};
		this.playBeepBeep = this.playBeepBeep.bind(this);
		this.swtichShowFonts = this.swtichShowFonts.bind(this);
	}
	componentDidMount() {
		const self = this;
		self.playBeepBeep();
		this.playBeepBeepInterval = setInterval( () => {
			self.playBeepBeep();
		}, 11000);
	}
	playBeepBeep() {
		const self = this;
		self.swtichShowFonts(1000, 'showHelloEng', true);
		self.swtichShowFonts(3000, 'showHelloEng', false);

		self.swtichShowFonts(1000, 'showHelloJpn', true);
		self.swtichShowFonts(3000, 'showHelloJpn', false);

		self.swtichShowFonts(1000, 'showHelloSpan', true);
		self.swtichShowFonts(3000, 'showHelloSpan', false);

		self.swtichShowFonts(1000, 'showHelloChi', true);
		self.swtichShowFonts(3000, 'showHelloChi', false);

		self.swtichShowFonts(3500, 'showMyNameIsEng', true);
		self.swtichShowFonts(6000, 'showMyNameIsEng', false);

		self.swtichShowFonts(3500, 'showMyNameIsSpan', true);
		self.swtichShowFonts(6000, 'showMyNameIsSpan', false);

		self.swtichShowFonts(3500, 'showMyNameIsJpn', true);
		self.swtichShowFonts(6000, 'showMyNameIsJpn', false);

		self.swtichShowFonts(3500, 'showMyNameIsChi', true);
		self.swtichShowFonts(6000, 'showMyNameIsChi', false);

		self.swtichShowFonts(5500, 'showMyName', true);
		self.swtichShowFonts(7500, 'showMyName', false);

		self.swtichShowFonts(5500, 'showAka', true);
		self.swtichShowFonts(7500, 'showAka', false);

		self.swtichShowFonts(5500, 'showNickName', true);
		self.swtichShowFonts(7500, 'showNickName', false);

		self.swtichShowFonts(8000, 'showSpecialty', true);
		self.swtichShowFonts(9500, 'showSpecialty', false);

		self.swtichShowFonts(8500, 'showSpecialtyOne', true);
		self.swtichShowFonts(10000, 'showSpecialtyOne', false);

		self.swtichShowFonts(9000, 'showSpecialtyTwo', true);
		self.swtichShowFonts(10500, 'showSpecialtyTwo', false);

		self.swtichShowFonts(9500, 'showSpecialtyThree', true);
		self.swtichShowFonts(11000, 'showSpecialtyThree', false);

		self.swtichShowFonts(10000, 'showSpecialtyFour', true);
		self.swtichShowFonts(11500, 'showSpecialtyFour', false);
	}
	swtichShowFonts(time, state, isOn) {
		const self = this;
		const newState = {};
		newState[state] = isOn;
		setTimeout( () => {
			self.setState(newState);
		}, time);
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
			backgroundColor: this.props.backgroundColor,
			position: this.props.position,
			top: this.props.top + this.props.topUnit,
		};
		const helloEngClass = this.state.showHelloEng ? 'BeepBeepZone-helloEng BeepBeepZone-hello' : 'BeepBeepZone-invisible';
		const helloSpanClass = this.state.showHelloSpan ? 'BeepBeepZone-helloSpan BeepBeepZone-hello' : 'BeepBeepZone-invisible';
		const helloJpnClass = this.state.showHelloJpn ? 'BeepBeepZone-helloJpn BeepBeepZone-hello' : 'BeepBeepZone-invisible';
		const helloChiClass = this.state.showHelloChi ? 'BeepBeepZone-helloChi BeepBeepZone-hello' : 'BeepBeepZone-invisible';
		const myNameIsEngClass = this.state.showMyNameIsEng ? 'BeepBeepZone-myNameIsEng BeepBeepZone-myNameIs' : 'BeepBeepZone-invisible';
		const myNameIsSpanClass = this.state.showMyNameIsSpan ? 'BeepBeepZone-myNameIsSpan BeepBeepZone-myNameIs' : 'BeepBeepZone-invisible';
		const myNameIsJpnClass = this.state.showMyNameIsJpn ? 'BeepBeepZone-myNameIsJpn BeepBeepZone-myNameIs' : 'BeepBeepZone-invisible';
		const myNameIsChiClass = this.state.showMyNameIsChi ? 'BeepBeepZone-myNameIsChi BeepBeepZone-myNameIs' : 'BeepBeepZone-invisible';
		const myNameClass = this.state.showMyName ? 'BeepBeepZone-myName BeepBeepZone-name' : 'BeepBeepZone-invisible';
		const akaClass = this.state.showAka ? 'BeepBeepZone-aka BeepBeepZone-name' : 'BeepBeepZone-invisible';
		const nickNameClass = this.state.showNickName ? 'BeepBeepZone-nickName BeepBeepZone-name' : 'BeepBeepZone-invisible';
		const specialtyClass = this.state.showSpecialty ? 'BeepBeepZone-specialty BeepBeepZone-specialtyCommon' : 'BeepBeepZone-invisible';
		const specialtyOneClass = this.state.showSpecialtyOne ? 'BeepBeepZone-specialtyOne BeepBeepZone-specialtyCommon' : 'BeepBeepZone-invisible';
		const specialtyTwoClass = this.state.showSpecialtyTwo ? 'BeepBeepZone-specialtyTwo BeepBeepZone-specialtyCommon' : 'BeepBeepZone-invisible';
		const specialtyThreeClass = this.state.showSpecialtyThree ? 'BeepBeepZone-specialtyThree BeepBeepZone-specialtyCommon' : 'BeepBeepZone-invisible';
		const specialtyFourClass = this.state.showSpecialtyFour ? 'BeepBeepZone-specialtyFour BeepBeepZone-specialtyCommon' : 'BeepBeepZone-invisible';

		return (
			<div style={zoneSize} className={'BeepBeepZone-mainZone'}>
				<span className={helloSpanClass}><b>Hola</b></span>
				<span className={helloJpnClass}><b>こんにちは</b></span>
				<span className={helloChiClass}><b>妳好</b></span>
				<span className={helloEngClass}><b>Hello</b></span>
				<span className={myNameIsSpanClass}><b>Me llamo</b></span>
				<span className={myNameIsJpnClass}><b>俺の名前は</b></span>
				<span className={myNameIsChiClass}><b>我的名字是</b></span>
				<span className={myNameIsEngClass}><b>My name is</b></span>
				<span className={nickNameClass}><b>DumDumGenius</b></span>
				<span className={akaClass}><b>AKA</b></span>
				<span className={myNameClass}><b>Messi Yang</b></span>
				<div className={'BeepBeepZone-specialtyZone'}>
					<span className={specialtyClass}><b>Specialty</b></span>
					<span className={specialtyOneClass}><b>Coding</b></span>
					<span className={specialtyTwoClass}><b>Painting</b></span>
					<span className={specialtyThreeClass}><b>Linguist</b></span>
					<span className={specialtyFourClass}><b>Joking</b></span>
				</div>
			</div>
		);
	}
}

BeepBeepZone.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	position: PropTypes.string,
	top: PropTypes.number,
	topUnit: PropTypes.string,
};

export default BeepBeepZone;
