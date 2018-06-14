// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';

window.addEventListener('load', () => {
  const root = document.querySelector('#root');
  if (root) {
    ReactDOM.render(<App />, root);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
