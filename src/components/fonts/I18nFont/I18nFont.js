import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import style from './I18nFont.css';


class I18nFont extends React.Component {
	render() {
		return (
			<div className={style.mainZone}>
				Hola!
			</div>
		);
	}
}

I18nFont.propTypes = {};

export default I18nFont;
