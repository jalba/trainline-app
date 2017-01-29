import React from 'react';
import { connect } from 'react-redux';

import train from './train.svg';
import './CallingPattern.css';
import stations from './utils/stations';
import getOperator from './utils/getOperator';
import CallingPointsList from './components/CallingPointsList';

function CallingPattern(props) {
  const data = props.data;
  const service = data.service || {};
  const serviceOrigins = service.serviceOrigins || [];
  const serviceDestinations = service.serviceDestinations || [];
  const origin = serviceOrigins[serviceOrigins.length - 1];
  const destination = serviceDestinations[serviceDestinations.length - 1];
  return (
    <div className="pattern-container">
      <div className="pattern-header">
        <img alt="train" src={train} className="train-icon"/>
        <div className="route">
          { stations[origin] }
          <br/>
          <span className="to">
            {'to '} 
          </span>
          { stations[destination] || destination }
        </div>
        <div className="operator">
          {'Operated by ' + getOperator(service.serviceOperator)}
        </div>
      </div>
      <CallingPointsList callingPoints={service.stops || []} />
    </div>
  );
}

function mapStateToProps(state) {
  return { data: state.callingData };
}

export default connect(mapStateToProps)(CallingPattern);