import React from 'react';

import getDepartureTime from '../../utils/getDepartureTime';
import getTimeDiff from '../../utils/getTimeDiff';
import stations from '../../utils/stations';
import './index.css';
import train from '../../train.svg';

export default function CallingPoint(props) {
  const data = props.data;
  console.log(data);
  const location = data.location;
  const stationName = location.crs;
  const departure = data.departure || {};
  const arrival = data.arrival || {};
  const realTimeDataDeparture = departure.realTime || {};
  const realTimeServiceInfoDeparture = realTimeDataDeparture.realTimeServiceInfo || {}; 
  const scheduledDeparture = departure.scheduled || {};
  const scheduledDepartureTime = scheduledDeparture.scheduledTime;
  const departureStamp = realTimeServiceInfoDeparture.realTime || scheduledDepartureTime;
  const isFirst = arrival.notApplicable;
  const isLast = departure.notApplicable;
  const upperSegment = isFirst ? 'first-segment' : '';
  const lowerSegment = isLast ? 'last-segment' : '';
  const firstOrLast = isFirst || isLast ? 'terminal-point' : '';
  const lastPoint = isLast ? ' last-point': '';
  const passed = props.passed ? ' passed' : '';
  const inStation = props.inStation ? ' in-station' : '';
  const inRange = props.inRange ? ' in-range' : '';
  const parked = props.inStation ? ' parked' : '';
  const time = new Date(scheduledDepartureTime);
  const realTimeDeparture = realTimeServiceInfoDeparture.realTime ? new Date(realTimeServiceInfoDeparture.realTime): 'n/a';
  const departureUpdate = realTimeDeparture !== 'n/a' ? getTimeDiff(time, realTimeDeparture) : realTimeDeparture;
  const realTimeClasses = departureUpdate === 'n/a' || departureUpdate.indexOf('Exp.') > -1 ? 'delayed' : 'on-time';
  return (
    <li className="calling-point">
      <div className="time-calling-point">
        { getDepartureTime(departureStamp) }
      </div>
      <div className="segment">
        <div className={'upper-segment ' + upperSegment }></div>
        <div className={'point ' + firstOrLast + lastPoint + passed }></div>
        <div className={'lower-segment ' + lowerSegment}></div>
        <div className={'train-call' + inStation + inRange}>
          <img alt="train arrived" className={'train-call-logo'} src={train} />
        </div>
      </div>
      <div className="info-station">
        <div className={'station-name' + parked}>
          { stations[stationName] || stationName }
        </div>
        <div className={'real-time-station ' + realTimeClasses}>
          { realTimeDeparture !== 'n/a' ? getTimeDiff(time, realTimeDeparture) : realTimeDeparture }
        </div>
      </div>
    </li>
  );
}