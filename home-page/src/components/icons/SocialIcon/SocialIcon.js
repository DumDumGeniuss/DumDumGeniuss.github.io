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
			youtube: <Youtube />
		};
	}
	getIcon(type) {
		return this.typeIconMap[type];
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
		const mainZoneClass = this.state.spin ? style.mainZone + ' ' + style.mainZoneSpin : style.mainZone;

		return (
			<a
				// target={'_blank'}
				style={iconStyle}
				href={this.props.link}
				className={mainZoneClass}
				onMouseEnter={this._onMouseEnter.bind(this)}
				onMouseLeave={this._onMouseLeave.bind(this)}
			>
				{Icon}
			</a>
		);
	}
}

export default SocialIcon;
