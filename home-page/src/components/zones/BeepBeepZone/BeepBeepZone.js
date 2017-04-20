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
			showSpecialtyLeft: false,
			showSpecialtyRight: false,
		};
		this.playBeepBeep = this.playBeepBeep.bind(this);
		this.swtichShowFonts = this.swtichShowFonts.bind(this);
	}
	componentDidMount() {
		const self = this;
		self.playBeepBeep();
		this.playBeepBeepInterval = setInterval( () => {
			self.playBeepBeep();
		}, 10000);
	}
	playBeepBeep() {
		const self = this;
		self.swtichShowFonts(1000, 'showHelloEng', true);
		self.swtichShowFonts(2500, 'showHelloEng', false);

		self.swtichShowFonts(1000, 'showHelloJpn', true);
		self.swtichShowFonts(2500, 'showHelloJpn', false);

		self.swtichShowFonts(1000, 'showHelloSpan', true);
		self.swtichShowFonts(2500, 'showHelloSpan', false);

		self.swtichShowFonts(1000, 'showHelloChi', true);
		self.swtichShowFonts(2500, 'showHelloChi', false);

		self.swtichShowFonts(3000, 'showMyNameIsEng', true);
		self.swtichShowFonts(5000, 'showMyNameIsEng', false);

		self.swtichShowFonts(3000, 'showMyNameIsSpan', true);
		self.swtichShowFonts(5000, 'showMyNameIsSpan', false);

		self.swtichShowFonts(3000, 'showMyNameIsJpn', true);
		self.swtichShowFonts(5000, 'showMyNameIsJpn', false);

		self.swtichShowFonts(3000, 'showMyNameIsChi', true);
		self.swtichShowFonts(5000, 'showMyNameIsChi', false);

		self.swtichShowFonts(4600, 'showMyName', true);
		self.swtichShowFonts(6600, 'showMyName', false);

		self.swtichShowFonts(5100, 'showAka', true);
		self.swtichShowFonts(6600, 'showAka', false);

		self.swtichShowFonts(5600, 'showNickName', true);
		self.swtichShowFonts(6600, 'showNickName', false);

		self.swtichShowFonts(7100, 'showSpecialty', true);
		self.swtichShowFonts(9600, 'showSpecialty', false);

		self.swtichShowFonts(8100, 'showSpecialtyLeft', true);
		self.swtichShowFonts(9600, 'showSpecialtyLeft', false);

		self.swtichShowFonts(8100, 'showSpecialtyRight', true);
		self.swtichShowFonts(9600, 'showSpecialtyRight', false);
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
		const myNameClass = this.state.showMyName ? style.myName : style.invisible;
		const akaClass = this.state.showAka ? style.aka : style.invisible;
		const nickNameClass = this.state.showNickName ? style.nickName : style.invisible;
		const specialtyClass = this.state.showSpecialty ? style.specialty : style.invisible;
		const specialyLeftClass = this.state.showSpecialtyLeft ? style.specialyLeft : style.invisible;
		const specialyRightClass = this.state.showSpecialtyRight ? style.specialyRight : style.invisible;

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
				<div className={specialtyClass}>
					<span><b>S</b></span>
					<span><b>P</b></span>
					<span><b>E</b></span>
					<span><b>C</b></span>
					<span><b>I</b></span>
					<span><b>A</b></span>
					<span><b>L</b></span>
					<span><b>T</b></span>
					<span><b>Y</b></span>
				</div>
				<div className={specialyLeftClass}>
					<span><b>Programming</b></span>
					<span><b>Multiple Langauges</b></span>
				</div>
				<div className={specialyRightClass}>
					<span><b>Painting</b></span>
					<span><b>Telling joke</b></span>
				</div>
			</div>
		);
	}
}

export default BeepBeepZone;
