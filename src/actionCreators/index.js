import getDepartures from '../actions/getDepartures';
import getCallingPattern from '../actions/getCallingPattern';

export const fetchDepartures = dispatch => {
  return () => {
    dispatch(getDepartures);
  }
};

export const fetchCallingPattern = dispatch => {
	return nextState => {
       const time = new Date();
       const year = time.getFullYear();
       const month = time.getMonth() + 1;
       const day = time.getDate();
       const today = year + '-' + (month > 9 ? '' : '0') + month + '-' + (day > 9 ? '' : '0') + day;
       const serviceInfo = `${nextState.params.trainId}/${today}`; 
       dispatch(getCallingPattern(serviceInfo));
	}
};