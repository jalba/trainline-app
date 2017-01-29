
export default function getTimeDiff(date1, date2) {
  const date1Hour = date1.getHours();
  const date1Minutes = date1.getMinutes();
  const date2Hour = date2.getHours();
  const date2Minutes = date2.getMinutes();
  if(date1Hour === date2Hour && date1Minutes === date2Minutes) {
  	return 'On Time';
  } else {
  	return 'Est. ' + date2Hour + ':' + ('0' + date2Minutes).substr(-2);
  }
}