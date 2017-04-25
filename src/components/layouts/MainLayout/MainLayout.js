import React from "react";
import ReactDOM from "react-dom";
import './MainLayout.css';
import logoImage from './logo.png';

class MainLayout extends React.Component {
	static get propTypes() {
		return {
			show: React.PropTypes.bool,
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
	render() {
		return (
			<div className={'MainLayout-mainZone'}>
				<navbar className={'MainLayout-navbar'}>
					<figure className={'MainLayout-logoZone'}>
						<img className={'MainLayout-logo'} src={logoImage} />
					</figure>
				</navbar>
				{this.props.children}
			</div>
		);
	}
}

export default MainLayout;
