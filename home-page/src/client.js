import React from "react";
import ReactDOM from "react-dom";
import HomePage from './components/pages/HomePage/HomePage.js';


const app = document.getElementById('app');

class Home extends React.Component {
	render() {
		return (
			<div>
				<HomePage />
			</div>
		);
	}
}

ReactDOM.render(<Home/>, app);