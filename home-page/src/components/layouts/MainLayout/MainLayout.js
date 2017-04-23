import React from "react";
import ReactDOM from "react-dom";
import style from './MainLayout.css';
// import logoImage from './logo.png';

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
			<div className={style.mainZone}>
				<navbar className={style.navbar}>
					<figure className={style.logoZone}>
						<img className={style.logo} src={'https://dumdumgeniuss.github.io/home-page/dist/images/logo.png'} />
					</figure>
				</navbar>
				{this.props.children}
			</div>
		);
	}
}

export default MainLayout;
