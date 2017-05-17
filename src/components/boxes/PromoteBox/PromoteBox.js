import React from "react";
import PropTypes from 'prop-types';
import './PromoteBox.css';

class PromoteBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projectShowed: 1,
		};
		this.changeProjectShowed = this.changeProjectShowed.bind(this);
	}
	componentDidMount() {
		this.changeShowInterval = setInterval(() => {
			this.changeProjectShowed();
		}, 3000);
	}
	changeProjectShowed() {
		const projectNumber = this.props.projects.length;
		this.setState((state) => {
			return {
				projectShowed: (state.projectShowed + 1) % projectNumber
			};
		});
	}
	componentWillUnmount() {
		clearInterval(this.changeShowInterval);
	}
	render() {
		const zoneSize = {
			width: this.props.width + this.props.widthUnit,
			height: this.props.height + this.props.heightUnit,
			backgroundColor: this.props.backgroundColor,
			border: this.props.border,
		};

		return (
			<div style={zoneSize} className={'PromoteBox-mainZone'}>
				{
					this.props.projects.map((item, index) => {
						const imgClass = index === this.state.projectShowed ? 'PromoteBox-imgBox' : 'PromoteBox-imgBoxHide';
						return (
							<a
								target={'_blank'}
								key={item.id}
								href={item.href}
							>
								<div
									className={imgClass}
								>
									<img
										src={item.img}
										alt={item.title}
									/>
								</div>
							</a>
						);
					})
				}
			</div>
		);
	}
}

PromoteBox.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	border: PropTypes.string,
	projects: PropTypes.array,
};

export default PromoteBox;
