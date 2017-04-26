import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import HomePage from '../components/pages/HomePage/HomePage.js';
import DemoPage from '../components/pages/DemoPage/DemoPage.js';
import MainLayout from '../components/layouts/MainLayout/MainLayout.js';

class Routers extends React.Component {
	render() {
		return (
			<Router>
				<MainLayout>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/demo' component={DemoPage} />
					</Switch>
				</MainLayout>
			</Router>
		);
	}
}

export default Routers;