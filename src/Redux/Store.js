/** NPM Modules imports */
import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
/** Custom imports */
import RootReducer from './Reducer';
// import TronConfig from './Tron';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducers = persistReducer(persistConfig, RootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxThunk];

if (__DEV__ && process.env.NODE_ENV !== 'test') {
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
    predicate: (getState, action) => action && action.type !== 'SET_LINES',
  });
  middlewares.push(logger);
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);
export default function configureStore() {
  // finalize store setup
  const store = createStore(persistedReducers, enhancer);
  const persistor = persistStore(store, null, () => {});
  return {store, persistor};
}
