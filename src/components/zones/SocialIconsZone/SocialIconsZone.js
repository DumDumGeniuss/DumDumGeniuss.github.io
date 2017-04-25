import React from "react";
import ReactDOM from "react-dom";
import Social from '../../icons/SocialIcon/SocialIcon.js';
import ElegantModal from '../../modals/ElegantModal/ElegantModal.js';
import './SocialIconsZone.css';

class SocialIconsZone extends React.Component {
	static get propTypes() {
		return {
			facebook: React.PropTypes.string,
			github: React.PropTypes.string,
			medium: React.PropTypes.string,
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			showFacebook: false,
			showMedium: false,
			showYoutube: false,
			showGithub: false,
			showLinkedin: false,
		};
	}
	showSocialModal(modalName, e) {
		this.switchSocialModal(modalName, true);
	}
	hideSocialModal(modalName, e) {
		this.switchSocialModal(modalName, false);
	}
	switchSocialModal(modalName, isOn) {
		this.setState({
			[modalName]: isOn
		});
	}
	onModalClick(url, e) {
		window.open(url, "_blank");
	}
	render() {
		return (
			<div className={'SocialIconsZone-mainZone'}>
				<div className={'SocialIconsZone-iconsZone'}>
					<Social
						onMouseEnter={this.showSocialModal.bind(this, 'showLinkedin')}
						onMouseLeave={this.hideSocialModal.bind(this, 'showLinkedin')}
						type={'linkedin'}
						link={'https://www.linkedin.com/in/messi-yang-671987b7/'}
						backgroundColor={'#0077B5'}
						color={'white'}
					/>
					<Social
						onMouseEnter={this.showSocialModal.bind(this, 'showMedium')}
						onMouseLeave={this.hideSocialModal.bind(this, 'showMedium')}
						type={'medium'}
						link={'https://medium.com/@dumdumgenius'}
						backgroundColor={'#0be370'}
						color={'black'}
					/>
					<Social
						onMouseEnter={this.showSocialModal.bind(this, 'showFacebook')}
						onMouseLeave={this.hideSocialModal.bind(this, 'showFacebook')}
						type={'facebook'}
						link={'https://www.facebook.com/Dumdumgenius-Messi-Yang-190480868126460/'}
						backgroundColor={'#3b5998'}
						color={'white'}
					/>
					<Social
						onMouseEnter={this.showSocialModal.bind(this, 'showGithub')}
						onMouseLeave={this.hideSocialModal.bind(this, 'showGithub')}
						type={'github'}
						link={'https://github.com/DumDumGeniuss'}
						backgroundColor={'#cecece'}
						color={'black'}
					/>
					<Social
						onMouseEnter={this.showSocialModal.bind(this, 'showYoutube')}
						onMouseLeave={this.hideSocialModal.bind(this, 'showYoutube')}
						type={'youtube'}
						link={'https://www.youtube.com/user/DumDumGenius'}
						backgroundColor={'#e62117'}
						color={'white'}
					/>
				</div>
				<div className={'SocialIconsZone-modalsZone'}>
					<ElegantModal 
						grow={this.state.showLinkedin}
						borderColor={'#106794'}
						backgroundColor={'#0077B5'}
						color={'white'}
						title={'Linkedin'}
						content={'You\'re heading to dumdumgenius\' Linkedin page, you can see all my experience and my specialties here!'}
					/>
					<ElegantModal 
						grow={this.state.showMedium}
						borderColor={'#3d8a61'}
						backgroundColor={'#37b773'}
						color={'white'}
						title={'Medium'}
						content={'You\'re heading to dumdumgenius\' Medium page, I\'m writing some stories here!'}
						onClick={this.onModalClick.bind(this, 'https://medium.com/@dumdumgenius')}
					/>
					<ElegantModal 
						grow={this.state.showFacebook}
						borderColor={'#3b5998'}
						backgroundColor={'#5b6c90'}
						color={'white'}
						title={'Facebook'}
						content={'You\'re heading to dumdumgenius\' Facebook page, don\'t forget to thumb up if you like it!'}
					/>
					<ElegantModal 
						grow={this.state.showGithub}
						borderColor={'#454545'}
						backgroundColor={'#bfbfbf'}
						color={'white'}
						title={'Github'}
						content={'You\'re heading to dumdumgenius\' Github page, you can see all my projects here!'}
					/>
					<ElegantModal 
						grow={this.state.showYoutube}
						borderColor={'#a5241d'}
						backgroundColor={'#e86e68'}
						color={'white'}
						title={'Youtube'}
						content={'You\'re heading to dumdumgenius\' Youtube page, some cool videos are here to be discovered!'}
					/>
				</div>
			</div>
		);
	}
}

export default SocialIconsZone;
