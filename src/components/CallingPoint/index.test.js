import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import CallingPoint from './index.js';

const expect = chai.expect;
const stationCode = 'TXH';
const data = {
  location: {
    crs: stationCode
  }
};

describe('A CallingPoint component', () => {
  it('renders', () => {
    const wrapper = shallow(<CallingPoint data={data} />);
    expect(wrapper.hasClass('calling-point')).to.be.true;
    expect(wrapper.exists()).to.be.true;
  });
  it('renders the correct station name or the code', () => {
    const wrapper = shallow(<CallingPoint data={data} />);
    expect(wrapper.find('.station-name').text()).to.equal(stationCode);
  });
  it('should not display the train elment if the train is not passing through the station', () => {
    const wrapper = shallow(<CallingPoint data={data} />);
    expect(wrapper.find('.in-station').length).to.equal(0);
    expect(wrapper.find('.in-range').length).to.equal(0);
    expect(wrapper.find('.parked').length).to.equal(0);
    expect(wrapper.find('.train-call').length).to.equal(1);
  });
});
