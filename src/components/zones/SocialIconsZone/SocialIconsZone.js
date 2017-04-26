import React from "react";
import PropTypes from 'prop-types';
import Social from '../../icons/SocialIcon/SocialIcon.js';
// import ElegantModal from '../../modals/ElegantModal/ElegantModal.js';
import './SocialIconsZone.css';

class SocialIconsZone extends React.Component {
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
	// showSocialModal(modalName, e) {
	// 	this.switchSocialModal(modalName, true);
	// }
	// hideSocialModal(modalName, e) {
	// 	this.switchSocialModal(modalName, false);
	// }
	// switchSocialModal(modalName, isOn) {
	// 	this.setState({
	// 		[modalName]: isOn
	// 	});
	// }
	onModalClick(url, e) {
		window.open(url, "_blank");
	}
	render() {
		return (
			<div className={'SocialIconsZone-mainZone'}>
				<div className={'SocialIconsZone-iconsZone'}>
					<Social
						type={'linkedin'}
						link={'https://www.linkedin.com/in/messi-yang-671987b7/'}
						backgroundColor={'#0077B5'}
						color={'white'}
					/>
					<Social
						type={'medium'}
						link={'https://medium.com/@dumdumgenius'}
						backgroundColor={'#0be370'}
						color={'black'}
					/>
					<Social
						type={'facebook'}
						link={'https://www.facebook.com/Dumdumgenius-Messi-Yang-190480868126460/'}
						backgroundColor={'#3b5998'}
						color={'white'}
					/>
					<Social
						type={'github'}
						link={'https://github.com/DumDumGeniuss'}
						backgroundColor={'#cecece'}
						color={'black'}
					/>
					<Social
						type={'youtube'}
						link={'https://www.youtube.com/user/DumDumGenius'}
						backgroundColor={'#e62117'}
						color={'white'}
					/>
				</div>
			</div>
		);
	}
}

SocialIconsZone.propTypes = {
	facebook: PropTypes.string,
	github: PropTypes.string,
	medium: PropTypes.string,
};


export default SocialIconsZone;
