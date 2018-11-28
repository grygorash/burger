import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App/App';
import { rootReducer } from './reducers';
import './normalize.css';
import './media.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

window.onload = () => {
  document.querySelector('#root').classList.remove('loading');
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
