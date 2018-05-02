// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<App />, root);
}
