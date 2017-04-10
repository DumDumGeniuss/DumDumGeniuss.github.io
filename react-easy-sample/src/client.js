import React from "react";
import ReactDOM from "react-dom";


const app = document.getElementById('app');

class Home extends React.Component {
	render() {
		return (
			<h1>Hola!</h1>
		);
	}
}

ReactDOM.render(<Home/>, app);