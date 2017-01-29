import constants from '../constants';

const departuresData = (state={}, action) => {
  switch(action.type) {
    case constants.departuresSuccess:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default departuresData;