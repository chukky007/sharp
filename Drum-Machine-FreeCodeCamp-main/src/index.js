import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import togglesReducer from './drumReducer';
import Drum from './drum';
import logger from 'redux-logger'


const store = createStore(togglesReducer, applyMiddleware(logger));

// const composedEnhancer = composeWithDevTools (
//   applyMiddleware(logger)
// )
// const store = createStore(togglesReducer, composedEnhancer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Drum />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
