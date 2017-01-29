export default function getDepartureTime(timeStamp) {
  const time = new Date(timeStamp);
  const hours = time.getHours();
  const minutes = '0' + time.getMinutes();
  const timeDisplay = hours + ':' +minutes.substr(-2);
  if(timeDisplay.indexOf('NaN') > -1) {
  	return 'n/a';
  }
  return timeDisplay;
}