import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const originalError = console.error;
console.error = function (...args) {
  if (
    args[0] &&
    typeof args[0] === 'string' &&
    args[0].includes('ResizeObserver loop completed with undelivered notifications')
  ) {
    return;
  }
  originalError.apply(console, args);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);