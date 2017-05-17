import React from "react";
import PropTypes from 'prop-types';
import './ProjectsZone.css';
import PromoteBox from '../../boxes/PromoteBox/PromoteBox.js';
import RURSK from './React-Universal-React-Starter-Kit.jpg';
import CEMM from './Create-Express-Mongo-Mocha.jpg';
import LJWDG from './Learning-Japanese-With-DumDum-Genius.jpg';

const projects = [
	{
		id: 'adsadsaf',
		img: RURSK,
		href: 'https://github.com/DumDumGeniuss/react-universal-redux-starter-kit',
		title: 'React-Universal-React-Starter-Kit',
	},
	{
		id: 'd8s9afsda',
		img: LJWDG,
		href: 'https://medium.com/@dumdumgenius/%E5%BE%9E-0-%E5%88%B0-100-%E6%97%A5%E6%96%87%E6%95%99%E5%AD%B8-1-%E5%9F%BA%E6%9C%AC%E5%8A%A9%E8%A9%9E%E8%AA%8D%E8%AD%98-bcce7c9f383',
		title: 'Learning-Japanese-With-DumDum-Genius',
	},
	{
		id: 'dsafdsafds',
		img: CEMM,
		href: 'https://github.com/DumDumGeniuss/create-express-mongo-mocha',
		title: 'Create-Express-Mongo-Mocha',
	},
	{
		id: 'sadiofdjsaifo',
		img: LJWDG,
		href: 'https://medium.com/@dumdumgenius/%E5%BE%9E-0-%E5%88%B0-100-%E6%97%A5%E6%96%87%E6%95%99%E5%AD%B8-1-%E5%9F%BA%E6%9C%AC%E5%8A%A9%E8%A9%9E%E8%AA%8D%E8%AD%98-bcce7c9f383',
		title: 'Learning-Japanese-With-DumDum-Genius',
	}
];

class ProjectsZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showHelloEng: false,
		};
	}
	componentDidMount() {
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
			<div style={zoneSize} className={'ProjectsZone-mainZone'}>
				<h1 className={'ProjectsZone-title'}>My Projects</h1>
				<div className={'ProjectsZone-porjectsBox'}>
					<div>
						<PromoteBox
							width={400}
							widthUnit={'px'}
							height={400}
							heightUnit={'px'}
							backgroundColor={'black'}
							border={'1px solid white'}
							projects={projects}
						/>
					</div>
				</div>
			</div>
		);
	}
}

ProjectsZone.propTypes = {
	width: PropTypes.number,
	widthUnit: PropTypes.string,
	height: PropTypes.number,
	heightUnit: PropTypes.string,
	backgroundColor: PropTypes.string,
	position: PropTypes.string,
	top: PropTypes.number,
	topUnit: PropTypes.string,
};

export default ProjectsZone;
