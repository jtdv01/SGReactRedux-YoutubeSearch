import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import YTSearch from 'youtube-api-search';

// Assumes this as an export
import ytsearch_api_key from './ytsearch_api_key';


const createStoreWithMiddleware = applyMiddleware()(createStore);

YTSearch({key: ytsearch_api_key, term: 'surfboards'},function(data){
  console.log(data);
});

ReactDOM.render(
    <div>
    <App />
    </div>
  , document.querySelector('.container'));

  // <Provider store={createStoreWithMiddleware(reducers)}>
  // </Provider>
