import React from "react";
import PropTypes from 'prop-types';
import Medium from 'react-icons/lib/fa/medium';
import Facebook from 'react-icons/lib/fa/facebook';
import Github from 'react-icons/lib/fa/github-alt';
import Youtube from 'react-icons/lib/fa/youtube';
import Linkedin from 'react-icons/lib/fa/linkedin';
import 'react-icons/lib/fa/linkedin';
import './SocialIcon.css';

class SocialIcon extends React.Component {
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
	_onMouseEnter(e) {
		this.setState({
			spin: true
		});
		if (this.props.onMouseEnter) {
			this.props.onMouseEnter(e);
		}
	}
	_onMouseLeave(e) {
		this.setState({
			spin: false
		});
		if (this.props.onMouseLeave) {
			this.props.onMouseLeave(e);
		}
	}
	render() {
		const iconStyle = {
			color: this.props.color,
			backgroundColor: this.props.backgroundColor
		}
		const Icon = this.getIcon(this.props.type);
		const mainZoneClass = this.state.spin ? 'SocialIcon-mainZone SocialIcon-mainZoneSpin' : 'SocialIcon-mainZone';

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

SocialIcon.propTypes = {
	type: PropTypes.string,
	link: PropTypes.string,
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func
};

export default SocialIcon;
