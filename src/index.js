import React from 'react';
import { render } from 'react-snapshot';
import HomePage from './components/pages/HomePage/HomePage.js';
import './index.css';

render(
  <HomePage />,
  document.getElementById('root')
);