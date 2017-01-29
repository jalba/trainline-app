import React from 'react';
import { Link } from 'react-router';

import './index.css';
import getOperator from '../../utils/getOperator';
import stations from '../../utils/stations';
import getTimeDiff from '../../utils/getTimeDiff';
import getDepartureTime from '../../utils/getDepartureTime';

export default function Departure(props) {
  const data = props.data;
  const time = new Date(data.scheduledInfo.scheduledTime);
  const timeDisplay = getDepartureTime(data.scheduledInfo.scheduledTime);
  const destinationCode = data.destinationList[data.destinationList.length - 1].crs;
  const realTimeUpdatesInfo = data.realTimeUpdatesInfo || {};
  const realTimeServiceInfo = realTimeUpdatesInfo.realTimeServiceInfo || {};
  const platform = realTimeServiceInfo.realTimePlatform ? realTimeServiceInfo.realTimePlatform : 'n/a';
  const realTimeDeparture = realTimeServiceInfo.realTime ? new Date(realTimeServiceInfo.realTime): 'n/a';
  const departureUpdate = realTimeDeparture !== 'n/a' ? getTimeDiff(time, realTimeDeparture) : realTimeDeparture;
  const realTimeClasses = departureUpdate === 'n/a' || departureUpdate.indexOf('Exp.') > -1 ? 'delayed' : 'on-time';
  return (
    <li className="departure">
      <Link to={`/${data.serviceIdentifier}`}>
        <div className="time">
          { timeDisplay }
        </div>
        <div className="train">
          <div className="destination">
            { stations[destinationCode] || destinationCode }
          </div>
          <div className="operator">
            { getOperator(data.serviceOperator) }
          </div>
        </div>
        <div className="info">
          <div className="updates">
            <div className="platform">
              { 'Plat. ' + platform }
            </div>
            <div className={'real-time ' + realTimeClasses}>
              { realTimeDeparture !== 'n/a' ? getTimeDiff(time, realTimeDeparture) : realTimeDeparture }
            </div>
          </div>
          <div className="arrow"></div>
        </div>
      </Link>
    </li>
  ); 
} 