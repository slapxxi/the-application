/* eslint no-console: [0] */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as App from './App';
import './style/index.css';

window.addEventListener('load', () => {
  const root = document.querySelector('#root');
  if (root) {
    ReactDOM.render(<App />, root);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  });
}
