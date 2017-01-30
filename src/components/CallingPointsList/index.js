import React from 'react';

import './index.css';
import CallingPoint from '../CallingPoint';

function getTrainPosition(list) {
  let idx = 0;
  list.forEach((station, i) => {
    if(station.arrival.notApplicable || station.arrival.realTime.realTimeServiceInfo.hasArrived) {
    	if(station.departure.notApplicable || station.departure.realTime.realTimeServiceInfo.hasDeparted) {
    	  return;
    	} else {
          idx = i;
    	}
    } else if(list[i-1].departure.realTime.realTimeServiceInfo.hasDeparted) {
    	idx = i - 0.5;
    }
  });
  return idx;
}

export default function CallingPointsList(props) {
  const list = props.callingPoints;
  const position =  getTrainPosition(list);
  return (
    <div className="calling-points-container">
      <ul>
        { 
          list.map((point, i)=> {
            const passed = position > i;
            const inStation = position === i;
            const inRange = Math.floor(position) === i;
            return (
              <CallingPoint 
                data={point} 
                key={point.location.crs}
                passed={passed}
                inStation={inStation}
                inRange={inRange}
              />
            );
          })
        }
      </ul>
    </div>
  );
}