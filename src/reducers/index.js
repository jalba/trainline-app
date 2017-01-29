import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import departuresData from './departuresData';
import callingData from './callingData';

export default combineReducers({ departuresData, callingData, routing });