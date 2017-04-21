import React from "react";
import ReactDOM from "react-dom";
import style from './BeepBeepZone.css';

class BeepBeepZone extends React.Component {
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
		}, 10500);
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
				// <div className={specialyLeftClass}>
				// 	<span><b>Programming</b></span>
				// 	<span><b>Multiple Langauges</b></span>
				// </div>
				// <div className={specialyRightClass}>
				// 	<span><b>Painting</b></span>
				// 	<span><b>Telling joke</b></span>
				// </div>
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this. props.heightUnit,
			backgroundColor: this.props.backgroundColor
		}
		const helloEngClass = this.state.showHelloEng ? style.helloEng + ' ' + style.hello : style.invisible;
		const helloSpanClass = this.state.showHelloSpan ? style.helloSpan + ' ' + style.hello : style.invisible;
		const helloJpnClass = this.state.showHelloJpn ? style.helloJpn + ' ' + style.hello : style.invisible;
		const helloChiClass = this.state.showHelloChi ? style.helloChi + ' ' + style.hello : style.invisible;
		const myNameIsEngClass = this.state.showMyNameIsEng ? style.myNameIsEng + ' ' + style.myNameIs : style.invisible;
		const myNameIsSpanClass = this.state.showMyNameIsSpan ? style.myNameIsSpan + ' ' + style.myNameIs : style.invisible;
		const myNameIsJpnClass = this.state.showMyNameIsJpn ? style.myNameIsJpn + ' ' + style.myNameIs : style.invisible;
		const myNameIsChiClass = this.state.showMyNameIsChi ? style.myNameIsChi + ' ' + style.myNameIs : style.invisible;
		const myNameClass = this.state.showMyName ? style.myName + ' ' + style.name : style.invisible;
		const akaClass = this.state.showAka ? style.aka + ' ' + style.name : style.invisible;
		const nickNameClass = this.state.showNickName ? style.nickName + ' ' + style.name : style.invisible;
		const specialtyClass = this.state.showSpecialty ? style.specialty + ' ' + style.specialtyCommon : style.invisible;
		const specialtyOneClass = this.state.showSpecialtyOne ? style.specialtyOne + ' ' + style.specialtyCommon : style.invisible;
		const specialtyTwoClass = this.state.showSpecialtyTwo ? style.specialtyTwo + ' ' + style.specialtyCommon : style.invisible;
		const specialtyThreeClass = this.state.showSpecialtyThree ? style.specialtyThree + ' ' + style.specialtyCommon : style.invisible;
		const specialtyFourClass = this.state.showSpecialtyFour ? style.specialtyFour + ' ' + style.specialtyCommon : style.invisible;

		return (
			<div style={zoneSize} className={style.mainZone}>
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
				<div className={style.specialtyZone}>
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

export default BeepBeepZone;
