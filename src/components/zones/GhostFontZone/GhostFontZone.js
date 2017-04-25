import React from "react";
import ReactDOM from "react-dom";
import GhostFont from '../../fonts/GhostFont/GhostFont.js';
import style from './GhostFontZone.css';

const wordsGroups = [
	{
		chinese: '你好！',
		english: 'Hello!',
		spanish: '¡Hola!',
		japanese: 'こんにちは！'
	},
	{
		chinese: '我是楊亦中',
		english: 'Ｉ\'m Messi Yang',
		spanish: 'Soy Messi Yang',
		japanese: '僕は楊亦中'
	},
	{
		chinese: '來自台灣',
		english: 'Come from Taiwan',
		spanish: 'Soy de Taiwán',
		japanese: '台湾からです'
	},
	{
		chinese: '很高興認識你',
		english: 'Nice to meet you',
		spanish: 'Mucho gusto',
		japanese: 'よろしく'
	},
	{
		chinese: '歡迎！',
		english: 'Welcome!',
		spanish: '¡bienvenido!',
		japanese: 'よこそう！'
	},

];

class GhostFontZone extends React.Component {
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
			wordsOrder: -1
		};
		this.changeWords = this.changeWords.bind(this);
	}
	componentDidMount() {
		setTimeout(this.changeWords, 500);
		this.changeWordsInterval = setInterval(this.changeWords, 4000);
	}
	changeWords() {
		this.setState({
			wordsOrder: (this.state.wordsOrder + 1) % wordsGroups.length
		});
	}
	componentWillUnmount() {
		clearInterval(this.changeWordsInterval);
	}
	render() {
		const wordsGroup = this.state.wordsOrder === -1 ? {} : wordsGroups[this.state.wordsOrder];
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this. props.heightUnit,
			backgroundColor: this.props.backgroundColor
		}
		return (
			<div style={zoneSize} className={style.mainZone}>
				<GhostFont 
					words={wordsGroup.japanese}
					fontSize={'6em'}
					color={'#27AE60'}
					left={35}
					leftUnit={'%'}
					top={20}
					topUnit={'%'}
					direction={0}
				/>
				<GhostFont 
					words={wordsGroup.chinese}
					fontSize={'6em'}
					color={'#2980B9'}
					left={20}
					leftUnit={'%'}
					top={65}
					topUnit={'%'}
					direction={1}
				/>
				<GhostFont 
					words={wordsGroup.spanish}
					fontSize={'6em'}
					color={'#E67E22'}
					left={65}
					leftUnit={'%'}
					top={80}
					topUnit={'%'}
					direction={2}
				/>
				<GhostFont 
					words={wordsGroup.english}
					fontSize={'6em'}
					color={'#E74C3C'}
					left={80}
					leftUnit={'%'}
					top={35}
					topUnit={'%'}
					direction={3}
				/>
			</div>
		);
	}
}

export default GhostFontZone;
