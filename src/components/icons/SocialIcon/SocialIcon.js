import React from "react";
import ReactDOM from "react-dom";
import './SocialIcon.css';
import Medium from 'react-icons/lib/fa/medium';
import Facebook from 'react-icons/lib/fa/facebook';
import Github from 'react-icons/lib/fa/github-alt';
import Youtube from 'react-icons/lib/fa/youtube';
import Linkedin from 'react-icons/lib/fa/linkedin';
import 'react-icons/lib/fa/linkedin';

class SocialIcon extends React.Component {
	static get propTypes() {
		return {
			type: React.PropTypes.string,
			link: React.PropTypes.string,
			backgroundColor: React.PropTypes.string,
			color: React.PropTypes.string,
			onMouseEnter: React.PropTypes.func,
			onMouseLeave: React.PropTypes.func
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			spin: false
		};
		this.typeIconMap = {
			medium: <Medium />,
			facebook: <Facebook />,
			github: <Github />,
			youtube: <Youtube />,
			linkedin: <Linkedin />
		};
	}
	getIcon(type) {
		return this.typeIconMap[type];
	}
	_onMouseClick(e) {

	}
	_onMouseEnter(e) {
		this.setState({
			spin: true
		});
		this.props.onMouseEnter(e);
	}
	_onMouseLeave(e) {
		this.setState({
			spin: false
		});
		this.props.onMouseLeave(e);
	}
	render() {
		const iconStyle = {
			color: this.props.color,
			backgroundColor: this.props.backgroundColor
		}
		const Icon = this.getIcon(this.props.type);
		const mainZoneClass = this.state.spin ? 'SocialIcon-mainZone' + ' ' + 'SocialIcon-mainZoneSpin' : 'SocialIcon-mainZone';

		return (
			<a
				target={'_blank'}
				href={this.props.link}
			>
				<div
					style={iconStyle}
					className={mainZoneClass}
					onMouseEnter={this._onMouseEnter.bind(this)}
					onMouseLeave={this._onMouseLeave.bind(this)}
				>
					{Icon}
				</div>
			</a>
		);
	}
}

export default SocialIcon;
