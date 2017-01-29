import constants from '../constants';

const callingData = (state={}, action) => {
  switch(action.type) {
    case constants.callingSuccess:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};

export default callingData;