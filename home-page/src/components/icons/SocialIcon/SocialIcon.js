import React from "react";
import ReactDOM from "react-dom";
import style from './SocialIcon.css';
import Medium from 'react-icons/lib/fa/medium';
import Facebook from 'react-icons/lib/fa/facebook';
import Github from 'react-icons/lib/fa/github-alt';
import Youtube from 'react-icons/lib/fa/youtube';

class SocialIcon extends React.Component {
	static get propTypes() {
		return {
			type: React.PropTypes.string,
			link: React.PropTypes.string,
			backgroundColor: React.PropTypes.string,
			color: React.PropTypes.string
		};
	}
	constructor(props) {
		super(props)
		this.typeIconMap = {
			medium: <Medium />,
			facebook: <Facebook />,
			github: <Github />,
			youtube: <Youtube />
		};
	}
	getIcon(type) {
		return this.typeIconMap[type];
	}
	render() {
		const iconStyle = {
			color: this.props.color,
			backgroundColor: this.props.backgroundColor
		}
		const Icon = this.getIcon(this.props.type);
		return (
			<a target={'_blank'} style={iconStyle} href={this.props.link} className={style.mainZone}>
				{Icon}
			</a>
		);
	}
}

export default SocialIcon;
