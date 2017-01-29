import React from 'react';
import { connect } from 'react-redux';

import Departure from '../Departure';
import './index.css';

function DeparturesList(props) {
  const services = props.services || [];
  return (
    <div className="list-container">
      <ul className="list">
        { services.map(service => <Departure data={ service } key={ service.serviceIdentifier }/>) }
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    services: state.departuresData.services
  };
}

export default connect(mapStateToProps)(DeparturesList);