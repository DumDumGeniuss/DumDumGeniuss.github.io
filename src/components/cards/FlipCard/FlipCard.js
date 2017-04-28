import React from "react";
import PropTypes from 'prop-types';
import './FlipCard.css';

class FlipCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
	}
	componentWillUnmount() {
	}
	_onMouseEnter() {
		this.props.onMouseEnter();
	}
	_onMouseLeave() {
		this.props.onMouseLeave();
	}
	render() {
		const mainZoneStyle = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
		};
		const mainZoneClass = this.props.show ? 'FlipCard-mainZone FlipCard-mainZoneShow' : 'FlipCard-mainZone';
		const contentClass = this.props.show ? 'FlipCard-content FlipCard-contentShow' : 'FlipCard-content';
		const frontWordsClass = 'FlipCard-middleWords FlipCard-frontWords';
		const backWordsClass = 'FlipCard-middleWords FlipCard-backWords';
		const titleWordsClass = this.props.show ? 'FlipCard-titleWords FlipCard-titleWordsShow' : 'FlipCard-titleWords';

		return (
			<div
				onMouseEnter={this._onMouseEnter.bind(this)}
				onMouseLeave={this._onMouseLeave.bind(this)}
				style={mainZoneStyle}
				className={mainZoneClass}
			>
				<span className={titleWordsClass}>{this.props.titleWords}</span>
				<div className={contentClass}>
					<span className={frontWordsClass}>{this.props.frontWords}</span>
					<span className={backWordsClass}>{this.props.backWords}</span>
				</div>
			</div>
		);
	}
}

FlipCard.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	titleWords: PropTypes.string,
	frontWords: PropTypes.string,
	backWords: PropTypes.string,
	show: PropTypes.bool,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
};

export default FlipCard;
