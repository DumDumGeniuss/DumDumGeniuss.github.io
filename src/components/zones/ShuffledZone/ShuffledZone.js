import React from "react";
import PropTypes from 'prop-types';
import './ShuffledZone.css';
import Umer from './umer.png';

class ShuffledZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showUmer: false,
		};
	}
	componentDidMount() {
	}
	showUmer(show) {
		if (show) {
			this.setState({
				showUmer: true
			});
		} else {
			this.setState({
				showUmer: false
			});
		}
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
			backgroundColor: this.props.backgroundColor,
			position: this.props.position,
			top: this.props.top + this.props.topUnit,
		};

		return (
			<div style={zoneSize}>
				<div className={'ShuffledZone-attentionZone'}>
					<span className={'ShuffledZone-attention'}><b>注意</b></span>
					<span className={'ShuffledZone-thankAttention'}><b>感謝你的注意</b></span>
				</div>
				<figure
					onMouseEnter={this.showUmer.bind(this, true)}
					onMouseLeave={this.showUmer.bind(this, false)}
					className={'ShuffledZone-umer'}
				>
					<div style={ {display: this.state.showUmer ? 'initial' : 'none'} } className={'ShuffledZone-umerWords'}>ㄩㄇ？</div>
					<img src={Umer} alt={'霸主 王希銘'}/>
				</figure>
			</div>
		);
	}
}

ShuffledZone.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	position: PropTypes.string,
	top: PropTypes.number,
	topUnit: PropTypes.string,
};

export default ShuffledZone;
