import { CALL_API } from 'redux-api-middleware';

import constants from '../constants';

export default {
  [CALL_API]: {
    endpoint: 'https://realtime.thetrainline.com/departures/wat',
    method: 'GET',
    types: [constants.departuresRequest, constants.departuresSuccess, constants.departuresFailure]
  }
};