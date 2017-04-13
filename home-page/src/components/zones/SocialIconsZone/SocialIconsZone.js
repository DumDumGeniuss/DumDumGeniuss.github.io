import React from "react";
import ReactDOM from "react-dom";
import Social from '../../icons/SocialIcon/SocialIcon.js';
import ElegantModal from '../../modals/ElegantModal/ElegantModal.js';
import style from './SocialIconsZone.css';

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
			showGithub: false
		};
	}
	showSocialModal(modalName, e) {
		this.switchSocialModal(modalName, true);
	}
	hideSocialModal(modalName, e) {
		this.switchSocialModal(modalName, false);
	}
	switchSocialModal(modalName, isOn) {
		const modal = {};
		modal[modalName] = isOn;
		this.setState(modal);
	}
	render() {
		return (
			<div className={style.mainZone}>
				<div className={style.iconsZone}>
					<Social
						onMouseEnter={this.showSocialModal.bind(this, 'showMedium')}
						onMouseLeave={this.hideSocialModal.bind(this, 'showMedium')}
						type={'medium'}
						link={'https://medium.com/me/stories/public'}
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
						backgroundColor={'white'}
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
				<div className={style.modalsZone}>
					<ElegantModal 
						grow={this.state.showMedium}
						borderColor={'#0be370'}
						backgroundColor={'#0be370'}
					/>
					<ElegantModal 
						grow={this.state.showFacebook}
						borderColor={'#3b5998'}
						backgroundColor={'#3b5998'}
					/>
					<ElegantModal 
						grow={this.state.showGithub}
						borderColor={'white'}
						backgroundColor={'white'}
					/>
					<ElegantModal 
						grow={this.state.showYoutube}
						borderColor={'#e62117'}
						backgroundColor={'#e62117'}
					/>
				</div>
			</div>
		);
	}
}

export default SocialIconsZone;
