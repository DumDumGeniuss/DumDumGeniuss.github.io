import React from "react";
import PropTypes from 'prop-types';
import './SongsZone.css';
import mayday from './mayday.jpg';
import GREEEEN from './GREEEEN.jpg';
import mongro800 from './mongro800.jpg';
import jay from './jay.jpg';
import MrChildren from './mr-children.jpg';
import ZMGCG from './zi-min-ga-chun-giao.mp3';
import KiSeKi from './kiseki.mp3';
import ANaTaNi from './anatani.mp3';
import SunnyDay from './sunny-day.mp3';
import CTJ from './chan-tou-jiu.mp3';

const songs = [
	{
		id: 'dsafdasf',
		title: 'May Day',
		song: '志明與春嬌',
		src: mayday,
		audioSrc: ZMGCG,
		startTime: 62,
	},
	{
		id: 'dsafewte',
		title: 'Greeeen',
		song: 'キセキ',
		src: GREEEEN,
		audioSrc: KiSeKi,
		startTime: 80,
	},
	{
		id: 'saifodjsaof',
		title: '周杰倫',
		song: '晴天',
		src: jay,
		audioSrc: SunnyDay,
		startTime: 98,
	},
	{
		id: 'fejiwofjew',
		title: 'Mongro800',
		song: 'あなたに',
		src: mongro800,
		audioSrc: ANaTaNi,
		startTime: 21,
	},
	{
		id: 'djsalf',
		title: 'Mr.Children',
		song: '常套句',
		src: MrChildren,
		audioSrc: CTJ,
		startTime: 48,
	}
];

class SongsZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showedSong: 0,
		};
		this.changeSong = this.changeSong.bind(this);
		this.switchPlayingAudio = this.switchPlayingAudio.bind(this);
		this.startSong = this.startSong.bind(this);
		this.pausSong = this.pausSong.bind(this);
	}
	componentDidMount() {
		if (this.props.playAudio) {
			this.switchPlayingAudio(true);
		} else {
			this.switchPlayingAudio(false);
		}
	}
	componentWillReceiveProps(nextProps) {
		const newplayAudio = nextProps.playAudio;
		const oldplayAudio = this.props.playAudio;
		if (newplayAudio !== oldplayAudio) {
			if (newplayAudio) {
				this.switchPlayingAudio(true);
			} else {
				this.switchPlayingAudio(false);
			}
		}
	}
	switchPlayingAudio(play) {
		if (play) {
			this.changeSong();
			this.changeSongInterval = setInterval(() => {
				this.changeSong();
			}, 8000);
		} else {
			this.pausSong(this.state.showedSong);
			clearInterval(this.changeSongInterval);
		}
	}
	startSong(index) {
		const newSong = this.refs[songs[index].id];
		newSong.currentTime = songs[index].startTime;
		newSong.play();
	}
	pausSong(index) {
		const oldSong = this.refs[songs[index].id];
		oldSong.pause();
	}
	changeSong() {
		const songSize = songs.length;

		/* Stop Old Song*/
		this.pausSong(this.state.showedSong);
		/* Play New Song*/
		this.startSong((this.state.showedSong + 1) % songSize);

		this.setState((state) => {
			return {
				showedSong: (state.showedSong + 1) % songSize
			};
		});
	}
	componentWillUnmount() {
		this.switchPlayingAudio(false);
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
			backgroundColor: this.props.backgroundColor,
			position: this.props.position,
			top: this.props.top + this.props.topUnit,
		};

		return (
			<div style={zoneSize} className={'SongsZone-mainZone'}>
				{
					songs.map((item, index) => {
						const isShowed = index === this.state.showedSong;
						return (
							<div
								key={item.id}
								className={isShowed ? 'SongsZone-background' : 'SongsZone-invisible'}
							>
								<img
									alt={item.title}
									src={item.src}
								/>
							</div>
						);
					})
				}
				{
					songs.map((item, index) => {
						const isShowed = index === this.state.showedSong;
						return (
							<div
								key={item.id}
								className={isShowed ? 'SongsZone-titleZone' : 'SongsZone-invisible'}
							>
								<h1>{item.title}</h1>
								<h1>{item.song}</h1>
							</div>
						);
					})
				}
				{
					songs.map((item, index) => {
						return (
							<audio
								key={item.id}
								ref={item.id}
								loop
							>
							  <source src={item.audioSrc} type="audio/mpeg"/>
							</audio>
						);
					})
				}
			</div>
		);
	}
}

SongsZone.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	position: PropTypes.string,
	top: PropTypes.number,
	topUnit: PropTypes.string,
};

export default SongsZone;
