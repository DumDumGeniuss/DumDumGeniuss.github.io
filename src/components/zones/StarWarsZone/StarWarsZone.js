import React from 'react';
import PropTypes from 'prop-types';
import Pause from 'react-icons/lib/fa/pause';
import Play from 'react-icons/lib/fa/play';
import './StarWarsZone.css';
import starAudio from './starwars.mp3';

class StarWarsZone extends React.Component {
	constructor() {
		super()
		this.state = {
			starWarScrollMarginTop: 0,
			starWarViewRotate: 0,
			movieStatus: true
		};
		this.killScroll = this.killScroll.bind(this);
		this.startScroll = this.startScroll.bind(this);
	}
	componentDidMount() {
		this.startWarsAudio =document.getElementById('star-wars-audio');

		this.starWarScrollHeight = this.refs.starWarScroll.getBoundingClientRect().height;
		this.starWarViewHeight = this.refs.startWarView.getBoundingClientRect().height;

		this.initialStarWarsScroll();
		this.startScroll();
	}
	componentWillUnmount() {
		this.killScroll();
	}
	initialStarWarsScroll() {
		this.setState({
			starWarScrollMarginTop: this.starWarViewHeight*1,
			starWarViewRotate: 60
		});
	}
	startStarWarsAudio() {
		this.startWarsAudio.play();
	}
	pausePauseWarsAudio() {
		this.startWarsAudio.pause();
	}
	startScroll() {
		const self = this;
		this.scrollInterval = setInterval(() => {
			self.setState({
				starWarScrollMarginTop: self.state.starWarScrollMarginTop - 3,
				movieStatus: true
			});
			if(self.state.starWarScrollMarginTop < -self.starWarScrollHeight-50 ) {
				self.killScroll()
				self.initialStarWarsScroll()
			}
		}, 15)
		self.startStarWarsAudio();
	}
	killScroll() {
		clearInterval(this.scrollInterval);
		this.setState({
			movieStatus: false
		});
		this.pausePauseWarsAudio();
	}
	render() {
		const self = this;
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
			backgroundColor: this.props.backgroundColor,
			position: this.props.position,
			top: this.props.top + this.props.topUnit,
		};

		return (
			<div style={zoneSize} className={'mainArea'}>
				<audio ref={'star-wars-audio'} id="star-wars-audio" className={'starWarsAudio'} autoPlay loop>
				  <source src={starAudio} type="audio/mpeg"/>
				</audio>
				<div 
					className={'functionIcon pauseIcon'}
					style={ {display: this.state.movieStatus?'initial':'none'} }
					onClick={self.killScroll}
				>
					<Pause />
				</div>
				<div
					className={'functionIcon pauseIcon'}
					style={ {display: !self.state.movieStatus?'initial':'none'} }
					onClick={self.startScroll}
				>
					<Play />
				</div>
				<div
					ref={'startWarView'}
					style={ {transform: 'rotateX(' + self.state.starWarViewRotate + 'deg)'} }
					className={'starWarView'}
				>
					<div ref={'starWarScroll'} style={{marginTop: self.state.starWarScrollMarginTop + 'px'}}>
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
								
								1. Chinese > English > Japanese > Spanish
								2. Great skill in Javascript, Node and some popular 3rd-party libraries.
								3. Have great power of UI design, I can do lots of cool Graphical User Interface, it sometimes involved physics, but not a problem for me.
								4. React, Redux, ES6, ES7, know how to design components and how to make friend with Redux.
								5. Basic knowledge on CS, like data structure, algorithm.
								6. Use docker to manage or deploy all my own projects.
								7. Popular database like Postgres, MySQL and NoSQL database like Mongo.
								8. Use git, and know how to develop with git flow.
								9. Hands-on experience in payment flow, Alipay.
								10. Know how to do LoadBalance, ReverseProxy, Cache and build service on Amazon or Azure or others.
								11. Like to use CI/CD to solve annoying problems ( Jenkins, Drone CI ) .
								
								＊2017 NTU Big Data Hackathon
								＊2017 Sprint Hackathon (1st Prize)
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
};

export default StarWarsZone;
