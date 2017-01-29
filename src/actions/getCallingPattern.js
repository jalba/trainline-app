import { CALL_API } from 'redux-api-middleware';

import constants from '../constants';

export default function getCallingPattern(serviceInfo) {
  return {
    [CALL_API]: {
      endpoint: 'https://realtime.thetrainline.com/callingPattern/' + serviceInfo,
      method: 'GET',
      types: [constants.callingRequest, constants.callingSuccess, constants.callingFailure]
    }
 };
}