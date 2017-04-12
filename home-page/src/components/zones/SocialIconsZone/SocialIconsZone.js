import React from "react";
import ReactDOM from "react-dom";
import Social from '../../icons/SocialIcon/SocialIcon.js';
import style from './SocialIconsZone.css';

class SocialIconsZone extends React.Component {
	static get propTypes() {
		return {
			facebook: React.PropTypes.string,
			github: React.PropTypes.string,
			medium: React.PropTypes.string,
		};
	}
	render() {
		return (
			<div className={style.mainZone}>
				<Social 
					type={'medium'}
					link={'https://medium.com/me/stories/public'}
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
					backgroundColor={'white'}
					color={'black'}
				/>
				<Social 
					type={'youtube'}
					link={'https://www.youtube.com/user/DumDumGenius'}
					backgroundColor={'#e62117'}
					color={'white'}
				/>
			</div>
		);
	}
}

export default SocialIconsZone;
