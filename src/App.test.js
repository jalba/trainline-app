import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import App from './App';
import DeparturesList from './components/DeparturesList';

const expect = chai.expect;

describe('An App component', ()=> {
  it('renders title', () => {
    const wrapper = shallow(<App />);
    const title = <h2>Departures From Waterloo Station</h2>;
    expect(wrapper.contains(title)).to.be.true;
  });
  it('renders a DeparturesList component', () => {
    const wrapper = shallow(<App />);
    const departuresList = <DeparturesList />;
    expect(wrapper.contains(departuresList)).to.be.true;
  });
});
