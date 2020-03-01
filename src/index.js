import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.addEventListener('error', (event) => {
  console.log('error event: ', event)
})

const queryParams = new URLSearchParams(window.location.search)
const shouldThrow = queryParams.get('shouldThrow')
if (shouldThrow) {
  throw new Error('Test error')
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
