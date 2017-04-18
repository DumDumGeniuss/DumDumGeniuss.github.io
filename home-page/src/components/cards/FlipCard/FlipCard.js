import React from "react";
import ReactDOM from "react-dom";
import style from './FlipCard.css';

class FlipCard extends React.Component {
	static get propTypes() {
		return {
			width: React.PropTypes.number,
			widthUnit: React.PropTypes.string,
			height: React.PropTypes.number,
			heightUnit: React.PropTypes.string,
			titleWords: React.PropTypes.string,
			frontWords: React.PropTypes.string,
			backWords: React.PropTypes.string,
			show: React.PropTypes.bool,
			onMouseEnter: React.PropTypes.func,
			onMouseLeave: React.PropTypes.func,
		};
	}
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
	}
	componentWillUnmount() {
	}
	_onMouseEnter(e) {
		this.props.onMouseEnter(e);
	}
	_onMouseLeave(e) {
		this.props.onMouseLeave(e);
	}
	render() {
		const mainZoneStyle = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
		};
		const mainZoneClass = this.props.show ? style.mainZone + ' ' + style.mainZoneShow : style.mainZone;
		const contentClass = this.props.show ? style.content + ' ' + style.contentShow : style.content;
		const frontWordsClass = style.middleWords + ' ' + style.frontWords;
		const backWordsClass = style.middleWords + ' ' + style.backWords;
		const titleWordsClass = this.props.show ? style.titleWords + ' ' + style.titleWordsShow : style.titleWords;

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

export default FlipCard;
