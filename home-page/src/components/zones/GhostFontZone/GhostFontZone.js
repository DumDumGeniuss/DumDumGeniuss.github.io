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
		spanish: 'Mucha gusto',
		japanese: 'よろしく'
	},

];

class GhostFontZone extends React.Component {
	static get propTypes() {
		return {
			id: React.PropTypes.string,
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
	}
	componentDidMount() {
		this.changeWordsInterval = setInterval(this.changeWords.bind(this), 4000);
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
			<div id={this.props.id} style={zoneSize} className={style.mainZone}>
				<GhostFont 
					words={wordsGroup.english}
					fontSize={'6em'}
					color={'#27AE60'}
					left={30}
					leftUnit={'vw'}
					top={20}
					topUnit={'vh'}
					direction={0}
				/>
				<GhostFont 
					words={wordsGroup.chinese}
					fontSize={'6em'}
					color={'#2980B9'}
					left={20}
					leftUnit={'%'}
					top={70}
					topUnit={'%'}
					direction={1}
				/>
				<GhostFont 
					words={wordsGroup.spanish}
					fontSize={'6em'}
					color={'#E67E22'}
					left={70}
					leftUnit={'vw'}
					top={80}
					topUnit={'vh'}
					direction={2}
				/>
				<GhostFont 
					words={wordsGroup.japanese}
					fontSize={'6em'}
					color={'#E74C3C'}
					left={80}
					leftUnit={'vw'}
					top={30}
					topUnit={'vh'}
					direction={3}
				/>
			</div>
		);
	}
}

export default GhostFontZone;
