import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStoreWithMiddleware)
    : createStoreWithMiddleware;

  const store = create(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    });
  }

  return store;
}