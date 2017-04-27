import React from 'react';
import PropTypes from 'prop-types';
import Pause from 'react-icons/lib/fa/pause';
import Play from 'react-icons/lib/fa/play';
import './StarWarsZone.css';
import starAudio from './starwars.mp3';
import starLog from './starwars.png';

class StarWarsZone extends React.Component {
	constructor() {
		super()
		this.state = {
			starWarScrollMarginTop: 0,
			starWarViewRotate: 0,
			movieStatus: true,
			starWarLogoZ: 0,
		};
		this.switchScroll = this.switchScroll.bind(this);
		this.switchMoveStarWarLogoZ = this.switchMoveStarWarLogoZ.bind(this);
		this.switchAnimation = this.switchAnimation.bind(this);
		this.switchStarWarsAudio = this.switchStarWarsAudio.bind(this);
	}
	componentDidMount() {
		this.startWarsAudio =document.getElementById('star-wars-audio');

		this.starWarScrollHeight = this.refs.starWarScroll.getBoundingClientRect().height;
		this.starWarViewHeight = this.refs.startWarView.getBoundingClientRect().height;

		this.initialStarWarsScroll();
	}
	componentWillUnmount() {
		this.switchScroll(false);
	}
	componentWillReceiveProps(nextProps) {
		const newPlayVideo = nextProps.playVideo;
		const oldPlayVideo = this.props.playVideo;
		if (newPlayVideo !== oldPlayVideo) {
			if (newPlayVideo) {
				this.switchAnimation(true);
			} else {
				this.switchAnimation(false);
			}
		}
	}
	switchAnimation(play) {
		if (play) {
			if (this.scrollInterval !== undefined) {
				this.switchScroll(true);
			}
			this.switchMoveStarWarLogoZ(true);
			this.switchStarWarsAudio(true);
			this.setState({
				movieStatus: true
			});
		} else {
			this.switchScroll(false);
			this.switchMoveStarWarLogoZ(false);
			this.switchStarWarsAudio(false);
			this.setState({
				movieStatus: false
			});
		}
	}
	switchStarWarsAudio(play) {
		if (play) {
			this.startWarsAudio.play();
		} else {
			this.startWarsAudio.pause();
		}
	}
	initialStarWarLogoZ() {
		this.setState({
			starWarLogoZ: 0
		});
	}
	switchMoveStarWarLogoZ(play) {
		const self = this;
		if (play) {
			this.moveLogoZ = setInterval(() => {
				self.setState({
					starWarLogoZ: self.state.starWarLogoZ - 10
				});
				if (self.scrollInterval === undefined && self.state.starWarLogoZ < - 500) {
					self.switchScroll(true);
				}
			}, 15);
		} else {
			clearInterval(this.moveLogoZ);
		}
	}
	initialStarWarsScroll() {
		this.setState({
			starWarScrollMarginTop: this.starWarViewHeight*1,
			starWarViewRotate: 60
		});
	}
	switchScroll(play) {
		const self = this;
		if (play) {
			this.scrollInterval = setInterval(() => {
				self.setState({
					starWarScrollMarginTop: self.state.starWarScrollMarginTop - 1,
					movieStatus: true
				});
				if(self.state.starWarScrollMarginTop < -self.starWarScrollHeight ) {
					self.switchAnimation(false);
					self.initialStarWarsScroll();
					self.initialStarWarLogoZ();
				}
			}, 15);
		} else {
			clearInterval(this.scrollInterval);
			this.setState({
				movieStatus: false
			});
		}
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
			<div style={zoneSize} className={'mainArea'}>
				<audio ref={'star-wars-audio'} id="star-wars-audio" className={'starWarsAudio'} loop>
				  <source src={starAudio} type="audio/mpeg"/>
				</audio>
				<div 
					className={'functionIcon pauseIcon'}
					style={ {display: this.state.movieStatus?'initial':'none'} }
					onClick={this.switchAnimation.bind(this, false)}
				>
					<Pause />
				</div>
				<div
					className={'functionIcon pauseIcon'}
					style={ {display: !this.state.movieStatus?'initial':'none'} }
					onClick={this.switchAnimation.bind(this, true)}
				>
					<Play />
				</div>
				<figure style={ {transform: 'translateZ(' + this.state.starWarLogoZ + 'px)'} } className={'starWarLogo'}>
					<img src={starLog} alt={'DumDumGenius Logo'}/>
				</figure>
				<div
					ref={'startWarView'}
					style={ {transform: 'rotateX(' + this.state.starWarViewRotate + 'deg)'} }
					className={'starWarView'}
				>
					<div ref={'starWarScroll'} style={{marginTop: this.state.starWarScrollMarginTop + 'px'}}>
						<h1 className={'bitTitle'}><b>Hello</b></h1>
						<b>
							<p className={'paragraph'}>
								Hello, I'm Messi Yang, from Chiao Tung University, Taiwanese.
								I have two years experience in Web Development, now I'm a JavaScript full-stacker.
								As a backend, I like to use NodeJS, Docker, Amazone, Nginx, MongoDB, Postgres, Linux.
								As a frontend, I like to use PostCSS, React & Redux, ES6/7, Webpack.
								There's a perfectionist in my mind, but I know in the world we live, perfect does not exist, so what I have to do is keeping changing and changing.
								I believe that language is the best way to solve problems and help you to get closer to the world, so I also learned other languages like Japanese and Spanish.
								I've been waiting for a opportunity to show my power and work with people from different countries or cultures, that will be challenging and interesting!
			
								<br/>1. Chinese > English > Japanese > Spanish
								<br/>2. Great skill in Javascript, Node and some popular 3rd-party libraries.
								<br/>3. Have great power of UI design, I can do lots of cool Graphical User Interface, it sometimes involved physics, but not a problem for me.
								<br/>4. React, Redux, ES6, ES7, know how to design components and how to make friend with Redux.
								<br/>5. Basic knowledge on CS, like data structure, algorithm.
								<br/>6. Use docker to manage or deploy all my own projects.
								<br/>7. Popular database like Postgres, MySQL and NoSQL database like Mongo.
								<br/>8. Use git, and know how to develop with git flow.
								<br/>9. Hands-on experience in payment flow, Alipay.
								<br/>10. Know how to do LoadBalance, ReverseProxy, Cache and build service on Amazon or Azure or others.
								<br/>11. Like to use CI/CD to solve annoying problems ( Jenkins, Drone CI ) .
								
								<br/>＊2017 NTU Big Data Hackathon
								<br/>＊2017 Sprint Hackathon (1st Prize)
							</p>
						</b>
					</div>
				</div>
			</div>
		);
	}
}

StarWarsZone.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	position: PropTypes.string,
	top: PropTypes.number,
	topUnit: PropTypes.string,
	playVideo: PropTypes.bool
};

export default StarWarsZone;
